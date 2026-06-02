# Build Workflow

`scripts/build.sh` is the single entry point for static site builds.

- `./scripts/build.sh` runs the full SSG pipeline: `vite-ssg build`, metadata generation, redirect map generation, and `dist` formatting.
- `./scripts/build.sh watch` runs the same pipeline through `chokidar` and rebuilds when files under `src/`, `public/`, `config/`, or `scripts/` change.
- Watch mode also observes Git `HEAD` / branch metadata so the footer build hash is regenerated after a commit changes a previously dirty working tree back to clean.
- The script resolves its own location first, so it can be launched outside the repository root without breaking relative `node` or watcher commands.
- The script executes the project-local CLI entry files under `node_modules/` via `bun`, avoiding extra package-resolution noise from `bun x`.
- `INT` / `TERM` traps now clean up the watcher and exit immediately instead of returning to `wait`.
- Long-lived watcher processes are started in their own process group so cleanup can terminate the whole group, not just the top-level pid.
- Background process groups are launched with `stdin` redirected from `/dev/null` so they do not block on terminal input.
- HTML pages are emitted only under locale folders after the bot/normal split. Non-prefixed route HTML is removed from `dist`, and nginx / Cloudflare Pages resolve non-prefixed human requests through the selected locale folder instead.
- Cloudflare Pages builds are detected by the platform-provided `CF_PAGES=1` environment variable. In that environment, the build writes `dist/_worker.js` so Pages can route extensionless HTML requests to `index.normal.html` or `index.bot.html` by user agent. Local, nginx, and Fly builds do not generate this worker.
- The static service worker at `/wc-sw.js` is copied from `public/` during the Vite build. Client registration appends the current build hash and runtime cache settings as query strings, allowing the runtime cache to separate old and new builds while preserving cached-page fallback during upstream outages.

`package.json` maps both `build:ssg` and `build:ssg:watch` to this script so the build behavior stays in one place.
