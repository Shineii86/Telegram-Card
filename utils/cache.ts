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
 * This module contains a simple in-memory cache.
 *
 * Author:Shinei Nouzen
 *
 * Copyright (c) 2026 Shinei Nouzen
 *
 * Released under the MIT License.
 * You are free to use, modify, and distribute this software in accordance
 * with the terms of the license.
 */

const cache = new Map<string, { data: any; expires: number }>();

export function get<T>(key: string): T | null {
    const item = cache.get(key);
    if (item && item.expires > Date.now()) {
        return item.data as T;
    }
    return null;
}

export function set<T>(key: string, data: T, ttl: number) {
    const expires = Date.now() + ttl;
    cache.set(key, { data, expires });
}
