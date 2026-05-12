# Integration Guide

## Copy-Paste Snippets

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

## Programmatic Usage

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

## Use Cases

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

### Discord Server Info Channel

Paste the card URL directly — Discord renders it as an inline image.

### Email Signature

```html
<a href="https://t.me/Shineii86">
  <img src="https://telegramcard.vercel.app/?username=Shineii86" 
       alt="Telegram" width="300" style="border-radius:12px;"/>
</a>
```
