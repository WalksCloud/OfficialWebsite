# Breadcrumbs

Visible page breadcrumbs and JSON-LD breadcrumb metadata share `src/utils/breadcrumbs.js`.

- Breadcrumb labels come from page titles in `config/pages.yaml` and generated content page data.
- The home breadcrumb uses an icon-only link in the visible UI, while metadata keeps the localized `about-section.title` value when available.
- `PageBreadcrumb.vue` renders `UBreadcrumb` with a custom `/` separator and hides itself on the home page.
- Parent breadcrumb labels render at natural width and are not truncated.
- The current page label uses YAML-configured marquee rendering from `config/breadcrumbs.yaml` only when runtime measurement shows the title cannot fit the available space.
- Overflowing current labels use an expanded edge fade mask while the text scrolls; the left fade sits outside the title content box at `leftFadeScale` of the configured fade width so it does not collide with the separator.
- Pages that render breadcrumbs use a smaller top offset and remove the direct breadcrumb-to-title wrapper gap, while mobile breadcrumb typography and link padding stay compact.
- The current page item is rendered as active text without disabled cursor styling.
- Parent items use relative links in the visible UI. Non-prefixed routes link through non-prefixed targets, while prefixed routes keep the same locale prefix.
- JSON-LD keeps absolute canonical URLs.
