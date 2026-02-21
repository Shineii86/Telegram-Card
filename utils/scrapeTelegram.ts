/**
 * Telegram Card
 * A lightweight and efficient web scraping utility designed to generate
 * clean, dynamic preview cards for Telegram profiles, channels, groups, and bots.
 *
 * Repository: https://github.com/Shineii86/Telegram-Card
 *
 * This project is built to help developers seamlessly showcase Telegram
 * communities and bots with visually structured metadata, making it ideal
 * for integration into GitHub profiles, portfolio websites, and personal projects.
 *
 * This server-side utility scrapes information from Telegram's public web pages to extract profile information.
 *
 * Author:Shinei Nouzen
 *
 * Copyright (c) 2026 Shinei Nouzen
 *
 * Released under the MIT License.
 * You are free to use, modify, and distribute this software in accordance
 * with the terms of the license.
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
    extractVerifiedStatus
} from './parsers';
import { SoruceType } from '@/types/enums';
import { get, set } from './cache';

const CACHE_TTL = 60 * 60 * 1000; // 1 hour

interface ScrapeResult {
    type: SoruceType;
    title: string;
    username: string;
    description: string | null;
    image: string;
    extra: string | null;
    isVerified: boolean;
}

async function fetchAndParseHtml(username: string): Promise<Document> {
    const response = await fetch(`https://t.me/${username}`, {
        method: 'GET',
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        },
    });

    if (!response.ok) {
        if (response.status === 404) {
            throw new UserNotFoundError(username);
        }
        throw new TelegramScrapeError(`Failed to fetch data for @${username}. Status: ${response.status}`);
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

        if (!image || !title) {
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
        if (error instanceof TelegramScrapeError) {
            throw error;
        }
        throw new TelegramScrapeError(`An unexpected error occurred while scraping @${username}.`);
    }
}

export default async function scrapeTelegram(username: string): Promise<ScrapeResult> {
    const cachedResult = get<ScrapeResult>(username);
    if (cachedResult) {
        return cachedResult;
    }
    return scrapeAndCache(username);
}
