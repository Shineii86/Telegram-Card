/**
 * Telegram Card
 * Repository: https://github.com/Shineii86/Telegram-Card
 * Author: Shinei Nouzen
 * Copyright (c) 2026 Shinei Nouzen — MIT License
 */

import type { CardThemeOptions } from '@/types/enums';

const LIGHT_DEFAULTS: CardThemeOptions = {
  bgColor: 'rgba(255, 255, 255, 1)',
  textColor: '#000000',
  subtleTextColor: '#666666',
  extraColor: '#3390D6',
  shadowColor: 'rgba(0,0,0,0.06)',
  fontFamily: 'Inter, sans-serif',
};

const DARK_DEFAULTS: CardThemeOptions = {
  bgColor: 'rgba(42, 42, 42, 1)',
  textColor: '#ffffff',
  subtleTextColor: '#AAAAAA',
  extraColor: '#8DD5FF',
  shadowColor: 'rgba(0,0,0,0.3)',
  fontFamily: 'Inter, sans-serif',
};

/** Resolve theme options from search params, falling back to sensible defaults. */
export function resolveTheme(
  params: URLSearchParams,
  isDark: boolean,
): CardThemeOptions {
  const defaults = isDark ? DARK_DEFAULTS : LIGHT_DEFAULTS;
  return {
    bgColor: params.get('bgColor') || defaults.bgColor,
    textColor: params.get('textColor') || defaults.textColor,
    subtleTextColor: params.get('subtleTextColor') || defaults.subtleTextColor,
    extraColor: params.get('extraColor') || defaults.extraColor,
    shadowColor: params.get('shadowColor') || defaults.shadowColor,
    fontFamily: params.get('fontFamily') || defaults.fontFamily,
  };
}

/** Resolve the `verified` query param: true / false / auto (default). */
export function resolveVerifiedOverride(
  params: URLSearchParams,
  autoDetected: boolean,
): boolean {
  const raw = params.get('verified')?.toLowerCase();
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  return autoDetected; // 'auto' or absent → use scraped value
}

/** Strip non-alphanumeric/underscore characters from username input. */
export function sanitizeUsername(username: string): string {
  return username.replace(/[^a-zA-Z0-9_]/g, '');
}

/** Validate and sanitize a custom photo URL. Returns null if invalid. */
export function sanitizePhotoUrl(raw: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
    return url.href;
  } catch {
    return null;
  }
}

/** Generate a default avatar SVG data-URI with the user's initial letter. */
export function generateDefaultAvatar(username: string, isDark: boolean): string {
  const initial = (username.charAt(0) || '?').toUpperCase();
  const bgColor = isDark ? '#3a3a3a' : '#c4c9d4';
  const textColor = isDark ? '#8DD5FF' : '#3390D6';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="60" fill="${bgColor}"/>
    <text x="60" y="60" dy="0.35em" text-anchor="middle" font-family="Arial,sans-serif" font-size="52" font-weight="700" fill="${textColor}">${initial}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
