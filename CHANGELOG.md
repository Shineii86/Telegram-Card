# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.0] - 2026-05-07

### Added
- **Verified badge override**: New `verified` query parameter — `true` to force-show, `false` to force-hide, `auto` (default) for auto-detection from Telegram page
- `resolveVerifiedOverride()` helper in `utils/theme.ts`

## [2.2.0] - 2026-05-07

### Added
- **Modular architecture**: Extracted `TelegramCard` and `ErrorCard` React components into `components/TelegramCard.tsx`
- **Theme utility module**: New `utils/theme.ts` with `resolveTheme()` and `sanitizeUsername()` helpers
- **Root layout**: Added `app/layout.tsx` with proper Next.js metadata (OG + Twitter cards)
- **Security middleware**: New `middleware.ts` enforcing X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Permissions-Policy headers
- **TypeScript interfaces**: Added `ScrapeResult` and `CardThemeOptions` interfaces in `types/enums.ts`
- **Cache management**: Added `clear()` and `size()` exports to `utils/cache.ts`
- **CHANGELOG.md**: This file — every change recorded with date and description

### Changed
- **Breaking**: Renamed `SoruceType` enum to `SourceType` (typo fix) — update any external imports
- **Route refactored**: `app/route.tsx` reduced from ~240 lines to ~85 lines; delegates rendering to `TelegramCard` component and theme logic to `utils/theme.ts`
- **Cache hardening**: Cache entries capped at 500 with FIFO eviction to prevent unbounded memory growth; expired entries are deleted on read
- **Error classes**: `utils/errors.ts` cleaned up (removed redundant JSDoc headers)
- **Parsers**: `utils/parsers.ts` updated to use `SourceType` enum
- **Scraper**: `utils/scrapeTelegram.ts` now imports `ScrapeResult` from shared types; updated User-Agent string
- **README**: Updated project structure, corrected data-source description (web scraping, not MTProto), removed undocumented env vars

### Fixed
- Cache `get()` now deletes expired entries instead of silently returning null
- `sanitizeUsername()` now strips all non-alphanumeric/underscore characters (was replacing with space before)
