/**
 * Telegram Card
 * Repository: https://github.com/Shineii86/Telegram-Card
 * Author: Shinei Nouzen
 * Copyright (c) 2026 Shinei Nouzen — MIT License
 */

export enum SourceType {
  Unknown = 'UNKNOWN',
  User = 'USER',
  Bot = 'BOT',
  Channel = 'CHANNEL',
  Group = 'GROUP',
}

/** Result returned by the Telegram scraper */
export interface ScrapeResult {
  type: SourceType;
  title: string;
  username: string;
  description: string | null;
  image: string;
  extra: string | null;
  isVerified: boolean;
}

/** All customisable colour / font query parameters */
export interface CardThemeOptions {
  bgColor: string;
  textColor: string;
  subtleTextColor: string;
  extraColor: string;
  shadowColor: string;
  fontFamily: string;
}
