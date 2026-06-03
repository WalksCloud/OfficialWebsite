# Build Workflow

`scripts/build.sh` is the single entry point for static site builds. Keep build behavior there instead of spreading build-only steps across package scripts or deployment-specific commands.

`package.json` maps both `build:ssg` and `build:ssg:watch` to this script, so local builds, watch builds, and CI builds follow the same pipeline.

## Commands

Run a full static build with:

```sh
./scripts/build.sh
```

This runs the full SSG pipeline: `vite-ssg build`, metadata generation, redirect map generation, `dist` formatting, bot/normal HTML splitting, Iconify mirror generation, and final service-worker precache manifest generation.

Run watch mode with:

```sh
./scripts/build.sh watch
```

Watch mode uses `chokidar` and rebuilds when files under `src/`, `public/`, `config/`, or `scripts/` change. It also watches Git `HEAD` and branch metadata so the footer build hash is regenerated after a commit changes a previously dirty working tree back to clean.

## Script Behavior

The script resolves its own location before running build steps. That allows it to be launched outside the repository root without breaking relative `node` or watcher commands.

Project-local CLI entry files under `node_modules/` are executed through `bun`. This avoids extra package-resolution noise from `bun x` and keeps the command path explicit.

Long-lived watcher processes run in their own process group. `INT` and `TERM` traps clean up the watcher process tree and exit immediately, instead of returning to `wait` with a stale process id. Background process groups also read from `/dev/null`, so they do not block on terminal input.

## HTML Output

After the bot/normal split, generated HTML pages are kept only under locale folders. Non-prefixed route HTML is removed from `dist`. nginx and Cloudflare Pages resolve non-prefixed human requests through the selected locale folder instead of serving duplicate root files.

Each route has a normal and bot version. The normal version keeps the interactive browser experience. The bot version removes crawler-unfriendly shell behavior while preserving page content that should be indexed.

The split step is idempotent. If it runs again against an already transformed `dist`, it skips successfully when only `index.normal.html` and `index.bot.html` remain.

Cloudflare Pages builds are detected by `CF_PAGES=1`. In that environment only, the build writes `dist/_worker.js` so Pages can route extensionless HTML requests to `index.normal.html` or `index.bot.html` by user agent. Local, nginx, and Fly builds do not generate this worker.

## Content Images

Before SSG runs, markdown image references are scanned and written to `src/generated/contentImageAssets.js`. Only images actually embedded by markdown are imported into the client bundle.

This keeps source material beside an article without publishing it accidentally. For example, an original screenshot that is only used to create an annotated copy can remain in the content folder, but it will not be bundled or selected by the precache manifest unless markdown references it.

## Service Worker And Offline Cache

The static service worker lives at `public/wc-sw.js` and is copied into the build by Vite. Client registration appends the current build hash and cache settings as query strings. That lets old and new builds keep separate caches while still allowing cached-page fallback during upstream outages.

The worker does not run the full precache during `install`. Automatic offline-cache priming starts only after the client-side stable-page delay configured under `clientNavigationRecovery` in `config/site-info.yaml`.

The build writes `dist/wc-precache-manifest.json` from generated route pages, same-origin files reachable from those pages through HTML, CSS, and JS references, and same-origin shell assets whose extensions are listed in `clientNavigationRecovery.precacheStaticAssetExtensions`.

The manifest intentionally avoids implementation-only HTML names. Physical `index.bot.html` files are excluded. Physical `index.normal.html` files are represented by their public route slug, so the service worker fetches the same URL that users and crawlers use instead of requesting `index.*.html` directly.

Same-origin redirects are followed before the final response is cached under the declared slug and aliases. Default-locale pages also include non-prefixed aliases so offline navigation can match shared links such as `/services/...`.

External resources such as Google Fonts stylesheets are ignored by the manifest resolver instead of being converted into cache entries. If those fonts are unavailable offline, the page remains readable with fallback fonts.

The build fails if any selected page, reachable asset, dynamic chunk, or configured `cacheInspectionPatterns` path is missing from the manifest. Those configured patterns are also stored as `requiredCachePatterns`, so the service worker marks a precache refresh incomplete if the active CacheStorage does not contain matching URLs after replacement.

## Iconify Mirror

`scripts/generate-iconify-mirror.js` scans configured source files, generated HTML, and Nuxt UI runtime files for Iconify names. It resolves collection prefixes through `@iconify/collections`, downloads each detected prefix from the configured Iconify API endpoint, and writes same-origin JSON under `dist/icons/iconify/`.

The local Iconify provider is injected only into `index.normal.html`, not `index.bot.html`. If the build-time API download fails, the script prints an error, removes the incomplete mirror output, keeps the build successful, and does not inject the local provider. Runtime icon loading then falls back to the online Iconify API without a precached mirror.

Component usage conventions are documented in `docs/icons.md`.
