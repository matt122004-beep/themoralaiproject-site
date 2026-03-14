# The Moral AI Project

Static Astro site for `moralai.org`.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Markdown blog posts via Astro content collections

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project structure

- `src/pages/` contains the seven primary pages, blog index/detail routes, RSS, and `404.astro`
- `src/content/blog/` contains markdown blog posts
- `src/components/` contains shared SEO, header, footer, and presentation components
- `src/layouts/` contains the base layout
- `public/` contains robots rules and static SVG assets

## Notes

- Output is configured as static
- Sitemap generation is enabled via `@astrojs/sitemap`
- `robots.txt` points to the generated sitemap index
- Contact and donation actions currently use placeholders
