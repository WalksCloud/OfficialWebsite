#!/bin/sh
set -eu

DIR=$(
  CDPATH= cd -- "$(dirname -- "$0")"
  pwd
)
script_path="${DIR}/$(basename -- "$0")"
project_root=$(dirname -- "$DIR")
vite_ssg_cli="${project_root}/node_modules/vite-ssg/bin/vite-ssg.js"
chokidar_cli="${project_root}/node_modules/chokidar-cli/index.js"

cd "$project_root"

spawn_in_process_group() {
  /usr/bin/perl -e 'setpgrp(0,0) or die "$!"; exec @ARGV' "$@" </dev/null &
  spawned_pid=$!
}

terminate_process_group() {
  pid=$1
  if [ -z "${pid:-}" ]; then
    return 0
  fi
  kill -TERM -- "-$pid" 2>/dev/null || true
  wait "$pid" 2>/dev/null || true
}

run_build() {
  bun "$vite_ssg_cli" build
  bun "${DIR}/generate-meta.js"
  bun "${DIR}/generate-redirects.js"
  bun "${DIR}/format-dist.js"
}

run_watch() {
  watch_pid=""

  watch_cleanup() {
    if [ -n "$watch_pid" ]; then
      terminate_process_group "$watch_pid"
    fi
  }

  on_watch_signal() {
    trap - INT TERM EXIT
    watch_cleanup
    exit 130
  }

  trap on_watch_signal INT TERM
  trap watch_cleanup EXIT

  spawned_pid=""
  spawn_in_process_group bun "$chokidar_cli" "src/**/*" "public/**/*" "config/**/*" "scripts/**/*" --initial --debounce 300 -c "\"${script_path}\""
  watch_pid=$spawned_pid

  wait "$watch_pid"
}

mode="${1:-build}"

case "$mode" in
  build)
    run_build
    ;;
  watch)
    run_watch
    ;;
  *)
    echo "Usage: $0 [build|watch]" >&2
    exit 1
    ;;
esac
