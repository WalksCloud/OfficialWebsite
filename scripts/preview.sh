#!/bin/sh
set -eu

DIR=$(
  CDPATH= cd -- "$(dirname -- "$0")"
  pwd
)
script_path="${DIR}/$(basename -- "$0")"
project_root=$(dirname -- "$DIR")
compose_file="${project_root}/docker-compose.preview.yml"
chokidar_cli="${project_root}/node_modules/chokidar-cli/index.js"
lock_dir="${TMPDIR:-/tmp}/walkscloud-preview-nginx-reload.lock"
pending_file="${TMPDIR:-/tmp}/walkscloud-preview-nginx-reload.pending"
interactive_shell="${PREVIEW_INTERACTIVE_SHELL:-${SHELL:-/bin/zsh}}"

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

run_docker_compose() {
  command=$1
  "$interactive_shell" -lic "docker compose -f \"$compose_file\" ${command}"
}

run_docker_compose_foreground() {
  command=$1
  shell_name=$(basename -- "$interactive_shell")
  disable_job_control=""
  case "$shell_name" in
    zsh)
      disable_job_control="unsetopt monitor 2>/dev/null || true;"
      ;;
    bash)
      disable_job_control="set +m 2>/dev/null || true;"
      ;;
  esac

  "$interactive_shell" -lic "${disable_job_control} docker compose -f \"$compose_file\" ${command} &
child=\$!
trap 'printf \"%s\n\" \"Terminating...\" >&2; kill -TERM \$child 2>/dev/null || true; wait \$child 2>/dev/null || true; exit 130' INT TERM
wait \$child"
}

reload_nginx() {
  reload_cleanup() {
    rmdir "$lock_dir" 2>/dev/null || true
  }

  if ! mkdir "$lock_dir" 2>/dev/null; then
    : >"$pending_file"
    exit 0
  fi

  trap reload_cleanup EXIT INT TERM

  while :; do
    rm -f "$pending_file"
    run_docker_compose "up -d --force-recreate --remove-orphans"
    if [ ! -e "$pending_file" ]; then
      break
    fi
  done
}

run_nginx_preview() {
  watch_pid=""

  nginx_cleanup() {
    if [ -n "$watch_pid" ]; then
      terminate_process_group "$watch_pid"
    fi
    run_docker_compose "down --remove-orphans" >/dev/null 2>&1 || true
  }

  on_nginx_signal() {
    trap - INT TERM EXIT
    nginx_cleanup
    exit 130
  }

  trap on_nginx_signal INT TERM
  trap nginx_cleanup EXIT

  spawned_pid=""
  spawn_in_process_group bun "$chokidar_cli" "deploy/*.conf" "deploy/*.sh" "docker-compose.preview.yml" --debounce 300 -c "\"${script_path}\" reload"
  watch_pid=$spawned_pid

  status=0
  run_docker_compose_foreground "up --force-recreate --remove-orphans" || status=$?
  return "$status"
}

run_full_preview() {
  build_pid=""

  full_cleanup() {
    if [ -n "$build_pid" ]; then
      terminate_process_group "$build_pid"
    fi
  }

  on_full_signal() {
    trap - INT TERM EXIT
    full_cleanup
    exit 130
  }

  trap on_full_signal INT TERM
  trap full_cleanup EXIT

  spawned_pid=""
  spawn_in_process_group "${DIR}/build.sh" watch
  build_pid=$spawned_pid

  status=0
  PREVIEW_PARENT_MODE=full "$script_path" nginx || status=$?
  return "$status"
}

mode="${1:-full}"

case "$mode" in
  reload)
    reload_nginx
    ;;
  nginx)
    run_nginx_preview
    ;;
  full)
    run_full_preview
    ;;
  *)
    echo "Usage: $0 [reload|nginx]" >&2
    exit 1
    ;;
esac
