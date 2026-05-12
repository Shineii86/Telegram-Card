# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.5.1] - 2026-05-12

### Fixed
- **Vercel build failure**: Fixed TypeScript type error where `result.image` (`string | null`) was passed directly to `<img src>` which requires `string | undefined` — used nullish coalescing (`?? undefined`) to resolve the type mismatch that caused all recent Vercel deployments to fail with `missing_name` error

## [2.5.0] - 2026-05-12

### Fixed
- **Theme-aware error cards**: Error cards now respect the active theme — dark mode errors use dark backgrounds with light text, matching the main card style instead of always showing a jarring white card
- **Default avatar for users without profile photos**: Users without a Telegram profile photo no longer trigger an error card — a themed avatar with the user's initial letter is generated instead
- **og:image fallback for avatar**: Scraper now checks `og:image` and `twitter:image` meta tags when the primary profile photo element is missing, recovering avatars that Telegram only exposes via Open Graph metadata
- **Telegram logo filter**: Default Telegram logos (`t_logo`, `website_icon`) are now filtered out from meta tag fallbacks so they are never used as user avatars
- **Scrape resilience**: `extractImage()` now filters out blank/placeholder images (e.g. `blank.gif`, transparent data URIs) instead of returning them as valid URLs
- **Scraper no longer fails on missing avatar**: `scrapeAndCache()` only requires `title` to be present; `image` is now optional and resolved downstream

### Added
- **`photo` query parameter**: Custom avatar URL override — pass any `http`/`https` image URL to replace the Telegram profile photo on the card (e.g. `?photo=https://example.com/avatar.png`)
- **`sanitizePhotoUrl()` utility**: Validates custom photo URLs (protocol check, malformed URL protection)
- **Card builder UI**: New "Custom Photo URL" input in Advanced Options on the landing page
- **`generateDefaultAvatar()` utility**: Generates a themed SVG data-URI avatar with the user's first letter as initial — adapts to light/dark theme automatically
- **`image` field is now optional** in `ScrapeResult` interface (`string | null`) to properly represent users without profile photos
- **ErrorCard accepts `isDark` prop**: Error cards now render with themed colors, shadows, accent colors, and corner gradient — consistent with the main card design

## [2.4.1] - 2026-05-08

### Changed
- **Image preview sizes**: Increased gallery image dimensions for better visibility — Before/After 320→480px, entity gallery 300→450px, custom palettes 280→420px

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
