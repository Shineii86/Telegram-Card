# Theming Guide

## Preset Themes

| Theme | Parameter | Preview |
|-------|-----------|---------|
| **Light** (default) | `?theme=light` | White card, dark text, blue accent |
| **Dark** | `?theme=dark` | Gray card, light text, light blue accent |

## Default Color Palettes

| Property | Light ☀️ | Dark 🌙 |
|----------|----------|---------|
| `bgColor` | `rgba(255,255,255,1)` | `rgba(42,42,42,1)` |
| `textColor` | `#000000` | `#FFFFFF` |
| `subtleTextColor` | `#666666` | `#AAAAAA` |
| `extraColor` | `#3390D6` | `#8DD5FF` |
| `shadowColor` | `rgba(0,0,0,0.06)` | `rgba(0,0,0,0.3)` |
| `fontFamily` | `Inter, sans-serif` | `Inter, sans-serif` |

## Override Rules

- **Any parameter can be overridden independently** — unset params fall back to the active theme's defaults
- **Colors override presets** — if you set `bgColor`, it replaces the theme's background regardless of `theme=light` or `theme=dark`
- **Font override** — pass any CSS `font-family` value; system fonts work best with Satori

---

## Ready-Made Color Palettes

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

## Entity Type Detection

The widget auto-detects four Telegram entity types by parsing `t.me` preview page metadata:

| Type | Detection Signal | Stats Displayed | Example |
|------|-----------------|-----------------|---------|
| 👤 **User** | Personal profile attributes | Online status / last seen | `?username=Shineii86` |
| 🤖 **Bot** | Bot indicator in metadata | "Telegram Bot" label | `?username=MikoReactionsBot` |
| 📢 **Channel** | Channel-specific meta tags | Subscriber count | `?username=MaximXStickers` |
| 👥 **Group** | Group-specific meta tags | Members + online count | `?username=MaximXSticker` |

The card layout adapts automatically — the "extra" line below the username shows the relevant statistic for each type.
