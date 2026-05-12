# Architecture

## How It Works

A step-by-step walkthrough of what happens when you request a card:

### Step 1 — Request Arrives

```
GET /?username=Shineii86&theme=dark
```

The edge function receives the request at the nearest Vercel PoP (Frankfurt, Tokyo, São Paulo, etc.).

### Step 2 — Input Sanitization

```typescript
// utils/theme.ts
export function sanitizeUsername(username: string): string {
  return username.replace(/[^a-zA-Z0-9_]/g, '');
}
```

The username is stripped of everything except letters, numbers, and underscores. No injection possible.

### Step 3 — Cache Check

```typescript
// utils/cache.ts
const cached = cache.get(sanitizedUsername);
if (cached && !isExpired(cached)) {
  return new Response(cached.buffer, { headers: imageHeaders() });
}
```

Valid cached PNG? Return it instantly. **No scraping, no rendering.** This is why cache hits are < 10ms.

### Step 4 — Telegram Scrape

```typescript
// utils/scrapeTelegram.ts
const response = await fetch(`https://t.me/${username}`);
const dom = new JSDOM(html);
```

Fetches the public `t.me` preview page and extracts:
- **Title** — display name
- **Avatar** — profile picture URL
- **Entity type** — User / Bot / Channel / Group
- **Stats** — subscriber count, member count, online status
- **Verified badge** — Telegram's official verification
- **Description** — bio or channel description

### Step 5 — Theme Resolution

```typescript
// utils/theme.ts
const defaults = isDark ? DARK_DEFAULTS : LIGHT_DEFAULTS;
return {
  bgColor: params.get('bgColor') || defaults.bgColor,
  textColor: params.get('textColor') || defaults.textColor,
  // ... all 6 properties
};
```

User overrides merge with theme defaults. Unset params fall back gracefully.

### Step 6 — PNG Rendering

```typescript
// app/route.tsx
const response = new ImageResponse(
  <TelegramCard result={result} theme={theme} isDark={isDark} />,
  { width: 700, height: 250, emoji: 'fluent' }
);
```

Satori converts JSX → SVG → PNG at the edge. No Puppeteer. No headless browser. Pure computation.

### Step 7 — Response + Cache

PNG returned with security headers and `Cache-Control: public, max-age=7200`. Subsequent requests hit the CDN.

---

## System Architecture

```
                           ┌─────────────────────┐
                           │    Client Browser    │
                           │  (GitHub / Twitter / │
                           │   Blog / Discord)    │
                           └──────────┬──────────┘
                                      │ GET /?username=X&theme=dark
                                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                          │
│                   (100+ Global PoPs)                            │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                   Edge Middleware                          │  │
│  │  • Content-Security-Policy: strict                        │  │
│  │  • X-Content-Type-Options: nosniff                        │  │
│  │  • Referrer-Policy: no-referrer                           │  │
│  │  • Permissions-Policy: camera=(), microphone=()           │  │
│  └──────────────────────────┬────────────────────────────────┘  │
│                             │                                    │
│                             ▼                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                  Route Handler                             │  │
│  │                                                            │  │
│  │  ┌──────────┐    ┌──────────┐    ┌─────────────────────┐  │  │
│  │  │ Sanitize │───▶│  Cache   │───▶│  Scrape (on miss)   │  │  │
│  │  │ Username │    │  Lookup  │    │  JSDOM → t.me       │  │  │
│  │  └──────────┘    └────┬─────┘    └──────────┬──────────┘  │  │
│  │                       │ HIT                  │             │  │
│  │                       ▼                      ▼             │  │
│  │                  ┌─────────┐    ┌──────────────────────┐   │  │
│  │                  │ Return  │    │  Theme Resolution    │   │  │
│  │                  │ Cached  │    │  + Verified Override │   │  │
│  │                  │  PNG    │    └──────────┬───────────┘   │  │
│  │                  └─────────┘               ▼               │  │
│  │                                  ┌──────────────────────┐  │  │
│  │                                  │  Satori Renderer     │  │  │
│  │                                  │  JSX → SVG → PNG     │  │  │
│  │                                  └──────────┬───────────┘  │  │
│  │                                             ▼               │  │
│  │                                  ┌──────────────────────┐  │  │
│  │                                  │  Cache Store + Send  │  │  │
│  │                                  └──────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
<app/route.tsx>
├── <TelegramCard>              ← Main card component
│   ├── Avatar                  ← Profile picture (circular, 120px)
│   ├── Content Column
│   │   ├── Title Row
│   │   │   ├── Display Name    ← 30px, bold, Arial
│   │   │   └── <VerifiedBadge> ← SVG checkmark (conditional)
│   │   ├── Username            ← @handle, 20px, muted color
│   │   └── Extra Info          ← Stats/label, 22px, accent color
│   └── Corner Gradient         ← Decorative radial gradient
│
└── <ErrorCard>                 ← Fallback on scrape failure
    ├── Telegram Logo (SVG)
    ├── Error Title
    └── Error Message
```

---

## Module Responsibilities

| Module | Lines | Responsibility |
|--------|:-----:|---------------|
| `app/route.tsx` | ~95 | Request handling, cache orchestration, photo override, response assembly |
| `components/TelegramCard.tsx` | ~200 | JSX card layout (TelegramCard + theme-aware ErrorCard) |
| `utils/scrapeTelegram.ts` | ~80 | Fetch & parse Telegram preview pages via JSDOM |
| `utils/theme.ts` | ~70 | Theme resolution, verified override, username/photo sanitizer, default avatar |
| `utils/cache.ts` | ~50 | In-memory LRU cache with TTL and FIFO eviction |
| `utils/parsers.ts` | ~80 | HTML parsing (type, stats, multi-source avatar extraction) |
| `utils/errors.ts` | ~20 | Custom error classes |
| `types/enums.ts` | ~30 | TypeScript interfaces and enums |
| `middleware.ts` | ~25 | Security header enforcement |

---

## Security Model

### 4-Layer Defense in Depth

```
┌──────────────────────────────────────────────────────┐
│  Layer 1: Middleware                                   │
│  • Content-Security-Policy: default-src 'none'        │
│  • X-Content-Type-Options: nosniff                    │
│  • Referrer-Policy: no-referrer                       │
│  • Permissions-Policy: camera=(), microphone=()       │
├──────────────────────────────────────────────────────┤
│  Layer 2: Input Sanitization                          │
│  • Username: [^a-zA-Z0-9_] stripped (regex)           │
│  • Colors: CSS values only (no JS execution path)     │
│  • Font: CSS font-family string only                  │
├──────────────────────────────────────────────────────┤
│  Layer 3: Data Privacy                                │
│  • Zero persistence — no database, no logs            │
│  • Ephemeral processing — each request isolated       │
│  • No tracking — no cookies, analytics, or IDs        │
│  • Cache is in-memory only — lost on restart          │
├──────────────────────────────────────────────────────┤
│  Layer 4: Error Handling                              │
│  • Graceful error cards (never broken <img> tags)     │
│  • No internal details leaked to client               │
│  • Console errors logged server-side only             │
└──────────────────────────────────────────────────────┘
```

### Security Properties

- **No API keys needed** — scrapes public pages
- **No user data stored** — queries are fully ephemeral
- **No third-party calls** — all processing is self-contained
- **No JavaScript in responses** — pure image output
- **No attack surface for XSS** — image-only responses
- **Rate limiting** — inherent via hosting platform limits

---

## Performance & Benchmarks

### Response Times

| Scenario | Latency | How |
|----------|:-------:|-----|
| **Cache hit (memory)** | **< 10ms** | In-memory LRU lookup, no network |
| **CDN cache hit** | **< 5ms** | Vercel CDN serves from nearest PoP |
| **Cache miss** | **50–150ms** | Scrape + render + cache store |
| **Cold start** | **100–300ms** | Edge function initialization |

### Image Specs

| Property | Value |
|----------|-------|
| Dimensions | 700 × 250 px |
| Aspect ratio | 2.8:1 (optimized for social embeds) |
| Format | PNG |
| File size | ~15–40 KB (varies by avatar) |
| Renderer | Satori (JSX → SVG → PNG) |
| Emoji set | Fluent Emoji |
| Default font | Inter |

### 3-Layer Caching Strategy

```
┌─────────┐     ┌──────────────┐     ┌──────────────┐     ┌─────────┐
│ Request  │────▶│ Edge Function│────▶│  CDN Cache   │────▶│ Origin  │
│          │     │ Memory LRU   │     │ (Vercel CDN) │     │ (scrape)│
└─────────┘     └──────────────┘     └──────────────┘     └─────────┘
                      │                    │                    │
                      │ 500 entries        │ 2h TTL             │ Fresh
                      │ per PoP            │ global             │ fetch
                      ▼                    ▼                    ▼
                 < 10ms               < 5ms               50-150ms
```

- **Layer 1:** Edge function in-memory LRU (500 entries per PoP)
- **Layer 2:** Vercel CDN (`Cache-Control: public, max-age=7200`)
- **Layer 3:** Fresh Telegram scrape + Satori render

### Scaling Math

| Metric | Value |
|--------|-------|
| Edge PoPs | 100+ |
| Cache entries per PoP | 500 |
| Theoretical global cache | 50,000+ unique cards |
| Eviction | FIFO when full |
| Shared state | None — each PoP independent |

---

## Why Satori Over Puppeteer?

| | Satori | Puppeteer |
|---|---|---|
| **Cold start** | ~0ms (in-process) | ~2-5s (browser launch) |
| **Memory per request** | ~10MB | ~100-300MB |
| **Edge-compatible** | ✅ Yes | ❌ No (needs full Node) |
| **Latency** | 10-50ms | 500-2000ms |
| **Native dependencies** | Zero | Chromium binary (~170MB) |
| **Cost model** | Edge functions ($) | Server ($) + memory ($$$) |

Satori is the reason this runs on edge at all. Puppeteer would require a full server with Chromium — completely different cost and complexity profile.
