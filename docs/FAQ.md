# FAQ & Troubleshooting

## FAQ

**Do I need a Telegram API key?**
No. The widget scrapes public `t.me` preview pages — the same data you see when opening a Telegram link in a browser. No API keys, no bots, no authentication.

**Does it work with private channels/groups?**
No. Only public Telegram entities with a `t.me` preview page are supported. Private channels don't expose public metadata.

**How often does the data update?**
Cards are cached for 2 hours. After expiry, the next request triggers a fresh scrape. Stats reflect the latest data from Telegram's preview page.

**Can I use custom fonts?**
Yes! Pass any CSS `font-family` via the `fontFamily` parameter. System fonts work best — Satori has built-in support for common fonts. Web fonts require pre-loading in the component.

**Can I self-host this?**
Absolutely. Clone the repo and deploy to any Next.js-compatible platform — Vercel, Cloudflare, Netlify, Railway, Render, Heroku, or your own server. See [Deployment Guide](DEPLOYMENT.md).

**What's the rate limit?**
No application-level rate limit. Limits come from your hosting platform and Telegram's own throttling on `t.me` pages.

**Why 700×250 pixels?**
The 2.8:1 aspect ratio is optimized for social media embeds — renders well on GitHub, Twitter, LinkedIn, and Discord without cropping or excessive height.

**Can I change the card dimensions?**
Not via the API — dimensions are fixed at 700×250 for consistency. Control display size with the `width` attribute on your `<img>` tag. To change actual dimensions, fork and modify the `ImageResponse` call in `app/route.tsx`.

**Does it support languages other than English?**
Yes! Telegram entity names, descriptions, and stats are rendered as-is from the `t.me` page — any language Telegram supports will display correctly.

**Can I use this commercially?**
Yes! The project is MIT licensed. Use it in personal projects, commercial products, SaaS tools — anything. Attribution is appreciated but not required.

---

## Troubleshooting

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
