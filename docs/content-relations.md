# Content Relations

`config/content-relations.yaml` is the single source of truth for case, service, FAQ, and tech relationships. Each top-level key is an absolute content slug, and each value may include:

- `services`: service slugs shown on the source article and used to surface the article from matching service and case pages.
- `faq`: FAQ slugs shown on the source article and surfaced from matching service and case pages.
- `tech`: related tech article slugs shown on the source article and used for inverse tech relationships.

Case entries should use their case slug as the top-level key. Tool-focused or educational tech articles should use their tech slug directly instead of being attached to an unrelated case.
