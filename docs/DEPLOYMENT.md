# Deployment Guide

## One-Click Deploy

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

## CLI Deploy (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## Platform Comparison

| Platform | Edge | Cold Start | Free Tier | Config |
|----------|:----:|:----------:|:---------:|:------:|
| **Vercel** | ✅ Native | ~0ms | ✅ Generous | `vercel.json` |
| **Cloudflare** | ✅ Native | ~0ms | ✅ 100k req/day | `wrangler.toml` |
| **Netlify** | ⚠️ Limited | ~200ms | ✅ 125k req/month | `netlify.toml` |
| **Railway** | ❌ Region | ~500ms | ⚠️ $5 credit | `render.yaml` |
| **Render** | ❌ Region | ~1s | ✅ 750 hrs/month | `render.yaml` |
| **Heroku** | ❌ Region | ~2s | ❌ No free tier | `app.json` |

## Environment Variables

| Variable | Required | Default | Description |
|----------|:--------:|---------|-------------|
| `NODE_ENV` | ✅ | `production` | Runtime environment mode |

---

## Local Development

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

## Project Structure

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
