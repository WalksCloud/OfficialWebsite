# Breadcrumbs

Breadcrumbs serve two audiences at the same time: readers use them to understand where a page sits in the site, and search engines use the same structure through JSON-LD metadata. Both paths are built from `src/utils/breadcrumbs.js`, so visible navigation and structured data stay aligned.

## Label Sources

Static page labels come from `config/pages.yaml`. Content page labels come from the generated content page data, so article titles can be reused without maintaining a second label list.

The home item is intentionally different between the UI and metadata. In the visible breadcrumb, home is shown as an icon-only link to keep the row compact. In JSON-LD, the home item keeps a readable localized name from `about-section.title` when that translation is available.

## Visible Breadcrumb Behavior

`src/components/PageBreadcrumb.vue` renders Nuxt UI `UBreadcrumb` with a custom `/` separator. The component hides itself on the home page because the home page does not need a breadcrumb trail.

Parent breadcrumb items are normal links and always render at their natural width. They must not be truncated because they provide the stable path context. The current page item is rendered as active text, but it should not use disabled cursor styling; it still needs to feel like normal page text rather than a blocked control.

The visible links are relative links. If the current route is non-prefixed, parent links stay non-prefixed. If the current route is locale-prefixed, parent links keep that same locale prefix. JSON-LD does not follow this UI rule; metadata always uses absolute canonical URLs.

## Long Current Titles

Only the current page title is allowed to scroll. Runtime measurement checks whether the title fits in the available width. If it already fits, the full title is shown without truncation or marquee behavior.

When the current title does overflow, the marquee settings come from `config/breadcrumbs.yaml`. The edge fade is also configured there. The left fade sits slightly outside the title content box, using `leftFadeScale`, so the fade does not collide with the separator.

## Page Spacing

Pages that show breadcrumbs use a smaller top offset and do not add an extra wrapper gap between the breadcrumb and the page title. Mobile breadcrumb typography and link padding stay compact so long titles can still fit on one row before marquee behavior starts.

## When To Update This

Update `config/pages.yaml` or the content title first when a breadcrumb label is wrong. Update `config/breadcrumbs.yaml` when the marquee timing, gap, or fade behavior needs tuning. Change `PageBreadcrumb.vue` only when the rendered UI structure itself needs to change.
