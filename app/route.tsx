/**
 * Telegram Card
 * Repository: https://github.com/Shineii86/Telegram-Card
 * Author: Shinei Nouzen
 * Copyright (c) 2026 Shinei Nouzen — MIT License
 */

'use server';

import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import scrapeTelegram from '@/utils/scrapeTelegram';
import { TelegramScrapeError, UserNotFoundError } from '@/utils/errors';
import { resolveTheme, resolveVerifiedOverride, sanitizeUsername } from '@/utils/theme';
import { TelegramCard, ErrorCard } from '@/components/TelegramCard';
import { readFileSync } from 'fs';
import { join } from 'path';

const RESPONSE_HEADERS: Record<string, string> = {
  'Content-Security-Policy':
    "default-src 'none'; img-src 'self' data:; style-src 'unsafe-inline'; font-src 'self'",
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
};

function imageHeaders(): Headers {
  const h = new Headers(RESPONSE_HEADERS);
  h.set('Content-Type', 'image/png');
  h.set('Cache-Control', 'public, max-age=7200');
  return h;
}

export async function GET(request: NextRequest) {
  let errorMessage = 'Please check the username and try again';

  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    const isDark = searchParams.get('theme') === 'dark';

    // Serve landing page when no username is given
    if (!username) {
      try {
        const html = readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf8');
        return new Response(html, {
          status: 200,
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=3600',
          },
        });
      } catch {
        return new Response('Homepage not found', { status: 404 });
      }
    }

    const sanitized = sanitizeUsername(username);
    const result = await scrapeTelegram(sanitized);
    const theme = resolveTheme(searchParams, isDark);
    const isVerified = resolveVerifiedOverride(searchParams, result.isVerified);

    const response = new ImageResponse(
      <TelegramCard result={{ ...result, isVerified }} theme={theme} isDark={isDark} />,
      { width: 700, height: 250, emoji: 'fluent', headers: imageHeaders() },
    );

    const buffer = Buffer.from(await response.arrayBuffer());
    return new Response(buffer, { status: 200, headers: imageHeaders() });
  } catch (error) {
    console.error('Error generating Telegram card:', error);
    if (error instanceof UserNotFoundError || error instanceof TelegramScrapeError) {
      errorMessage = error.message;
    }

    const fallback = new ImageResponse(<ErrorCard message={errorMessage} />, {
      width: 700,
      height: 250,
      emoji: 'fluent',
      headers: imageHeaders(),
    });

    const buffer = Buffer.from(await fallback.arrayBuffer());
    return new Response(buffer, { status: 200, headers: imageHeaders() });
  }
}
