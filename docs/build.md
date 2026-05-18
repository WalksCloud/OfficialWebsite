# Build Workflow

`scripts/build.sh` is the single entry point for static site builds.

- `./scripts/build.sh` runs the full SSG pipeline: `vite-ssg build`, metadata generation, redirect map generation, and `dist` formatting.
- `./scripts/build.sh watch` runs the same pipeline through `chokidar` and rebuilds when files under `src/`, `public/`, `config/`, or `scripts/` change.
- The script resolves its own location first, so it can be launched outside the repository root without breaking relative `node` or watcher commands.
- The script executes the project-local CLI entry files under `node_modules/` via `bun`, avoiding extra package-resolution noise from `bun x`.
- `INT` / `TERM` traps now clean up the watcher and exit immediately instead of returning to `wait`.
- Long-lived watcher processes are started in their own process group so cleanup can terminate the whole group, not just the top-level pid.
- Background process groups are launched with `stdin` redirected from `/dev/null` so they do not block on terminal input.

`package.json` maps both `build:ssg` and `build:ssg:watch` to this script so the build behavior stays in one place.
