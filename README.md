<p align="center">
  <img src="https://github.com/user-attachments/assets/39b7b5d1-308e-462e-b414-b7662bf92341" alt="Telegram Card Widget Logo" width="200" height="200"/>
</p>

<h1 align="center">Telegram Card Widget</h1>

<p align="center">
  <strong>Beautiful, dynamic Open Graph cards for Telegram profiles, channels, groups, and bots</strong>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15.0+-000000?logo=next.js&logoColor=white&style=flat-square" alt="Next.js"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript"/></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-Edge_Functions-000000?logo=vercel&logoColor=white&style=flat-square" alt="Vercel"/></a>
  <a href="https://t.me/MaximXStickers"><img src="https://img.shields.io/badge/Telegram-API-26A5E4?logo=telegram&logoColor=white&style=flat-square" alt="Telegram"/></a>
  <a href="https://github.com/Shineii86/Telegram-Card/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="License"/></a>
</p>

<p align="center">
  <a href="https://telegramcard.vercel.app/?username=MaximXStickers"><strong>🚀 Live Demo</strong></a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-api-reference">API Reference</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Quick Start](#-quick-start)
- [API Reference](#-api-reference)
- [Examples](#-examples)
- [Deployment](#-deployment)
- [Local Development](#-local-development)
- [Use Cases](#-use-cases)
- [Contributing](#-contributing)
- [Acknowledgements](#-acknowledgements)
- [Credits](#-credits)
- [License](#-license)
- [Changelog](#-changelog)
- [Support](#-support)
- [Security](#-security)

---

## 🎯 Overview

**Telegram Card Widget** is a high-performance, serverless solution for generating dynamic Open Graph images for Telegram entities. Built with modern web technologies and deployed on the edge, it provides real-time card generation for profiles, channels, groups, and bots with sub-second response times.

The widget scrapes public metadata from Telegram's `t.me` preview pages using JSDOM and generates optimized PNG cards using `@vercel/og` and the Satori rendering engine.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **⚡ Edge-Powered** | Sub-100ms response times via Vercel Edge Network |
| **🎨 Theming** | Native dark/light modes + full CSS custom properties support |
| **📱 Responsive** | Optimized rendering for GitHub, Twitter, LinkedIn, and web embeds |
| **🔍 Auto-Detection** | Automatically identifies entity type (User, Bot, Channel, Group) |
| **📊 Real-time Metrics** | Displays subscriber counts, member counts, or online status |
| **🖼️ OG Image Ready** | Perfect Open Graph metadata for social sharing |
| **🔒 Privacy First** | No data persistence; ephemeral request processing |
| **🌍 Global CDN** | 100+ edge locations worldwide |
| **🛡️ Security** | Middleware-enforced headers (CSP, nosniff, no-referrer) |

---

## 🛠 Technology Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions)** - Serverless compute at the edge
- **[Satori](https://github.com/vercel/satori)** - SVG-based OG image generation
- **[@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)** - Open Graph image generation library

### APIs & Data Sources
- **Telegram t.me web pages** - Public metadata scraping via JSDOM

### Infrastructure
- **Vercel Edge Network** - Global CDN and edge compute
- **Cloudflare Workers** - Alternative deployment target

---

## 🚀 Quick Start

### Basic Usage

Generate a card by providing a Telegram username:

```
https://telegramcard.vercel.app/?username=MaximXStickers
```

### Theme Selection

Append the `theme` parameter for predefined styles:

```
https://telegramcard.vercel.app/?username=MaximXStickers&theme=dark
```

### GitHub README Integration

```markdown
<!-- Markdown syntax -->
![Telegram](https://telegramcard.vercel.app/?username=MaximXStickers&theme=dark)

<!-- HTML syntax with responsive sizing -->
<a href="https://t.me/MaximXStickers">
  <img src="https://telegramcard.vercel.app/?username=MaximXStickers" alt="Telegram @MaximXStickers" width="400"/>
</a>
```

---

## 📚 API Reference

### Base URL
```
https://telegramcard.vercel.app/
```

### Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/?username={username}` | Generate card for specified entity |

### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `username` | `string` | ✅ | - | Telegram username (without @) |
| `theme` | `string` | ❌ | `light` | Predefined theme: `light`, `dark` |
| `bgColor` | `string` | ❌ | Theme-based | Background color (CSS color value) |
| `textColor` | `string` | ❌ | Theme-based | Primary text color |
| `subtleTextColor` | `string` | ❌ | Theme-based | Secondary/muted text color |
| `extraColor` | `string` | ❌ | Theme-based | Accent/highlight color |
| `shadowColor` | `string` | ❌ | Theme-based | Card shadow color |
| `fontFamily` | `string` | ❌ | `Inter, sans-serif` | Font stack (CSS font-family) |

### Color Formats

Supports all CSS color formats:
- Hex: `%23F1F5F9` (URL-encoded `#F1F5F9`)
- RGB: `rgb(30,41,59)`
- RGBA: `rgba(30,41,59,1)`
- HSL: `hsl(215,25%,17%)`

### Response Headers

| Header | Value | Description |
|--------|-------|-------------|
| `Content-Type` | `image/png` | Image format |
| `Cache-Control` | `public, max-age=7200` | Caching strategy (2 hours) |
| `Content-Security-Policy` | Strict CSP | Prevents misuse of the image response |
| `X-Content-Type-Options` | `nosniff` | MIME-type sniffing protection |

### Error Responses

| Status Code | Description | Resolution |
|-------------|-------------|------------|
| 200 (with error card) | Entity not found or scrape failure | Verify username exists and is public |
| 404 | Homepage not found | Ensure `public/index.html` is present |

---

## 🎨 Examples

### Theme Examples

#### Light Theme
```markdown
![Light Theme](https://telegramcard.vercel.app/?username=Premium&theme=light)
```
![Light Theme](https://telegramcard.vercel.app/?username=Premium&theme=light)

#### Dark Theme
```markdown
![Dark Theme](https://telegramcard.vercel.app/?username=Premium&theme=dark)
```
![Dark Theme](https://telegramcard.vercel.app/?username=Premium&theme=dark)

### Entity Type Examples

| Type | Example | Preview |
|------|---------|---------|
| **Channel** | `?username=MaximXStickers` | ![Channel](https://telegramcard.vercel.app/?username=MaximXStickers&theme=light) |
| **Bot** | `?username=MikoReactionsBot` | ![Bot](https://telegramcard.vercel.app/?username=MikoReactionsBot&theme=light) |
| **Group** | `?username=MaximXSticker` | ![Group](https://telegramcard.vercel.app/?username=MaximXSticker&theme=light) |
| **User** | `?username=Shineii86` | ![User](https://telegramcard.vercel.app/?username=Shineii86&theme=light) |

### Advanced Customization

**Custom Color Scheme:**
```markdown
![Custom](https://telegramcard.vercel.app/?username=QuinxNetwork&bgColor=rgba(30,41,59,1)&textColor=%23F1F5F9&subtleTextColor=%23CBD5E1&extraColor=%23F59E0B&shadowColor=rgba(0,0,0,0.2)&fontFamily=system-ui)
```
![Custom](https://telegramcard.vercel.app/?username=QuinxNetwork&bgColor=rgba(30,41,59,1)&textColor=%23F1F5F9&subtleTextColor=%23CBD5E1&extraColor=%23F59E0B&shadowColor=rgba(0,0,0,0.2)&fontFamily=system-ui)

---

## 🚢 Deployment

### One-Click Deployments

#### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Shineii86/Telegram-Card)

#### Cloudflare Workers
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Shineii86/Telegram-Card)

### Platform-Specific Deployment

| Platform | Button | Notes |
|----------|--------|-------|
| **Heroku** | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Shineii86/Telegram-Card) | Requires buildpack configuration |
| **Netlify** | [![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Shineii86/Telegram-Card) | Edge functions support required |
| **Railway** | [![Deploy](https://railway.app/button.svg)](https://railway.com/template/v2vpPI?referralCode=jC4ZQ_) | Containerized deployment |
| **Render** | [![Deploy](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Shineii86/Telegram-Card) | Web service configuration |

### Environment Variables

| Variable | Required | Description | Default |
|----------|----------|-------------|---------|
| `NODE_ENV` | ✅ | Environment mode | `production` |

---

## 💻 Local Development

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0
- **Git**

### Installation

```bash
# Clone repository
git clone https://github.com/Shineii86/Telegram-Card.git
cd Telegram-Card

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Production build with static optimization |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint code analysis |

### Project Structure

```
Telegram-Card/
├── app/
│   ├── globals.css          # Base styles
│   ├── layout.tsx           # Root layout with metadata
│   └── route.tsx            # Main API route (card generation)
├── components/
│   └── TelegramCard.tsx     # Card & error card React components
├── types/
│   └── enums.ts             # TypeScript types & enums
├── utils/
│   ├── cache.ts             # In-memory LRU-style cache (max 500 entries)
│   ├── errors.ts            # Custom error classes
│   ├── parsers.ts           # HTML parsing utilities
│   ├── scrapeTelegram.ts    # Telegram page scraper
│   └── theme.ts             # Theme resolution & username sanitization
├── public/
│   ├── index.html           # Landing page with card generator UI
│   └── og.png               # Open Graph preview image
├── middleware.ts             # Security headers middleware
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── vercel.json               # Vercel deployment config
├── netlify.toml              # Netlify deployment config
├── wrangler.toml             # Cloudflare Workers config
├── render.yaml               # Render deployment config
├── app.json                  # Heroku deployment config
└── package.json              # Dependencies & scripts
```

### Development Workflow

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** Pull Request

---

## 💡 Use Cases

- **GitHub Profiles** - Dynamic Telegram links in README headers
- **Personal Websites** - Embed cards in portfolio/contact sections
- **Documentation** - Visual Telegram references in technical docs
- **Social Sharing** - OG images for Telegram entity previews
- **Marketing** - Showcase channel statistics in presentations
- **Community** - Display group member counts on landing pages

---

## 🤝 Contributing

We welcome contributions from the community! Please review our contribution guidelines before submitting PRs.

### Contribution Workflow

1. Check existing [Issues](https://github.com/Shineii86/Telegram-Card/issues) and [PRs](https://github.com/Shineii86/Telegram-Card/pulls)
2. Fork the repository and create your branch
3. Ensure code follows existing style conventions
4. Update documentation as needed
5. Submit Pull Request with detailed description

### Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this code.

---

## 🙏 Acknowledgements

### Core Dependencies
- **[Vercel](https://vercel.com/)** - Edge infrastructure and OG image generation
- **[Next.js Team](https://nextjs.org/)** - React framework and Satori renderer
- **[Telegram](https://telegram.org/)** - Public web preview pages

### Open Source Libraries
- [Satori](https://github.com/vercel/satori) - Enlightened library for converting HTML/CSS to SVG
- [JSDOM](https://github.com/jsdom/jsdom) - JavaScript DOM implementation for Node.js
- [Twemoji](https://twemoji.twitter.com/) - Twitter emoji support

### Community
- [Quinx Network](https://github.com/QuinxNetwork) - Initial concept and development
- All [contributors](https://github.com/Shineii86/Telegram-Card/graphs/contributors) who have helped improve this project

---

## 📜 Credits

**Original Author & Maintainer**
- [Shinei Nouzen](https://github.com/Shineii86) - Core architecture and development

**Design & UI**
- [Quinx Network Design Team](https://github.com/QuinxNetwork) - Visual identity and card layouts

**Special Thanks**
- The Vercel team for `@vercel/og` and edge function innovations
- Telegram for maintaining open public preview pages

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses

- Next.js - [MIT License](https://github.com/vercel/next.js/blob/canary/license.md)
- Satori - [MPL-2.0 License](https://github.com/vercel/satori/blob/main/LICENSE)

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

---

## 🆘 Support

### Community Support
- **GitHub Discussions**: [Q&A](https://github.com/Shineii86/Telegram-Card/discussions)
- **Issues**: [Bug Reports](https://github.com/Shineii86/Telegram-Card/issues)
- **Telegram**: [@ShineiNouzen](https://telegram.me/Shineii86)

### Professional Support
For enterprise support or custom implementations:
- **Email**: [ikx7a@hotmail.com](mailto:ikx7a@hotmail.com)
- **Website**: [QuinxNetwork.com](https://github.com/QuinxNetwork)

---

## 🔒 Security

### Reporting Vulnerabilities

If you discover a security vulnerability, please **DO NOT** open a public issue. Instead:

1. Email security concerns to: [ikx7a@hotmail.com](mailto:ikx7a@hotmail.com)
2. Include detailed description and reproduction steps
3. Allow 48 hours for initial response
4. Coordinate disclosure timeline

### Security Measures

- No persistent data storage
- Input sanitization on all parameters
- Cache capped at 500 entries (auto-eviction)
- CSP, nosniff, and no-referrer headers via middleware
- Rate limiting on API endpoints

---

## 💕 Loved My Work?

🚨 [Follow me on GitHub](https://github.com/Shineii86)

⭐ [Give a star to this project](https://github.com/Shineii86/Telegram-Card/)

<div align="center">

<a href="https://github.com/Shineii86/Telegram-Card">
<img src="https://github.com/Shineii86/AniPay/blob/main/Source/Banner6.png" alt="Banner">
</a>

  *For inquiries or collaborations*

[![Telegram Badge](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat&logo=Telegram&logoColor=white)](https://telegram.me/Shineii86 "Contact on Telegram")
[![Instagram Badge](https://img.shields.io/badge/-Instagram-C13584?style=flat&logo=Instagram&logoColor=white)](https://instagram.com/ikx7.a "Follow on Instagram")
[![Pinterest Badge](https://img.shields.io/badge/-Pinterest-E60023?style=flat&logo=Pinterest&logoColor=white)](https://pinterest.com/ikx7a "Follow on Pinterest")
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?style=flat&logo=Gmail&logoColor=white)](mailto:ikx7a@hotmail.com "Send an Email")

  <sup><b>Copyright © 2026 <a href="https://telegram.me/Shineii86">Shinei Nouzen</a> All Rights Reserved</b></sup>

![Last Commit](https://img.shields.io/github/last-commit/Shineii86/Telegram-Card?style=for-the-badge)

</div>
