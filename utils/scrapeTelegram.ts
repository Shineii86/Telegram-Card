/**
 * Telegram Card
 * Repository: https://github.com/Shineii86/Telegram-Card
 * Author: Shinei Nouzen
 * Copyright (c) 2026 Shinei Nouzen — MIT License
 */

'use server';

import { JSDOM } from 'jsdom';
import { TelegramScrapeError, UserNotFoundError } from './errors';
import {
  determineSourceType,
  extractDescription,
  extractExtraInfo,
  extractImage,
  extractTitle,
  extractVerifiedStatus,
} from './parsers';
import { SourceType, type ScrapeResult } from '@/types/enums';
import { get, set } from './cache';

const CACHE_TTL = 60 * 60 * 1000; // 1 hour

async function fetchAndParseHtml(username: string): Promise<Document> {
  const response = await fetch(`https://t.me/${username}`, {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    },
  });

  if (!response.ok) {
    if (response.status === 404) throw new UserNotFoundError(username);
    throw new TelegramScrapeError(
      `Failed to fetch data for @${username}. Status: ${response.status}`,
    );
  }

  const text = await response.text();
  const dom = new JSDOM(text);
  return dom.window.document;
}

async function scrapeAndCache(username: string): Promise<ScrapeResult> {
  try {
    const doc = await fetchAndParseHtml(username);

    const image = extractImage(doc);
    const title = extractTitle(doc);
    const description = extractDescription(doc);

    if (!title) {
      throw new TelegramScrapeError('Could not parse essential data from the Telegram page.');
    }

    const type = determineSourceType(doc);
    const extra = extractExtraInfo(doc, type);
    const isVerified = extractVerifiedStatus(doc);

    const result: ScrapeResult = {
      type,
      title,
      username,
      description,
      image,
      extra,
      isVerified,
    };

    set(username, result, CACHE_TTL);
    return result;
  } catch (error) {
    if (error instanceof TelegramScrapeError) throw error;
    throw new TelegramScrapeError(
      `An unexpected error occurred while scraping @${username}.`,
    );
  }
}

export default async function scrapeTelegram(username: string): Promise<ScrapeResult> {
  const cached = get<ScrapeResult>(username);
  if (cached) return cached;
  return scrapeAndCache(username);
}
