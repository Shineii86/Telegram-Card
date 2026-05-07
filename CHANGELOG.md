# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.4.0] - 2026-05-08

### Added
- **"Why This Exists" section**: Before/after comparison showing plain URL vs rich card
- **"What Makes This Different" comparison table**: Side-by-side vs screenshot tools, static badges, and custom OG APIs across 9 dimensions
- **"See It In Action" gallery**: Full 4×2 entity-type × theme preview + 8 custom color scheme showcases (Midnight Blue, Warm Sunset, Emerald Forest, Royal Purple, Cherry Blossom, Arctic Frost, Lava Glow, Ocean Deep)
- **"Error Cards" section**: Documenting graceful error card behavior — never broken images
- **"Verified Badge Showcase" section**: Visual table showing auto/true/false behavior with examples
- **"How It Works" section**: 7-step technical walkthrough with actual code snippets from the codebase
- **"Architecture Deep Dive" section**: Full ASCII system architecture diagram with edge network detail + data flow diagram + component hierarchy tree + module responsibility table with line counts
- **Satori vs Puppeteer comparison table**: Performance, memory, edge-compatibility, cost model analysis
- **"Features" section**: 6-category 2×3 grid (Performance, Customization, Intelligence, Security, Deployment, Integration)
- **"Copy-Paste Snippets" section**: Ready-to-use code for GitHub, Discord, Notion, HTML, React/Next.js, Vue 3, Svelte, Astro, Hugo, Jekyll, PHP, Ruby, and multi-card grids
- **"Ready-Made Color Palettes" section**: 12 complete palette URLs (added Mint Fresh, Pure Black/OLED, Cloud White, Cosmic Indigo)
- **"Programmatic Usage" section**: Code examples in Node.js/TypeScript, Python, cURL, Go, and PHP
- **"Interactive Card Builder" section**: Full documentation of the landing page features (presets, color pickers, advanced options, live preview, copy URL)
- **"SEO & Metadata" section**: Documentation of landing page meta tags, OG tags, Twitter cards, JSON-LD structured data
- **"Troubleshooting" section**: 7 common issues with cause/solution tables (error cards, stale data, broken images, color issues, sizing, verified badge, fonts)
- **"FAQ" section**: 10 expandable Q&A entries covering all common questions
- **"Roadmap" section**: Completed features checklist + planned features (custom dimensions, layout variants, SVG output, batch endpoint, etc.)
- **"Star History" section**: Interactive star history chart via star-history.com
- **"Powered By" section**: Technology badges in footer
- **"Entity Type Detection" section**: Dedicated table with detection signals and stats for each type
- **Platform Comparison table**: Edge support, cold start, free tier, and config file for all 6 deployment targets
- **Performance & Benchmarks section**: Latency table, image specs, 3-layer caching diagram, scaling math table
- **Security Model section**: 4-layer defense-in-depth diagram + security properties list
- **Use Cases & Integration Patterns**: 8 real-world examples (GitHub README, docs, portfolio, blog, marketing grid, Discord, email signature)
- **Module responsibility table**: Every source file with line counts and descriptions
- **Landing page section**: Full feature documentation of the interactive card builder
- **Social links footer**: GitHub follow/star/fork buttons + profile view counter (komarev)

### Changed
- **README overhaul**: Complete rewrite — from initial ~4KB to ~63KB comprehensive documentation
- **TL;DR banner**: Added prominent one-liner at the top for instant comprehension
- **Badge layout**: 8 for-the-badge badges (license, stars, forks, issues, last commit, repo size, type-safe, zero deps)
- **Hero section**: "TRY IT LIVE" prominent badge button
- **Deployment section**: CLI deploy example (`vercel` command) alongside one-click buttons
- **API Reference**: 9 parameters, 6 color formats, 6 response headers, 5 error scenarios
- **Theming Guide**: Default palette reference, override rules, verified badge table
- **FAQ**: 10 expandable entries
- **Support section**: HTML table with 6 contact channels
- **Footer**: Banner + follow/star/fork trio + "Powered By" tech badges + profile view counter

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
