# Redirects

Redirects are declared in `config/redirects.yaml` with non-locale source and target paths:

```yaml
- from: /services/jamf/
  to: /services/mdm/
```

`scripts/generate-redirects.js` runs during `bun run build:ssg`. It expands each redirect for every locale listed in `config/site-info.yaml`, then writes `dist/.nginx-redirects.map`.

The generated map is included by `deploy/nginx.conf` and checked against `$uri` before static files are served. The nginx include uses a wildcard so the server can still start before the generated map exists. Both slash and non-slash source paths are generated, and query strings are preserved by nginx.

Locale-prefix stripping redirects, such as `/zh-tw/services/` to `/services/`, must return path-only `Location` values. Do not build those redirects with `$scheme` or `$http_host`; TLS termination or proxy scheme drift can otherwise emit an `http://` target for an HTTPS request and break browser precache fetches as mixed content.

The nginx server also disables absolute redirects and resolves route requests directly to `index.*.html` files instead of probing route directories first. This prevents nginx-generated trailing-slash redirects from using the origin-side `http` scheme when the public request was HTTPS through a proxy or Cloudflare.

Do not declare locale-prefixed redirects such as `/zh-tw/services/...` in `config/redirects.yaml`; those entries are generated automatically.
