/**
 * Telegram Card
 * Repository: https://github.com/Shineii86/Telegram-Card
 * Author: Shinei Nouzen
 * Copyright (c) 2026 Shinei Nouzen — MIT License
 */

const MAX_ENTRIES = 500;
const cache = new Map<string, { data: unknown; expires: number }>();

export function get<T>(key: string): T | null {
  const item = cache.get(key);
  if (!item) return null;
  if (item.expires <= Date.now()) {
    cache.delete(key);
    return null;
  }
  return item.data as T;
}

export function set<T>(key: string, data: T, ttl: number): void {
  // Evict oldest entries when limit is reached
  if (cache.size >= MAX_ENTRIES) {
    const oldest = cache.keys().next().value;
    if (oldest !== undefined) cache.delete(oldest);
  }
  cache.set(key, { data, expires: Date.now() + ttl });
}

export function clear(): void {
  cache.clear();
}

export function size(): number {
  return cache.size;
}
