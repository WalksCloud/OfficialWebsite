# Redirects

Redirects are declared once in `config/redirects.yaml`. Write them as non-locale source and target paths:

```yaml
- from: /services/jamf/
  to: /services/mdm/
```

Do not add locale-prefixed entries such as `/zh-tw/services/...` to this file. Locale variants are generated automatically.

## Build Output

`scripts/generate-redirects.js` runs during `bun run build:ssg`. It expands each redirect for every locale listed in `config/site-info.yaml`, then writes the nginx map to `dist/.nginx-redirects.map`.

Both slash and non-slash source paths are generated. Query strings are preserved by nginx.

## nginx Behavior

`deploy/nginx.conf` includes the generated map and checks it against `$uri` before static files are served. The include uses a wildcard so nginx can still start before the generated map exists.

The nginx server disables absolute redirects and resolves route requests directly to `index.*.html` files instead of probing route directories first. This prevents nginx-generated trailing-slash redirects from using the origin-side `http` scheme when the public request was HTTPS through a proxy or Cloudflare.

## Path-Only Locale Redirects

Locale-prefix stripping redirects, such as `/zh-tw/services/` to `/services/`, must return path-only `Location` values. Do not build those redirects with `$scheme` or `$http_host`.

This matters when TLS terminates before nginx. If nginx sees the origin-side request as `http`, an absolute redirect can emit an `http://` target for a public HTTPS request. Browsers then treat follow-up precache fetches as mixed content and the offline cache can fail.

Use relative path targets for these redirects so the browser keeps the original public scheme and host.
