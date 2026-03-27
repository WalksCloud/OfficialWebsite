# OfficialWebsite

## Requirements
- Bun 1.x
- Node 18+ (tooling only)

## Install
```bash
bun install --frozen-lockfile
```

## Dev
```bash
# Local
bun run dev -- --host 0.0.0.0 --port 5173
# Docker hot reload
docker-compose -f docker-compose.dev.yml up --build
```

## Build (SSG)
```bash
bun run build:ssg
```
Outputs to `dist/` with prefixed/non-prefix pages plus `sitemap.xml` / `robots.txt`.

## Preview (nginx + auto rebuild)
```bash
bun run preview
```
Rebuilds on changes and serves `dist/` via nginx (`docker-compose.preview.yml`, `deploy/nginx.conf`); editing `deploy/*.conf` auto-restarts the container.

## Content & Meta
- Config-driven: `config/site.yaml` (brand, social/OG/fb meta, baseUrl, locales), `config/pages.yaml` (routes/slugs, titles/descriptions, sitemap/JSON-LD).
- Locales: `src/locales/*.yaml`.
- Markdown: `src/content/services/*.md`, `src/content/cases/*.md` (multi-locale per file via frontmatter).
- Head/meta/hreflang/canonical/JSON-LD generated at build.

## Deploy
- Dockerfile builds SSG with Bun, serves via nginx (Accept-Language negotiation).
- Fly.io config: `deploy/fly.toml`; GitHub Actions in `.github/workflows/*` (needs `FLY_API_TOKEN`).
