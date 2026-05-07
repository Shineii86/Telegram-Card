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

/** Strip non-alphanumeric/underscore characters from username input. */
export function sanitizeUsername(username: string): string {
  return username.replace(/[^a-zA-Z0-9_]/g, '');
}
