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

This keeps only one nginx reload in flight at a time and makes `Ctrl+C` stop the full preview session cleanly.
