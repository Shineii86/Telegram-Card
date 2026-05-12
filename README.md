<p align="center">
  <img src="https://github.com/user-attachments/assets/39b7b5d1-308e-462e-b414-b7662bf92341" alt="Telegram Card Widget" width="200" height="200"/>
</p>

<h1 align="center">Telegram Card Widget</h1>

<p align="center">
  <strong>Dynamic Open Graph cards for Telegram profiles, channels, groups & bots — generated at the edge in milliseconds.</strong>
</p>

<p align="center">
  <a href="https://telegramcard.vercel.app/?username=MaximXStickers">
    <img src="https://telegramcard.vercel.app/?username=MaximXStickers&theme=dark" alt="Live Demo — Telegram Card" width="440"/>
  </a>
</p>

<p align="center">
  <a href="https://telegramcard.vercel.app"><img src="https://img.shields.io/badge/%F0%9F%9A%80_TRY_IT_LIVE-telegramcard.vercel.app-0088cc?style=for-the-badge&logo=telegram&logoColor=white" alt="Try It Live"/></a>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white&style=for-the-badge" alt="Next.js 15" height="28"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript 5" height="28"/></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel_Edge-Functions-000000?logo=vercel&logoColor=white&style=for-the-badge" alt="Vercel Edge" height="28"/></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React 19" height="28"/></a>
</p>

<p align="center">
  <a href="https://github.com/Shineii86/Telegram-Card/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-28a745?style=for-the-badge" alt="MIT License" height="22"/></a>
  <a href="https://github.com/Shineii86/Telegram-Card/stargazers"><img src="https://img.shields.io/github/stars/Shineii86/Telegram-Card?style=for-the-badge&color=ffdf00" alt="Stars" height="22"/></a>
  <a href="https://github.com/Shineii86/Telegram-Card/network/members"><img src="https://img.shields.io/github/forks/Shineii86/Telegram-Card?style=for-the-badge&color=lightgrey" alt="Forks" height="22"/></a>
  <a href="https://github.com/Shineii86/Telegram-Card/issues"><img src="https://img.shields.io/github/issues/Shineii86/Telegram-Card?style=for-the-badge&color=red" alt="Issues" height="22"/></a>
  <a href="https://github.com/Shineii86/Telegram-Card"><img src="https://img.shields.io/github/last-commit/Shineii86/Telegram-Card?style=for-the-badge&color=blueviolet" alt="Last Commit" height="22"/></a>
  <a href="https://github.com/Shineii86/Telegram-Card"><img src="https://img.shields.io/github/repo-size/Shineii86/Telegram-Card?style=for-the-badge&color=orange" alt="Repo Size" height="22"/></a>
  <img src="https://img.shields.io/badge/Type--safe-100%25-blue?style=for-the-badge" alt="Type Safe" height="22"/>
  <img src="https://img.shields.io/badge/Zero_Runtime_Deps-Satori_%2B_JSDOM-green?style=for-the-badge" alt="Minimal Deps" height="22"/>
</p>

---

> **TL;DR** — Paste `https://telegramcard.vercel.app/?username=YOUR_NAME` anywhere that renders images. You get a live, auto-updating Telegram card. No API keys. No signup. No config. That's it.

---

## 📑 Table of Contents

- [Why This Exists](#-why-this-exists)
- [What Makes This Different](#-what-makes-this-different)
- [See It In Action](#-see-it-in-action)
- [🆕 What's New in v2.5.0](#-whats-new-in-v250)
- [🚨 Error Cards](#-error-cards)
- [🖼️ Default Avatar & Custom Photo](#️-default-avatar--custom-photo)
- [✅ Verified Badge Showcase](#-verified-badge-showcase)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Architecture Deep Dive](#-architecture-deep-dive)
- [Technology Stack](#-technology-stack)
- [Quick Start](#-quick-start)
- [Copy-Paste Snippets](#-copy-paste-snippets)
- [API Reference](#-api-reference)
- [Theming Guide](#-theming-guide)
- [Ready-Made Color Palettes](#-ready-made-color-palettes)
- [Entity Type Detection](#-entity-type-detection)
- [Programmatic Usage](#-programmatic-usage)
- [Interactive Card Builder](#-interactive-card-builder)
- [Deployment](#-deployment)
- [Local Development](#-local-development)
- [Project Structure](#-project-structure)
- [Use Cases & Integration Patterns](#-use-cases--integration-patterns)
- [Performance & Benchmarks](#-performance--benchmarks)
- [Security Model](#-security-model)
- [SEO & Metadata](#-seo--metadata)
- [Troubleshooting](#-troubleshooting)
- [FAQ](#-faq)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Changelog](#-changelog)
- [Acknowledgements](#-acknowledgements)
- [Credits & License](#-credits--license)
- [Support & Community](#-support--community)
- [Star History](#-star-history)

---

## 🤔 Why This Exists

Sharing a Telegram link on GitHub, Twitter, or a blog renders as a dead URL. No preview. No stats. No personality. Just a blue underlined string that tells the reader nothing about what's behind it.

**Telegram Card Widget** solves this with a single URL. Paste it anywhere that renders images and you get a polished, auto-updating card showing the entity's avatar, name, type, verified badge, and live statistics. No API keys. No accounts. No setup. It just works.

### Before & After

<table>
<tr>
<td width="50%" align="center">

**Before** 😐

```
https://t.me/MaximXStickers
```

A plain, unstyled link.  
No preview. No context. No engagement.

</td>
<td width="50%" align="center">

**After** ✨

<img src="https://telegramcard.vercel.app/?username=MaximXStickers&theme=dark" width="480"/>

Rich branded card with  
live stats and verified badge.

</td>
</tr>
</table>

---

## 🏆 What Makes This Different

| | Telegram Card Widget | Screenshot/Snapshot Tools | Static Badge Generators | Custom OG Image APIs |
|---|---|---|---|---|
| **Auto-updating stats** | ✅ Live from Telegram | ❌ Frozen at capture time | ❌ Static text | ⚠️ Manual refresh |
| **No API key needed** | ✅ Scrapes public pages | ⚠️ Usually needs one | ✅ | ❌ Always needs one |
| **Edge-rendered (< 100ms)** | ✅ Vercel Edge Runtime | ❌ Server-only | ✅ CDN | ⚠️ Varies |
| **6 color params + fonts** | ✅ Full customization | ❌ Screenshot what you see | ⚠️ Limited | ✅ Template-based |
| **Entity auto-detection** | ✅ User/Bot/Channel/Group | ❌ Manual | ❌ | ⚠️ Needs config |
| **Verified badge control** | ✅ Auto/force show/hide | ❌ | ❌ | ❌ |
| **Graceful error cards** | ✅ Never broken images | ❌ Broken `<img>` | ❌ Broken `<img>` | ⚠️ Varies |
| **Privacy-first** | ✅ Zero data stored | ⚠️ May track | ✅ | ❌ API logs |
| **Self-hostable** | ✅ Any Next.js platform | ⚠️ Complex | ✅ Simple | ❌ SaaS only |
| **Cost** | Free (open source) | Free/Paid | Free | Paid |

---

## 🎬 See It In Action

### All Entity Types × Both Themes

<table>
  <tr>
    <th></th>
    <th>☀️ Light Theme</th>
    <th>🌙 Dark Theme</th>
  </tr>
  <tr>
    <td><strong>📢 Channel</strong><br/><code>@MaximXStickers</code></td>
    <td><img src="https://telegramcard.vercel.app/?username=MaximXStickers&theme=light" width="450"/></td>
    <td><img src="https://telegramcard.vercel.app/?username=MaximXStickers&theme=dark" width="450"/></td>
  </tr>
  <tr>
    <td><strong>🤖 Bot</strong><br/><code>@MikoReactionsBot</code></td>
    <td><img src="https://telegramcard.vercel.app/?username=MikoReactionsBot&theme=light" width="450"/></td>
    <td><img src="https://telegramcard.vercel.app/?username=MikoReactionsBot&theme=dark" width="450"/></td>
  </tr>
  <tr>
    <td><strong>👥 Group</strong><br/><code>@MaximXSticker</code></td>
    <td><img src="https://telegramcard.vercel.app/?username=MaximXSticker&theme=light" width="450"/></td>
    <td><img src="https://telegramcard.vercel.app/?username=MaximXSticker&theme=dark" width="450"/></td>
  </tr>
  <tr>
    <td><strong>👤 User</strong><br/><code>@Shineii86</code></td>
    <td><img src="https://telegramcard.vercel.app/?username=Shineii86&theme=light" width="450"/></td>
    <td><img src="https://telegramcard.vercel.app/?username=Shineii86&theme=dark" width="450"/></td>
  </tr>
</table>

### Custom Color Schemes

<table>
  <tr>
    <td align="center">
      <strong>Midnight Blue</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&bgColor=rgba(15,23,42,1)&textColor=%23F8FAFC&subtleTextColor=%2394A3B8&extraColor=%2338BDF8&shadowColor=rgba(0,0,0,0.5)" width="420"/>
    </td>
    <td align="center">
      <strong>Warm Sunset</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&bgColor=rgba(120,53,15,1)&textColor=%23FEF3C7&subtleTextColor=%23FDE68A&extraColor=%23F59E0B&shadowColor=rgba(0,0,0,0.4)" width="420"/>
    </td>
    <td align="center">
      <strong>Emerald Forest</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&bgColor=rgba(6,78,59,1)&textColor=%23ECFDF5&subtleTextColor=%23A7F3D0&extraColor=%2334D399&shadowColor=rgba(0,0,0,0.4)" width="420"/>
    </td>
    <td align="center">
      <strong>Royal Purple</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&bgColor=rgba(46,16,101,1)&textColor=%23EDE9FE&subtleTextColor=%23C4B5FD&extraColor=%23A78BFA&shadowColor=rgba(0,0,0,0.4)" width="420"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Cherry Blossom</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&bgColor=rgba(131,24,67,1)&textColor=%23FCE7F3&subtleTextColor=%23F9A8D4&extraColor=%23F472B6&shadowColor=rgba(0,0,0,0.4)" width="420"/>
    </td>
    <td align="center">
      <strong>Arctic Frost</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&bgColor=rgba(224,242,254,1)&textColor=%230C4A6E&subtleTextColor=%230369A1&extraColor=%230284C7&shadowColor=rgba(0,0,0,0.08)" width="420"/>
    </td>
    <td align="center">
      <strong>Lava Glow</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&bgColor=rgba(124,45,18,1)&textColor=%23FFF7ED&subtleTextColor=%23FED7AA&extraColor=%23FB923C&shadowColor=rgba(0,0,0,0.4)" width="420"/>
    </td>
    <td align="center">
      <strong>Ocean Deep</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&bgColor=rgba(8,47,73,1)&textColor=%23E0F2FE&subtleTextColor=%237DD3FC&extraColor=%2338BDF8&shadowColor=rgba(0,0,0,0.4)" width="420"/>
    </td>
  </tr>
</table>

---

## 🆕 What's New in v2.5.0

### Custom Photo Override

Override any Telegram profile photo with your own image URL using the new `?photo=` parameter:

<table>
  <tr>
    <td align="center">
      <strong>Default (Telegram Photo)</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&theme=dark" width="420"/>
    </td>
    <td align="center">
      <strong>Custom Photo Override</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=Shineii86&photo=https://i.pravatar.cc/300?img=12&theme=dark" width="420"/>
    </td>
  </tr>
</table>

### Theme-Aware Error Cards

Error cards now match your theme — dark errors in dark mode, light errors in light mode:

<table>
  <tr>
    <td align="center">
      <strong>☀️ Light Error</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=nonexistentuser123456&theme=light" width="420"/>
    </td>
    <td align="center">
      <strong>🌙 Dark Error</strong><br/>
      <img src="https://telegramcard.vercel.app/?username=nonexistentuser123456&theme=dark" width="420"/>
    </td>
  </tr>
</table>

### Default Avatar for Missing Photos

Accounts without profile photos now show a themed initial-letter avatar instead of an error card. The avatar adapts to light/dark theme automatically.

---

## 🚨 Error Cards

When something goes wrong (username not found, Telegram down, scrape failure), the API returns a **styled error card** instead of a broken image. Your README will never show a broken `<img>` tag.

### Theme-Aware Error Cards

Error cards automatically match your theme — no more jarring white cards in dark mode:

<table>
  <tr>
    <th>☀️ Light Error Card</th>
    <th>🌙 Dark Error Card</th>
  </tr>
  <tr>
    <td><img src="https://telegramcard.vercel.app/?username=nonexistentuser123456&theme=light" width="450"/></td>
    <td><img src="https://telegramcard.vercel.app/?username=nonexistentuser123456&theme=dark" width="450"/></td>
  </tr>
</table>

### Error Scenarios

| Error Scenario | What You See |
|----------------|-------------|
| Username doesn't exist | Clean error card with Telegram logo + "Unable to load Telegram profile" + specific reason |
| Private account | Same styled error card with appropriate message |
| No profile photo | Card with themed initial-letter avatar instead of error |
| Telegram rate limiting | Error card suggesting retry |
| Network failure | Graceful error card, never a 404 or empty response |

> **Design decision:** The API always returns HTTP `200` for card requests — even errors produce a valid PNG. This is intentional: broken images in READMEs look terrible; a styled error card is always better.
>
> **Theme-aware:** Error cards automatically match the requested theme — dark mode errors use dark backgrounds with light text; light mode errors use white backgrounds with dark text.

---

## 🖼️ Default Avatar & Custom Photo

### Default Avatar — No Profile Photo? No Problem

When a Telegram account has no profile photo, the card automatically generates a **themed initial-letter avatar** instead of showing an error:

<table>
  <tr>
    <th>How It Works</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>
      <strong>Light theme:</strong> Soft gray circle + blue initial<br/>
      <strong>Dark theme:</strong> Dark circle + light blue initial<br/><br/>
      The first letter of the username is used as the avatar.<br/>
      Colors adapt to the active theme automatically.
    </td>
    <td align="center">
      <em>No public example available — all demo accounts have photos.</em><br/><br/>
      If your account has no photo, your card will show a clean<br/>
      circular avatar with your initial letter instead of an error.
    </td>
  </tr>
</table>

### Custom Photo Override — `?photo=` Parameter

Override the Telegram profile photo with **any image URL**. Useful for branding, testing, or accounts without photos:

<table>
  <tr>
    <th>Default (Telegram Photo)</th>
    <th>Custom Photo (Override)</th>
  </tr>
  <tr>
    <td><img src="https://telegramcard.vercel.app/?username=Shineii86&theme=dark" width="450"/></td>
    <td><img src="https://telegramcard.vercel.app/?username=Shineii86&photo=https://i.pravatar.cc/300?img=12&theme=dark" width="450"/></td>
  </tr>
</table>

```
# Use Telegram's profile photo (default)
https://telegramcard.vercel.app/?username=Shineii86

# Override with a custom image
https://telegramcard.vercel.app/?username=Shineii86&photo=https://example.com/avatar.png

# Works with themes and colors too
https://telegramcard.vercel.app/?username=Shineii86&photo=https://example.com/avatar.png&theme=dark
```

### Avatar Resolution Priority

The card resolves the avatar image in this order:

| Priority | Source | When Used |
|:--------:|--------|-----------|
| 1️⃣ | `?photo=` parameter | Custom URL provided by user |
| 2️⃣ | Telegram `<img>` element | Profile has a public photo |
| 3️⃣ | `og:image` / `twitter:image` meta | Photo only available via Open Graph |
| 4️⃣ | Default initial avatar | No photo anywhere |

---

## ✅ Verified Badge Showcase

The `verified` parameter gives you full control over the blue checkmark:

### Visual Comparison

<table>
  <tr>
    <th>Auto (default)</th>
    <th>Force Show ✅</th>
    <th>Force Hide ❌</th>
  </tr>
  <tr>
    <td><img src="https://telegramcard.vercel.app/?username=Shineii86&theme=dark" width="400"/></td>
    <td><img src="https://telegramcard.vercel.app/?username=Shineii86&verified=true&theme=dark" width="400"/></td>
    <td><img src="https://telegramcard.vercel.app/?username=Shineii86&verified=false&theme=dark" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><code>?verified=auto</code><br/>Detects from Telegram</td>
    <td align="center"><code>?verified=true</code><br/>Always shows badge</td>
    <td align="center"><code>?verified=false</code><br/>Always hides badge</td>
  </tr>
</table>

### Parameter Values

| Value | Behavior | Example |
|-------|----------|---------|
  <tr>
    <td><code>auto</code> (default)</td>
    <td>Detect from Telegram's page metadata</td>
    <td><code>?username=Shineii86</code></td>
  </tr>
  <tr>
    <td><code>true</code></td>
    <td>Force show the blue checkmark on any entity</td>
    <td><code>?username=Shineii86&verified=true</code></td>
  </tr>
  <tr>
    <td><code>false</code></td>
    <td>Force hide even if Telegram shows it</td>
    <td><code>?username=Shineii86&verified=false</code></td>
  </tr>
</table>

```
# Auto-detect (default)
https://telegramcard.vercel.app/?username=Shineii86

# Force show verified badge
https://telegramcard.vercel.app/?username=Shineii86&verified=true

# Force hide verified badge
https://telegramcard.vercel.app/?username=Shineii86&verified=false
```

---

## ✨ Features

<table>
  <tr>
    <td width="50%">

### ⚡ Performance
- **Sub-100ms** response from edge (100+ PoPs)
- **< 10ms** for cache hits
- **Zero cold-start** on Vercel Edge Runtime
- **2-hour CDN cache** — set and forget
- **~15-40 KB** image size (lightweight)

</td>
    <td width="50%">

### 🎨 Customization
- **6 independent color overrides** — background, text, subtle, accent, shadow, font
- **Light & dark presets** with one parameter
- **Custom fonts** — any CSS font-family
- **Verified badge control** — auto / force show / force hide
- **12 ready-made palettes** + infinite custom combos

</td>
  </tr>
  <tr>
    <td width="50%">

### 🔍 Intelligence
- **Auto-detects** User, Bot, Channel, Group
- **Scrapes live stats** — subscribers, members, online
- **Verified badge** detection from Telegram metadata
- **Graceful error cards** — never broken images, theme-aware
- **Default avatar** — initial-letter SVG for accounts without profile photos
- **Custom photo override** — `?photo=` parameter for any image URL
- **Multi-source avatar** — photo element → og:image → twitter:image → default
- **Entity-aware layout** — adapts stats display per type

</td>
    <td width="50%">

### 🛡️ Security & Privacy
- **Zero data storage** — fully ephemeral processing
- **Input sanitization** on all parameters
- **CSP, nosniff, no-referrer, Permissions-Policy** headers
- **No tracking, no cookies, no analytics**
- **No API keys** — scrapes public pages only

</td>
  </tr>
  <tr>
    <td width="50%">

### 🌍 Deployment
- **Vercel** (recommended) — zero config
- **Cloudflare Workers** — included config
- **Netlify, Railway, Render, Heroku** — all supported
- **Self-host** — any Next.js-compatible platform
- **6 deployment configs** included in repo

</td>
    <td width="50%">

### 🧩 Integration
- **GitHub READMEs** — markdown & HTML snippets
- **Discord embeds** — paste URL directly
- **Notion, blogs, portfolios** — standard `<img>` tags
- **Programmatic** — fetch via Node.js, Python, Go, cURL
- **Any `<img>`-compatible surface**

</td>
  </tr>
</table>

---

## 🔬 How It Works

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

## 🏗 Architecture Deep Dive

### System Architecture

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

### Data Flow

```
Telegram (t.me)          JSDOM Parser           Theme Engine
     │                        │                       │
     │  HTML preview page     │  Parsed metadata      │  Merged theme
     │  ◄──────────────────── │  ◄─────────────────── │  ◄──────────
     │                        │                       │
     ▼                        ▼                       ▼
 ┌────────┐             ┌──────────┐            ┌──────────┐
 │  Fetch │────────────▶│  Scrape  │───────────▶│  Render  │
 │  Page  │             │  Result  │            │  (Satori)│
 └────────┘             └──────────┘            └─────┬────┘
                                                      │
                                                      ▼
                                                ┌──────────┐
                                                │ PNG Card │
                                                │  700×250  │
                                                └──────────┘
```

### Component Hierarchy

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

### Module Responsibilities

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

## 🛠 Technology Stack

<table>
  <tr>
    <th>Layer</th>
    <th>Technology</th>
    <th>Why</th>
  </tr>
  <tr>
    <td><strong>Framework</strong></td>
    <td><a href="https://nextjs.org/">Next.js 15</a> (App Router)</td>
    <td>Server components, edge runtime, file-based routing, built-in OG support</td>
  </tr>
  <tr>
    <td><strong>Language</strong></td>
    <td><a href="https://www.typescriptlang.org/">TypeScript 5</a></td>
    <td>Type safety, better DX, catches bugs at compile time</td>
  </tr>
  <tr>
    <td><strong>UI</strong></td>
    <td><a href="https://react.dev/">React 19</a></td>
    <td>Component-based card rendering, JSX for Satori</td>
  </tr>
  <tr>
    <td><strong>Rendering</strong></td>
    <td><a href="https://github.com/vercel/satori">Satori</a> + <a href="https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation">@vercel/og</a></td>
    <td>JSX → SVG → PNG at the edge — no headless browser needed</td>
  </tr>
  <tr>
    <td><strong>Scraping</strong></td>
    <td><a href="https://github.com/jsdom/jsdom">JSDOM</a></td>
    <td>Server-side DOM parsing — extracts metadata from t.me pages</td>
  </tr>
  <tr>
    <td><strong>Emoji</strong></td>
    <td><a href="https://twemoji.twitter.com/">Fluent Emoji</a></td>
    <td>Cross-platform emoji rendering in generated cards</td>
  </tr>
  <tr>
    <td><strong>Infrastructure</strong></td>
    <td><a href="https://vercel.com/">Vercel Edge Network</a></td>
    <td>100+ PoPs, zero-config edge functions, global CDN</td>
  </tr>
  <tr>
    <td><strong>Landing Page</strong></td>
    <td>Vanilla HTML/CSS/JS</td>
    <td>Interactive card builder — no framework overhead, instant load</td>
  </tr>
</table>

### Why Satori Over Puppeteer?

| | Satori | Puppeteer |
|---|---|---|
| **Cold start** | ~0ms (in-process) | ~2-5s (browser launch) |
| **Memory per request** | ~10MB | ~100-300MB |
| **Edge-compatible** | ✅ Yes | ❌ No (needs full Node) |
| **Latency** | 10-50ms | 500-2000ms |
| **Native dependencies** | Zero | Chromium binary (~170MB) |
| **Cost model** | Edge functions ($) | Server ($) + memory ($$$) |

Satori is the reason this runs on edge at all. Puppeteer would require a full server with Chromium — completely different cost and complexity profile.

---

## 🚀 Quick Start

### Instant — Just Use the URL

```
https://telegramcard.vercel.app/?username=YOUR_TELEGRAM_USERNAME
```

Replace `YOUR_TELEGRAM_USERNAME` with any public Telegram username (without `@`). Done.

### GitHub README

**Markdown (linked):**
```markdown
[![Telegram](https://telegramcard.vercel.app/?username=Shineii86&theme=dark)](https://t.me/Shineii86)
```

**HTML (with size control):**
```html
<a href="https://t.me/Shineii86">
  <img src="https://telegramcard.vercel.app/?username=Shineii86" 
       alt="Telegram @Shineii86" width="400"/>
</a>
```

### With Custom Colors

```
https://telegramcard.vercel.app/?username=Shineii86
  &bgColor=rgba(15,23,42,1)
  &textColor=%23F8FAFC
  &extraColor=%2338BDF8
```

### With Custom Photo

Override the Telegram profile photo with any image URL:

```
https://telegramcard.vercel.app/?username=Shineii86&photo=https://example.com/avatar.png
```

Useful for accounts without profile photos, or when you want a specific image on the card.

---

## 📋 Copy-Paste Snippets

Ready-to-use snippets for every platform. Just replace `YOUR_USERNAME`.

### GitHub Profile README

```markdown
<!-- Simple -->
[![Telegram](https://telegramcard.vercel.app/?username=YOUR_USERNAME)](https://t.me/YOUR_USERNAME)

<!-- Dark theme -->
[![Telegram](https://telegramcard.vercel.app/?username=YOUR_USERNAME&theme=dark)](https://t.me/YOUR_USERNAME)

<!-- With size control -->
<a href="https://t.me/YOUR_USERNAME">
  <img src="https://telegramcard.vercel.app/?username=YOUR_USERNAME" width="380"/>
</a>
```

### GitHub Repo README (Community Section)

```markdown
## 💬 Community

Join our Telegram for updates, support, and discussion:

[![Join Telegram](https://telegramcard.vercel.app/?username=YOUR_CHANNEL&theme=dark)](https://t.me/YOUR_CHANNEL)
```

### Discord

Just paste the URL directly — Discord renders it as an image:
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&theme=dark
```

### Notion

Use the `/image` block and paste:
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME
```

### HTML / Blog / Portfolio

```html
<!-- Basic -->
<img src="https://telegramcard.vercel.app/?username=YOUR_USERNAME" 
     alt="Telegram" width="400" loading="lazy"/>

<!-- Linked -->
<a href="https://t.me/YOUR_USERNAME">
  <img src="https://telegramcard.vercel.app/?username=YOUR_USERNAME&theme=dark" 
       alt="Telegram @YOUR_USERNAME" width="400"/>
</a>

<!-- Responsive -->
<img src="https://telegramcard.vercel.app/?username=YOUR_USERNAME" 
     alt="Telegram" style="max-width:100%;height:auto;" loading="lazy"/>
```

### React / Next.js

```tsx
export function TelegramCard({ username, theme = 'dark' }: {
  username: string;
  theme?: 'light' | 'dark';
}) {
  return (
    <a href={`https://t.me/${username}`} target="_blank" rel="noopener noreferrer">
      <img
        src={`https://telegramcard.vercel.app/?username=${username}&theme=${theme}`}
        alt={`Telegram @${username}`}
        width={400}
        loading="lazy"
      />
    </a>
  );
}
```

### Vue 3

```vue
<template>
  <a :href="`https://t.me/${username}`" target="_blank" rel="noopener noreferrer">
    <img
      :src="`https://telegramcard.vercel.app/?username=${username}&theme=${theme}`"
      :alt="`Telegram @${username}`"
      width="400"
      loading="lazy"
    />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  username: string;
  theme?: 'light' | 'dark';
}>();
</script>
```

### Svelte

```svelte
<script lang="ts">
  export let username: string;
  export let theme: 'light' | 'dark' = 'dark';
</script>

<a href="https://t.me/{username}" target="_blank" rel="noopener noreferrer">
  <img
    src="https://telegramcard.vercel.app/?username={username}&theme={theme}"
    alt="Telegram @{username}"
    width="400"
    loading="lazy"
  />
</a>
```

### Astro

```astro
---
const { username, theme = 'dark' } = Astro.props;
---
<a href={`https://t.me/${username}`}>
  <img src={`https://telegramcard.vercel.app/?username=${username}&theme=${theme}`} 
       alt={`@${username}`} width="400" loading="lazy" />
</a>
```

### Hugo

```html
<!-- layouts/shortcodes/telegram-card.html -->
{{ $username := .Get "username" }}
{{ $theme := .Get "theme" | default "dark" }}
<a href="https://t.me/{{ $username }}">
  <img src="https://telegramcard.vercel.app/?username={{ $username }}&theme={{ $theme }}" 
       alt="Telegram @{{ $username }}" width="400" loading="lazy" />
</a>

<!-- Usage in markdown: {{</* telegram-card username="Shineii86" theme="dark" */>}} -->
```

### Jekyll

```html
<!-- _includes/telegram-card.html -->
{% assign username = include.username %}
{% assign theme = include.theme | default: "dark" %}
<a href="https://t.me/{{ username }}">
  <img src="https://telegramcard.vercel.app/?username={{ username }}&theme={{ theme }}" 
       alt="Telegram @{{ username }}" width="400" loading="lazy" />
</a>

<!-- Usage: {% include telegram-card.html username="Shineii86" theme="dark" %} -->
```

### PHP

```php
<?php
function telegramCard(string $username, string $theme = 'dark', int $width = 400): string {
    $url = "https://telegramcard.vercel.app/?username=" . urlencode($username) . "&theme={$theme}";
    return '<a href="https://t.me/' . htmlspecialchars($username) . '" target="_blank">' .
           '<img src="' . $url . '" alt="Telegram @' . htmlspecialchars($username) . 
           '" width="' . $width . '" loading="lazy" /></a>';
}

// Usage:
echo telegramCard('Shineii86', 'dark');
?>
```

### Ruby (ERB)

```erb
<!-- app/helpers/telegram_helper.rb -->
module TelegramHelper
  def telegram_card(username, theme: 'dark', width: 400)
    url = "https://telegramcard.vercel.app/?username=#{ERB::Util.url_encode(username)}&theme=#{theme}"
    link_to "https://t.me/#{username}", target: '_blank' do
      image_tag url, alt: "Telegram @#{username}", width: width, loading: 'lazy'
    end
  end
end

<%# Usage: <%= telegram_card('Shineii86', theme: 'dark') %>
```

### Multiple Cards Grid

```html
<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:16px;">
  <img src="https://telegramcard.vercel.app/?username=Channel1&theme=dark" loading="lazy"/>
  <img src="https://telegramcard.vercel.app/?username=Channel2&theme=dark" loading="lazy"/>
  <img src="https://telegramcard.vercel.app/?username=Channel3&theme=dark" loading="lazy"/>
  <img src="https://telegramcard.vercel.app/?username=Channel4&theme=dark" loading="lazy"/>
</div>
```

---

## 📚 API Reference

### Endpoint

```
GET https://telegramcard.vercel.app/
```

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|:--------:|---------|-------------|
| `username` | `string` | ✅ | — | Telegram username (without `@`). `[a-zA-Z0-9_]` only. |
| `theme` | `string` | ❌ | `light` | Preset: `light` or `dark` |
| `bgColor` | `string` | ❌ | *theme* | Card background — any CSS color |
| `textColor` | `string` | ❌ | *theme* | Primary text (name, title) |
| `subtleTextColor` | `string` | ❌ | *theme* | Secondary text (@username) |
| `extraColor` | `string` | ❌ | *theme* | Accent (subscriber count, stats) |
| `shadowColor` | `string` | ❌ | *theme* | Card drop shadow |
| `fontFamily` | `string` | ❌ | `Inter, sans-serif` | CSS font-family stack |
| `verified` | `string` | ❌ | `auto` | `true` = force show, `false` = force hide, `auto` = detect |
| `photo` | `string` | ❌ | — | Custom avatar URL — overrides Telegram profile photo (must be `http`/`https`) |

### Color Formats

All standard CSS color values. URL-encode `#` as `%23`:

| Format | Example | URL-Encoded |
|--------|---------|-------------|
| Hex | `#F1F5F9` | `%23F1F5F9` |
| Short Hex | `#FFF` | `%23FFF` |
| RGB | `rgb(30,41,59)` | `rgb(30,41,59)` |
| RGBA | `rgba(30,41,59,0.8)` | `rgba(30,41,59,0.8)` |
| HSL | `hsl(215,25%,17%)` | `hsl(215,25%,17%)` |
| Named | `coral`, `tomato`, `steelblue` | as-is |

### Response Headers

| Header | Value | Purpose |
|--------|-------|---------|
| `Content-Type` | `image/png` | Image format |
| `Cache-Control` | `public, max-age=7200` | 2-hour CDN + browser cache |
| `Content-Security-Policy` | `default-src 'none'; img-src 'self' data:; ...` | Prevents response misuse |
| `X-Content-Type-Options` | `nosniff` | Blocks MIME sniffing |
| `Referrer-Policy` | `no-referrer` | No URL leakage |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Feature restrictions |

### Error Handling

| Scenario | HTTP Status | Response | Action |
|----------|:-----------:|----------|--------|
| Valid username | `200` | PNG card | ✅ Normal |
| Username not found | `200` | Error card PNG | Check spelling, ensure public |
| Scrape failure | `200` | Error card PNG | Retry; possible rate limit |
| No `username` param | `200` | HTML landing page | Intentional — card builder UI |
| `index.html` missing | `404` | Plain text | Ensure `public/index.html` exists |

---

## 🎨 Theming Guide

### Preset Themes

| Theme | Parameter | Preview |
|-------|-----------|---------|
| **Light** (default) | `?theme=light` | White card, dark text, blue accent |
| **Dark** | `?theme=dark` | Gray card, light text, light blue accent |

### Default Color Palettes

| Property | Light ☀️ | Dark 🌙 |
|----------|----------|---------|
| `bgColor` | `rgba(255,255,255,1)` | `rgba(42,42,42,1)` |
| `textColor` | `#000000` | `#FFFFFF` |
| `subtleTextColor` | `#666666` | `#AAAAAA` |
| `extraColor` | `#3390D6` | `#8DD5FF` |
| `shadowColor` | `rgba(0,0,0,0.06)` | `rgba(0,0,0,0.3)` |
| `fontFamily` | `Inter, sans-serif` | `Inter, sans-serif` |

### Override Rules

- **Any parameter can be overridden independently** — unset params fall back to the active theme's defaults
- **Colors override presets** — if you set `bgColor`, it replaces the theme's background regardless of `theme=light` or `theme=dark`
- **Font override** — pass any CSS `font-family` value; system fonts work best with Satori

---

## 🎨 Ready-Made Color Palettes

Copy-paste these URLs — no need to pick colors yourself. Replace `YOUR_USERNAME`:

### 🌙 Midnight Blue
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(15,23,42,1)&textColor=%23F8FAFC&subtleTextColor=%2394A3B8&extraColor=%2338BDF8&shadowColor=rgba(0,0,0,0.5)
```

### 🌅 Warm Sunset
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(120,53,15,1)&textColor=%23FEF3C7&subtleTextColor=%23FDE68A&extraColor=%23F59E0B&shadowColor=rgba(0,0,0,0.4)
```

### 🌲 Emerald Forest
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(6,78,59,1)&textColor=%23ECFDF5&subtleTextColor=%23A7F3D0&extraColor=%2334D399&shadowColor=rgba(0,0,0,0.4)
```

### 👑 Royal Purple
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(46,16,101,1)&textColor=%23EDE9FE&subtleTextColor=%23C4B5FD&extraColor=%23A78BFA&shadowColor=rgba(0,0,0,0.4)
```

### 🌸 Cherry Blossom
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(131,24,67,1)&textColor=%23FCE7F3&subtleTextColor=%23F9A8D4&extraColor=%23F472B6&shadowColor=rgba(0,0,0,0.4)
```

### ❄️ Arctic Frost
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(224,242,254,1)&textColor=%230C4A6E&subtleTextColor=%230369A1&extraColor=%230284C7&shadowColor=rgba(0,0,0,0.08)
```

### 🔥 Lava Glow
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(124,45,18,1)&textColor=%23FFF7ED&subtleTextColor=%23FED7AA&extraColor=%23FB923C&shadowColor=rgba(0,0,0,0.4)
```

### 🌊 Ocean Deep
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(8,47,73,1)&textColor=%23E0F2FE&subtleTextColor=%237DD3FC&extraColor=%2338BDF8&shadowColor=rgba(0,0,0,0.4)
```

### 🍃 Mint Fresh
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(20,83,45,1)&textColor=%23DCFCE7&subtleTextColor=%2386EFAC&extraColor=%234ADE80&shadowColor=rgba(0,0,0,0.4)
```

### 🌑 Pure Black (OLED)
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(0,0,0,1)&textColor=%23FFFFFF&subtleTextColor=%23888888&extraColor=%230088CC&shadowColor=rgba(255,255,255,0.05)
```

### ☁️ Cloud White
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(249,250,251,1)&textColor=%23111827&subtleTextColor=%236B7280&extraColor=%232563EB&shadowColor=rgba(0,0,0,0.06)
```

### 🌌 Cosmic Indigo
```
https://telegramcard.vercel.app/?username=YOUR_USERNAME&bgColor=rgba(30,27,75,1)&textColor=%23E0E7FF&subtleTextColor=%23A5B4FC&extraColor=%23818CF8&shadowColor=rgba(0,0,0,0.4)
```

---

## 📡 Entity Type Detection

The widget auto-detects four Telegram entity types by parsing `t.me` preview page metadata:

<table>
  <tr>
    <th>Type</th>
    <th>Detection Signal</th>
    <th>Stats Displayed</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>👤 <strong>User</strong></td>
    <td>Personal profile attributes</td>
    <td>Online status / last seen</td>
    <td><code>?username=Shineii86</code></td>
  </tr>
  <tr>
    <td>🤖 <strong>Bot</strong></td>
    <td>Bot indicator in metadata</td>
    <td>"Telegram Bot" label</td>
    <td><code>?username=MikoReactionsBot</code></td>
  </tr>
  <tr>
    <td>📢 <strong>Channel</strong></td>
    <td>Channel-specific meta tags</td>
    <td>Subscriber count</td>
    <td><code>?username=MaximXStickers</code></td>
  </tr>
  <tr>
    <td>👥 <strong>Group</strong></td>
    <td>Group-specific meta tags</td>
    <td>Members + online count</td>
    <td><code>?username=MaximXSticker</code></td>
  </tr>
</table>

The card layout adapts automatically — the "extra" line below the username shows the relevant statistic for each type.

---

## 💻 Programmatic Usage

Fetch cards in your own applications:

### Node.js / TypeScript

```typescript
const username = 'Shineii86';
const theme = 'dark';
const url = `https://telegramcard.vercel.app/?username=${username}&theme=${theme}`;

const response = await fetch(url);
const buffer = Buffer.from(await response.arrayBuffer());

// Save to file
import { writeFileSync } from 'fs';
writeFileSync(`${username}-card.png`, buffer);

// Or use as base64 for embedding
const base64 = buffer.toString('base64');
const dataUri = `data:image/png;base64,${base64}`;
```

### Python

```python
import requests

username = "Shineii86"
url = f"https://telegramcard.vercel.app/?username={username}&theme=dark"

response = requests.get(url)
with open(f"{username}-card.png", "wb") as f:
    f.write(response.content)

# Or as base64
import base64
b64 = base64.b64encode(response.content).decode()
```

### cURL

```bash
# Save to file
curl -o card.png "https://telegramcard.vercel.app/?username=Shineii86&theme=dark"

# View headers
curl -I "https://telegramcard.vercel.app/?username=Shineii86"
```

### Go

```go
package main

import (
    "io"
    "net/http"
    "os"
)

func main() {
    resp, _ := http.Get("https://telegramcard.vercel.app/?username=Shineii86&theme=dark")
    defer resp.Body.Close()
    out, _ := os.Create("card.png")
    defer out.Close()
    io.Copy(out, resp.Body)
}
```

### PHP

```php
$card = file_get_contents("https://telegramcard.vercel.app/?username=Shineii86&theme=dark");
file_put_contents("card.png", $card);

// Or as base64 for inline HTML
$base64 = base64_encode($card);
echo '<img src="data:image/png;base64,' . $base64 . '" />';
```

---

## 🎛 Interactive Card Builder

The landing page at [telegramcard.vercel.app](https://telegramcard.vercel.app) includes a full interactive card builder:

### Features

- **Username input** — type any Telegram username
- **Theme presets** — Light, Dark, Ocean, Sunset, Forest, Custom
- **Advanced options** — expandable panel with all 9 parameters
- **Color pickers** — visual color selection + hex input for each color
- **Font selector** — dropdown with common system fonts
- **Verified badge control** — Auto / Force Show / Force Hide
- **Live preview** — generated card appears instantly below the form
- **Copy URL** — one-click copy of the generated URL
- **Responsive** — works on mobile, tablet, and desktop
- **Animated background** — soft pastel blobs with floating animation

### How to Use

1. Visit [telegramcard.vercel.app](https://telegramcard.vercel.app)
2. Enter a Telegram username
3. Select a theme preset or click "Advanced Options" for full control
4. Click "Generate Card"
5. Copy the URL and use it anywhere

---

## 🚢 Deployment

### One-Click Deploy

<table>
  <tr>
    <td><a href="https://vercel.com/new/clone?repository-url=https://github.com/Shineii86/Telegram-Card"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a></td>
    <td><strong>Vercel</strong> — Recommended. Native edge support, zero config, instant deploy.</td>
  </tr>
  <tr>
    <td><a href="https://deploy.workers.cloudflare.com/?url=https://github.com/Shineii86/Telegram-Card"><img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare"/></a></td>
    <td><strong>Cloudflare Workers</strong> — Global edge network. Uses <code>wrangler.toml</code>.</td>
  </tr>
  <tr>
    <td><a href="https://app.netlify.com/start/deploy?repository=https://github.com/Shineii86/Telegram-Card"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"/></a></td>
    <td><strong>Netlify</strong> — Edge functions support required.</td>
  </tr>
  <tr>
    <td><a href="https://railway.com/template/v2vpPI?referralCode=jC4ZQ_"><img src="https://railway.app/button.svg" alt="Deploy on Railway"/></a></td>
    <td><strong>Railway</strong> — Containerized deployment.</td>
  </tr>
  <tr>
    <td><a href="https://render.com/deploy?repo=https://github.com/Shineii86/Telegram-Card"><img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render"/></a></td>
    <td><strong>Render</strong> — Web service configuration.</td>
  </tr>
  <tr>
    <td><a href="https://heroku.com/deploy?template=https://github.com/Shineii86/Telegram-Card"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"/></a></td>
    <td><strong>Heroku</strong> — Requires buildpack configuration.</td>
  </tr>
</table>

### CLI Deploy (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Platform Comparison

| Platform | Edge | Cold Start | Free Tier | Config |
|----------|:----:|:----------:|:---------:|:------:|
| **Vercel** | ✅ Native | ~0ms | ✅ Generous | `vercel.json` |
| **Cloudflare** | ✅ Native | ~0ms | ✅ 100k req/day | `wrangler.toml` |
| **Netlify** | ⚠️ Limited | ~200ms | ✅ 125k req/month | `netlify.toml` |
| **Railway** | ❌ Region | ~500ms | ⚠️ $5 credit | `render.yaml` |
| **Render** | ❌ Region | ~1s | ✅ 750 hrs/month | `render.yaml` |
| **Heroku** | ❌ Region | ~2s | ❌ No free tier | `app.json` |

### Environment Variables

| Variable | Required | Default | Description |
|----------|:--------:|---------|-------------|
| `NODE_ENV` | ✅ | `production` | Runtime environment mode |

---

## 💻 Local Development

### Prerequisites

| Requirement | Version |
|-------------|:-------:|
| Node.js | ≥ 18.0.0 |
| npm | ≥ 9.0.0 |
| yarn (alt) | ≥ 1.22.0 |

### Quick Setup

```bash
# Clone
git clone https://github.com/Shineii86/Telegram-Card.git
cd Telegram-Card

# Install
npm install

# Develop (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the interactive card builder UI works locally.

### Scripts

| Command | Description | Notes |
|---------|-------------|-------|
| `npm run dev` | Dev server with hot reload | Turbopack for fast HMR |
| `npm run build` | Production build | Static optimization |
| `npm run start` | Serve production build | Local prod testing |
| `npm run lint` | ESLint analysis | Run before commits |

### Test URLs

```bash
# Basic
http://localhost:3000/?username=Shineii86

# Dark theme
http://localhost:3000/?username=Shineii86&theme=dark

# Custom colors
http://localhost:3000/?username=Shineii86&bgColor=rgba(15,23,42,1)&textColor=%23F8FAFC

# Verified badge override
http://localhost:3000/?username=Shineii86&verified=true
```

---

## 📁 Project Structure

```
Telegram-Card/
│
├── app/                              # Next.js App Router
│   ├── globals.css                   #   Base styles
│   ├── layout.tsx                    #   Root layout (OG + Twitter meta tags)
│   └── route.tsx                     #   ★ Main API route — card generation pipeline
│
├── components/                       # React Components
│   └── TelegramCard.tsx              #   TelegramCard + ErrorCard (Satori-rendered)
│
├── types/                            # TypeScript Definitions
│   └── enums.ts                      #   SourceType enum, ScrapeResult, CardThemeOptions
│
├── utils/                            # Utility Modules
│   ├── cache.ts                      #   In-memory LRU cache (500 entries, 2h TTL)
│   ├── errors.ts                     #   Custom errors (UserNotFoundError, TelegramScrapeError)
│   ├── parsers.ts                    #   HTML parsing (entity type, stats extraction)
│   ├── scrapeTelegram.ts             #   JSDOM-based Telegram page scraper
│   └── theme.ts                      #   Theme resolution, verified override, username sanitizer
│
├── public/                           # Static Assets
│   ├── index.html                    #   Landing page with interactive card builder
│   └── og.png                        #   Static Open Graph preview image
│
├── middleware.ts                      # Security headers middleware
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript compiler options
│
├── vercel.json                       # Vercel deployment config
├── netlify.toml                      # Netlify deployment config
├── wrangler.toml                     # Cloudflare Workers config
├── render.yaml                       # Render deployment config
├── app.json                          # Heroku deployment config
│
├── CHANGELOG.md                      # Version history
├── LICENSE                           # MIT License
└── package.json                      # Dependencies & scripts
```

---

## 💡 Use Cases & Integration Patterns

### GitHub Profile README

```markdown
# Hi, I'm Shinei 👋

[![Telegram](https://telegramcard.vercel.app/?username=Shineii86&theme=dark)](https://t.me/Shineii86)
```

### Project Documentation

```markdown
## Community

Join our Telegram for updates and support:

[![Channel](https://telegramcard.vercel.app/?username=YourChannel&theme=light)](https://t.me/YourChannel)
```

### Portfolio / Contact Page

```html
<section id="contact">
  <h2>Get in Touch</h2>
  <a href="https://t.me/Shineii86">
    <img src="https://telegramcard.vercel.app/?username=Shineii86" 
         alt="Telegram" width="350"/>
  </a>
</section>
```

### Blog Post Embed

```markdown
![Channel Stats](https://telegramcard.vercel.app/?username=YourChannel&theme=dark)
```

### Marketing Dashboard

```html
<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:16px;">
  <img src="https://telegramcard.vercel.app/?username=Channel1&theme=dark" loading="lazy"/>
  <img src="https://telegramcard.vercel.app/?username=Channel2&theme=dark" loading="lazy"/>
  <img src="https://telegramcard.vercel.app/?username=Channel3&theme=dark" loading="lazy"/>
  <img src="https://telegramcard.vercel.app/?username=Channel4&theme=dark" loading="lazy"/>
</div>
```

### Discord Server Info Channel

Paste the card URL directly — Discord renders it as an inline image.

### Email Signature

```html
<a href="https://t.me/Shineii86">
  <img src="https://telegramcard.vercel.app/?username=Shineii86" 
       alt="Telegram" width="300" style="border-radius:12px;"/>
</a>
```

---

## ⚡ Performance & Benchmarks

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
                      │                    │                    │
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

## 🛡 Security Model

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

## 🔍 SEO & Metadata

The landing page and generated cards include comprehensive SEO metadata:

### Landing Page Meta Tags

- **Primary meta tags** — title, description, keywords, author, robots
- **Open Graph** — type, URL, title, description, image, site_name, locale
- **Twitter Cards** — summary_large_image with creator attribution
- **Apple Web App** — capable, title, status bar style
- **Theme Color** — browser chrome tinting
- **Canonical URL** — prevents duplicate content
- **JSON-LD Structured Data** — WebApplication schema with creator, features, pricing

### Generated Card Metadata

- **Content-Type** — `image/png`
- **Cache-Control** — `public, max-age=7200` (SEO-friendly caching)
- **Security headers** — CSP, nosniff, no-referrer (prevents misuse)

---

## 🔧 Troubleshooting

### Card shows error instead of profile

| Cause | Fix |
|-------|-----|
| Username misspelled | Double-check spelling (case-insensitive) |
| Private account | Only public Telegram entities work |
| No profile photo | Shows default initial-avatar automatically — use `?photo=` for custom image |
| Rate limited | Wait a few minutes, retry |
| Username has special chars | Only `[a-zA-Z0-9_]` are valid |

### Custom photo not showing

- Ensure the `photo` URL starts with `http://` or `https://`
- The image must be publicly accessible (no auth required)
- URL-encode special characters in the URL
- Example: `?photo=https%3A%2F%2Fexample.com%2Favatar.png`

### Card shows old data

Cards are cached for **2 hours**. After that, the next request fetches fresh data. To force refresh now, append a random parameter: `&t=12345`

### Image doesn't render in README

- Ensure the URL starts with `https://telegramcard.vercel.app/`
- Check that `username` parameter is present
- GitHub caches images — try a hard refresh or append `&v=2`
- Make sure the URL has no line breaks

### Custom colors not working

- URL-encode `#` as `%23` in hex colors
- Use full `rgba()` or `hsl()` for opacity control
- Check for typos in parameter names (`bgColor`, not `bgcolor`)
- Parameters are case-sensitive

### Card is too wide/narrow

The card is fixed at 700×250px internally. Control display size with the `width` attribute on the `<img>` tag:
```html
<img src="..." width="400"/>  <!-- Displays at 400px wide -->
```

### Verified badge not showing

- Default is `auto` — only shows if Telegram marks the entity as verified
- Use `verified=true` to force it on any entity
- Use `verified=false` to hide it even on verified entities

### Font looks different than expected

Satori has built-in font support. System fonts (`system-ui`, `Arial`, `Helvetica`) work best. Custom web fonts require pre-loading in the component source.

---

## ❓ FAQ

<details>
<summary><strong>Do I need a Telegram API key?</strong></summary>
<br/>
No. The widget scrapes public <code>t.me</code> preview pages — the same data you see when opening a Telegram link in a browser. No API keys, no bots, no authentication.
</details>

<details>
<summary><strong>Does it work with private channels/groups?</strong></summary>
<br/>
No. Only public Telegram entities with a <code>t.me</code> preview page are supported. Private channels don't expose public metadata.
</details>

<details>
<summary><strong>How often does the data update?</strong></summary>
<br/>
Cards are cached for 2 hours. After expiry, the next request triggers a fresh scrape. Stats reflect the latest data from Telegram's preview page.
</details>

<details>
<summary><strong>Can I use custom fonts?</strong></summary>
<br/>
Yes! Pass any CSS <code>font-family</code> via the <code>fontFamily</code> parameter. System fonts work best — Satori has built-in support for common fonts. Web fonts require pre-loading in the component.
</details>

<details>
<summary><strong>Can I self-host this?</strong></summary>
<br/>
Absolutely. Clone the repo and deploy to any Next.js-compatible platform — Vercel, Cloudflare, Netlify, Railway, Render, Heroku, or your own server. See <a href="#-deployment">Deployment</a>.
</details>

<details>
<summary><strong>What's the rate limit?</strong></summary>
<br/>
No application-level rate limit. Limits come from your hosting platform and Telegram's own throttling on <code>t.me</code> pages.
</details>

<details>
<summary><strong>Why 700×250 pixels?</strong></summary>
<br/>
The 2.8:1 aspect ratio is optimized for social media embeds — renders well on GitHub, Twitter, LinkedIn, and Discord without cropping or excessive height.
</details>

<details>
<summary><strong>Can I change the card dimensions?</strong></summary>
<br/>
Not via the API — dimensions are fixed at 700×250 for consistency. Control display size with the <code>width</code> attribute on your <code>&lt;img&gt;</code> tag. To change actual dimensions, fork and modify the <code>ImageResponse</code> call in <code>app/route.tsx</code>.
</details>

<details>
<summary><strong>Does it support languages other than English?</strong></summary>
<br/>
Yes! Telegram entity names, descriptions, and stats are rendered as-is from the <code>t.me</code> page — any language Telegram supports will display correctly.
</details>

<details>
<summary><strong>Can I use this commercially?</strong></summary>
<br/>
Yes! The project is MIT licensed. Use it in personal projects, commercial products, SaaS tools — anything. Attribution is appreciated but not required.
</details>

---

## 🗺 Roadmap

### Completed ✅

- [x] Core card generation (User, Bot, Channel, Group)
- [x] Light & dark theme presets
- [x] Full color customization (6 parameters)
- [x] Verified badge detection + override
- [x] Edge rendering via Satori
- [x] In-memory LRU cache
- [x] Multi-platform deployment configs
- [x] Landing page with card builder UI
- [x] Security middleware (CSP, nosniff, no-referrer)
- [x] Error card fallbacks
- [x] Interactive card builder with color pickers
- [x] Theme-aware error cards (dark/light matching)
- [x] Default avatar with user initial for missing photos
- [x] Custom photo URL override (`?photo=`)
- [x] og:image / twitter:image fallback for avatars

### Planned 🚧

- [ ] Custom card dimensions via API
- [ ] Additional layout variants (compact, expanded, horizontal)
- [ ] SVG output format option
- [ ] Batch endpoint (multiple usernames in one request)
- [ ] Webhook for cache invalidation
- [ ] Custom background images
- [ ] Rate limiting middleware
- [ ] i18n for error cards
- [ ] More theme presets (Nord, Dracula, Solarized, etc.)
- [ ] Card templates / saved configurations
- [ ] Analytics dashboard (opt-in, privacy-respecting)

> Have an idea? [Open an issue](https://github.com/Shineii86/Telegram-Card/issues/new) or submit a PR!

---

## 🤝 Contributing

We welcome contributions of all kinds!

### Quick Start

```bash
# 1. Fork & clone
git clone https://github.com/YOUR_USERNAME/Telegram-Card.git
cd Telegram-Card

# 2. Install
npm install

# 3. Create branch
git checkout -b feat/my-feature

# 4. Make changes, then test
npm run dev
npm run lint

# 5. Commit & push
git commit -m "feat: describe your change"
git push origin feat/my-feature

# 6. Open PR on GitHub
```

### What We're Looking For

| Type | Examples |
|------|----------|
| 🐛 **Bug fixes** | Error handling, edge cases, scraper robustness |
| 🎨 **New features** | Layout variants, themes, output formats |
| 📖 **Docs** | Typos, examples, translations, clarity |
| ⚡ **Performance** | Caching improvements, render optimization |
| 🧪 **Testing** | Unit tests, integration tests, edge cases |
| 🌐 **Accessibility** | Color contrast, alt text, ARIA attributes |

### Guidelines

- Follow existing code style (TypeScript, ESLint)
- One feature/fix per PR
- Update CHANGELOG.md with your changes
- Add JSDoc comments for new functions
- Test with multiple entity types (User, Bot, Channel, Group)

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

---

## 📝 Changelog

See **[CHANGELOG.md](CHANGELOG.md)** for the complete version history.

### Latest Release

**[v2.5.0]** — Custom photo URL override (`?photo=`), default avatar with user initial for accounts without profile photos, theme-aware error cards (dark/light matching), og:image + twitter:image fallback for avatars, Telegram logo filtering from meta fallbacks, card builder UI updates.

---

## 🙏 Acknowledgements

| Library | Author | Role |
|---------|--------|------|
| [Next.js](https://nextjs.org/) | Vercel | React framework + edge runtime |
| [Satori](https://github.com/vercel/satori) | Vercel | JSX/CSS → SVG rendering engine |
| [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) | Vercel | Edge OG image generation |
| [JSDOM](https://github.com/jsdom/jsdom) | jsdom contributors | Server-side DOM parsing |
| [Twemoji](https://twemoji.twitter.com/) | Twitter/X | Cross-platform emoji rendering |
| [Font Awesome](https://fontawesome.com/) | Fonticons | Landing page icons |
| [Google Fonts](https://fonts.google.com/) | Google | Landing page typography (M PLUS Rounded 1c, Nunito) |

### Community

- [Quinx Network](https://github.com/QuinxNetwork) — Initial concept and design
- All [contributors](https://github.com/Shineii86/Telegram-Card/graphs/contributors) who helped improve this project

---

## 📜 Credits & License

### Author

**[Shinei Nouzen](https://github.com/Shineii86)** — Core architecture, development, and design

### Design

**[Quinx Network Design Team](https://github.com/QuinxNetwork)** — Visual identity and card layouts

### Special Thanks

- The Vercel team for `@vercel/og` and edge function innovations
- Telegram for maintaining open public preview pages
- The open-source community for Satori, JSDOM, and Twemoji

### License

Licensed under the **[MIT License](LICENSE)** — use it anywhere, commercially or personally.

**Third-Party Licenses:**
- Next.js — [MIT](https://github.com/vercel/next.js/blob/canary/license.md)
- Satori — [MPL-2.0](https://github.com/vercel/satori/blob/main/LICENSE)

---

## 🆘 Support & Community

<table>
  <tr>
    <td>🐛 <strong>Bug Reports</strong></td>
    <td><a href="https://github.com/Shineii86/Telegram-Card/issues">GitHub Issues</a></td>
  </tr>
  <tr>
    <td>💬 <strong>Discussions</strong></td>
    <td><a href="https://github.com/Shineii86/Telegram-Card/discussions">GitHub Discussions</a></td>
  </tr>
  <tr>
    <td>📱 <strong>Telegram</strong></td>
    <td><a href="https://telegram.me/Shineii86">@ShineiNouzen</a></td>
  </tr>
  <tr>
    <td>📧 <strong>Email</strong></td>
    <td><a href="mailto:ikx7a@hotmail.com">ikx7a@hotmail.com</a></td>
  </tr>
  <tr>
    <td>📸 <strong>Instagram</strong></td>
    <td><a href="https://instagram.com/ikx7.a">@ikx7.a</a></td>
  </tr>
  <tr>
    <td>📌 <strong>Pinterest</strong></td>
    <td><a href="https://pinterest.com/ikx7a">@ikx7a</a></td>
  </tr>
</table>

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Shineii86/Telegram-Card&type=Date)](https://star-history.com/#Shineii86/Telegram-Card&Date)

---

<p align="center">
  <strong>Powered By</strong>
</p>
<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=for-the-badge" alt="Next.js" height="28"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript" height="28"/></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge" alt="Vercel" height="28"/></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React" height="28"/></a>
  <a href="https://github.com/vercel/satori"><img src="https://img.shields.io/badge/Satori-FF3E00?style=for-the-badge" alt="Satori" height="28"/></a>
</p>

---

<p align="center">
  <a href="https://github.com/Shineii86/Telegram-Card">
    <img src="https://github.com/Shineii86/AniPay/blob/main/Source/Banner6.png" alt="Banner" width="100%"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/Shineii86"><img src="https://img.shields.io/badge/Follow_Shinei_Nouzen-181717?style=for-the-badge&logo=github&logoColor=white" alt="Follow on GitHub"/></a>&nbsp;
  <a href="https://github.com/Shineii86/Telegram-Card/stargazers"><img src="https://img.shields.io/badge/⭐_Star_This_Repo-FFD700?style=for-the-badge" alt="Star Repo"/></a>&nbsp;
  <a href="https://github.com/Shineii86/Telegram-Card/fork"><img src="https://img.shields.io/badge/🍴_Fork-181717?style=for-the-badge&logo=github&logoColor=white" alt="Fork Repo"/></a>
</p>

<p align="center">
  <sub><b>Copyright © 2026 <a href="https://telegram.me/Shineii86">Shinei Nouzen</a> — All Rights Reserved</b></sub>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=Shineii86&label=Profile+Views&style=for-the-badge&color=blueviolet" alt="Profile Views"/>
</p>
