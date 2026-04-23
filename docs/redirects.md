# Redirects

Redirects are declared in `config/redirects.yaml` with non-locale source and target paths:

```yaml
- from: /services/jamf/
  to: /services/mdm/
```

`scripts/generate-redirects.js` runs during `bun run build:ssg`. It expands each redirect for every locale listed in `config/site-info.yaml`, then writes `dist/.nginx-redirects.map`.

The generated map is included by `deploy/nginx.conf` and checked against `$uri` before static files are served. The nginx include uses a wildcard so the server can still start before the generated map exists. Both slash and non-slash source paths are generated, and query strings are preserved by nginx.

Do not declare locale-prefixed redirects such as `/zh-tw/services/...` in `config/redirects.yaml`; those entries are generated automatically.
