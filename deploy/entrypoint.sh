#!/bin/sh
set -eu

main_conf="${NGINX_SYSLOG_MAIN_CONF:-/etc/nginx/syslog-main.conf}"
http_conf="${NGINX_SYSLOG_HTTP_CONF:-/etc/nginx/syslog-http.conf}"
real_ip_conf="${NGINX_REAL_IP_CONF:-/etc/nginx/real-ip.conf}"

mkdir -p "$(dirname "$main_conf")" "$(dirname "$http_conf")" "$(dirname "$real_ip_conf")"

echo "Generating dynamic config for syslog ..."

if [ -n "${NGINX_SYSLOG_SERVER:-}" ]; then
  cat >"$main_conf" <<EOF
error_log syslog:server=${NGINX_SYSLOG_SERVER},tag=wc_official info;
EOF
  cat >"$http_conf" <<EOF
access_log syslog:server=${NGINX_SYSLOG_SERVER},facility=local7,tag=wc_official,severity=info https;
EOF
else
  : >"$main_conf"
  : >"$http_conf"
fi

echo "===== start ${main_conf} ====="
cat "$main_conf"
echo "===== end ${main_conf} ====="
echo "===== start ${http_conf} ====="
cat "$http_conf"
echo "===== end ${http_conf} ====="

echo "Generating dynamic config for real_ip module ..."

: >"$real_ip_conf"
if [ -n "${NGINX_SET_REAL_IP_FROM:-}" ]; then
  printf 'real_ip_header CF-Connecting-IP;\n' >>"$real_ip_conf"
  printf '%s' "$NGINX_SET_REAL_IP_FROM" | tr ',;' '\n\n' | while IFS= read -r raw_entry || [ -n "$raw_entry" ]; do
    entry=$(printf '%s' "$raw_entry" | sed 's/^[[:space:]]*//; s/[[:space:]]*$//')
    if [ -n "$entry" ]; then
      printf 'set_real_ip_from %s;\n' "$entry" >>"$real_ip_conf"
    fi
  done
fi

echo "===== start ${real_ip_conf} ====="
cat "$real_ip_conf"
echo "===== end ${real_ip_conf} ====="

if [ "$#" -eq 0 ]; then
  set -- nginx -g 'daemon off;'
fi

echo "Executing '$@'"

exec "$@"
