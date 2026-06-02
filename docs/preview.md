# Preview Workflow

`bun run preview` now uses shell supervisors instead of running `docker compose` directly from `chokidar`.

- `scripts/preview.sh` is the only preview script now.
- `./scripts/preview.sh` starts the SSG watcher and nginx preview process, and forwards `Ctrl+C` cleanup to both.
- `./scripts/preview.sh nginx` keeps one preview container session alive, watches nginx-related files, and tails compose logs.
- `./scripts/preview.sh reload` serializes `docker compose up -d --force-recreate --remove-orphans` so repeated file events collapse into a single pending reload instead of piling up multiple compose processes.
- `package.json` routes `preview:nginx` and `preview:nginx:reload` through `bun run preview -- ...`, so the script entry stays unified while still supporting sub-modes.
- The script resolves its own location first, so recursive calls and the compose file path do not depend on starting from the repository root.
- Docker-related commands are executed through `${PREVIEW_INTERACTIVE_SHELL:-$SHELL}` in interactive login mode so setups that expose `docker` as a shell function can still be used.
- File watching is launched by executing the project-local `chokidar-cli` entry file through `bun`, so the script does not depend on `node_modules/.bin` being on PATH.
- The nginx watcher no longer uses `--initial`, because `preview.sh` already performs the first reload itself; this avoids an extra startup-triggered interactive shell execution.
- The foreground interactive shell now disables its own job control before supervising a background `docker compose up`, so `Ctrl+C` can print `Terminating...` immediately without reintroducing `suspended (tty output)` failures.
- Cleanup terminates the spawned watcher / compose process trees instead of only killing the top-level pid.
- `INT` / `TERM` handlers exit immediately after cleanup so the shell does not fall back into `wait` on a stale watcher pid.
- Long-lived watcher and docker-shell processes are started in their own process group so cleanup can terminate the full group, including any shell left behind by child commands.
- Background process groups are launched with `stdin` redirected from `/dev/null` so an interactive shell running in the background does not stall waiting on the terminal.
- The main `docker compose up` path now runs in the foreground interactive shell; only the watcher stays in the background. This avoids background job-control issues with `shell -lic`.
- `package.json` treats exit code `130` as an expected user interrupt, so `bun run preview` no longer reports it as a script error after `Ctrl+C`.
- Open browser tabs check the target document version on route navigation. If the target page is from a newer build, the app keeps the current page and shows a warning banner that lets the user continue to the newer target page instead of attempting to run stale client chunks.
- If a route-level dynamic import points at a stale hashed asset, the app shows a loading overlay, polls the target route until it returns `200`, then navigates to that target. If the target is still unavailable after the configured timeout, it shows an error banner; closing the banner cancels the pending target, while continuing retry keeps polling in the background with a non-blocking top progress bar. Background retry reports another passive error banner after each timeout window, waits for the configured notice duration, then resumes retrying automatically.
- Open browser tabs register a runtime cache service worker. The client stores the currently rendered document as both the exact URL and the last-document fallback, while the worker also caches same-origin HTML and loaded assets. Navigation requests use cached responses when the upstream is unreachable or responds with `404` / `5xx`; if the exact URL is not cached, the worker serves the last cached document so the browser still displays a page. Runtime caches refresh when the client detects a newer build hash.

This keeps only one nginx reload in flight at a time and makes `Ctrl+C` stop the full preview session cleanly.
