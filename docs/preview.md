# Preview Workflow

`bun run preview` runs the local SSG watcher and nginx preview stack through `scripts/preview.sh`. The script is the only preview entry point, so watch behavior, docker reloads, and cleanup rules stay in one place.

## Commands

Start the normal preview session with:

```sh
bun run preview
```

This starts the SSG watcher and the nginx preview process. `Ctrl+C` is forwarded to both process trees so the session can stop cleanly.

Run only the nginx preview mode with:

```sh
./scripts/preview.sh nginx
```

This keeps one preview container session alive, watches nginx-related files, and tails compose logs.

Trigger a serialized nginx reload with:

```sh
./scripts/preview.sh reload
```

Reload mode collapses repeated file events into one pending `docker compose up -d --force-recreate --remove-orphans` operation, instead of allowing multiple compose processes to pile up.

`package.json` routes `preview:nginx` and `preview:nginx:reload` through `bun run preview -- ...`, so sub-modes still use the same script.

## Process Supervision

The preview script resolves its own location first. Recursive calls and compose file paths therefore do not depend on the directory where the command was started.

Docker commands are executed through `${PREVIEW_INTERACTIVE_SHELL:-$SHELL}` in interactive login mode. This keeps local setups working when `docker` is exposed as a shell function instead of a normal executable.

File watching uses the project-local `chokidar-cli` entry file through `bun`, so the script does not require `node_modules/.bin` to be on `PATH`. The nginx watcher does not use `--initial`, because `preview.sh` performs the first reload itself.

The main `docker compose up` path runs in the foreground interactive shell, while the watcher stays in the background. The foreground shell disables its own job control before supervising compose so `Ctrl+C` can terminate promptly without `suspended (tty output)` failures.

Cleanup terminates spawned watcher and compose process trees, not only the top-level process id. Long-lived watcher and docker-shell processes start in their own process groups, background groups read from `/dev/null`, and `INT` / `TERM` handlers exit immediately after cleanup. `package.json` treats exit code `130` as a normal user interrupt, so `bun run preview` does not report `Ctrl+C` as a script error.

## Navigation During Rebuilds

Open browser tabs check the target document version during route navigation. If the target page belongs to a newer build, the app keeps the current page visible, shows a warning banner that says the latest content is loading, waits for the configured randomized notice duration, and then opens the newer target automatically.

Clicking the home logo while already on the home page uses the same target-version and offline-cache checks before forcing a home-page reload. This prevents a stale or offline target from bypassing the recovery path.

If a route-level dynamic import points to a stale hashed asset, the app shows a loading overlay and polls the target route until it returns `200`. If the target is still unavailable after the configured timeout, an error banner appears. Closing the banner cancels the pending target. Continuing retry keeps polling in the background with a non-blocking top progress bar. Background retry reports another passive error banner after each timeout window, waits for the configured notice duration, and then resumes retrying automatically.

## Offline Cache Flow

Open browser tabs first ask the service worker to inspect the active build cache. If the manifest signature and all manifest-listed entries are already current, the footer shows the offline-ready marker before the build hash on that page load. In that state, automatic full-site cache priming is skipped for the tab; `forceCache()` is still available when a manual refresh is needed.

If the cache is missing or stale, tabs wait before starting automatic offline-cache priming. Desktop devices use `clientNavigationRecovery.offlineCacheStartDelayMs`; mobile and coarse-pointer devices use `clientNavigationRecovery.mobileOfflineCacheStartDelayMs`. Navigating before the wait finishes resets the timer for the next route, and hidden tabs defer the timer until visible again.

After the wait passes, the client registers the service worker and asks it to precache the active build through `wc-precache-manifest.json`. The manifest covers generated route pages, reachable same-origin dependencies, configured same-origin shell assets, and any build-generated same-origin Iconify mirror JSON.

A small fixed indicator appears while full-site precache is running. Service-worker progress events update a thin circular progress ring outside the tint-colored activity dot. After the worker reports the manifest as complete or already current, the footer shows a compact offline-ready marker before the build hash.

The client also stores the currently rendered document under the exact URL and the root-document fallback key. The worker refreshes same-origin HTML and loaded assets opportunistically while the page is used.

Route pages are fetched through their public slug URLs and cached under those URLs plus declared aliases. The precache flow never requests `index.*.html` directly. Same-origin redirects are followed before caching, so canonical slash or locale redirects do not fail the precache pass.

The worker refreshes the active cache only when the generated manifest changed or when the active cache is missing manifest-listed URLs. It records the manifest as complete only after every listed page, reachable asset, dynamic chunk, configured shell asset, and manifest `requiredCachePatterns` match is cached. Once the current cache is complete, stale same-prefix runtime and pending cache stores are deleted so only the active build cache remains.

Navigation requests use exact cached responses when the upstream is unreachable or returns any `4xx` or `5xx`. The root route may use the root-document fallback. Non-root content routes do not fall back to the last cached document, which prevents an uncached article URL from being displayed as the home page.

Cached fallback responses are marked by fallback mode. Exact cached targets can be used for one hard navigation when SPA chunks are unavailable. Generic document fallbacks and same-URL errors do not trigger reload recovery.

Pages displayed from cached fallback, and runtime checks that observe offline-like responses, show the violet offline-cache banner. The banner is cleared when the browser reports online again or when a later check receives a normal online response. Runtime caches refresh when the client detects a newer build hash.

## Cache Diagnostics

Cache operations log detailed diagnostics with the `[WalksCloud cache]` prefix. Logs include cached URLs, deleted caches, stale cache-store cleanup, fallback mode, manifest completion stats, failed precache entries, and the static update plan for each manifest refresh.

The static update plan lists target, added, updated, and removed cached URLs before the verified pending cache is copied into the active cache. A failed precache pass does not delete the active cache.

Browser console helpers are available on the current origin:

```js
clearCache();
forceCache();
verifyCache();
```

`clearCache()` deletes all CacheStorage entries for the current origin and logs every deleted cache and the URLs it contained. `forceCache()` forces a full manifest refresh for the current build and logs the same update plan, completion report, stale cleanup, and cache-inspection pattern matches. `verifyCache()` inspects the active CacheStorage without refreshing it.

These commands are serialized internally, so `clearCache(); forceCache(); verifyCache();` runs in order without typing `await`.

## Alert Layout

Global alert banners reserve space above the fixed header. Warning, error, and offline-cache banners should push the header down instead of covering the navigation bar.
