# Icon Usage

Use Iconify for inline UI icons in Vue components. Do not use Material Symbols font ligatures or embed raw SVG path data for ordinary interface icons.

The build can mirror Iconify JSON into `dist/icons/iconify/`, so static icon names are important. If icon names are generated dynamically, the mirror scanner may miss them and the runtime will need the public Iconify API.

## Recommended Component Pattern

Use `@iconify/vue` directly and keep icon names as static strings:

```vue
<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <span data-icon="i-material-symbols-menu" aria-hidden="true" class="inline-flex text-2xl">
    <Icon icon="material-symbols:menu" width="1em" height="1em" />
  </span>
</template>
```

`Icon` receives the canonical Iconify name, such as `material-symbols:menu`. The optional `data-icon` attribute may keep the utility-style name, such as `i-material-symbols-menu`, for traceability and scanner visibility.

Keep visual classes on the wrapper element. Color, opacity, transition, transform, and animation classes belong on the wrapper because `@iconify/vue` may replace classes on the generated SVG after icon data loads.

## Authoring Rules

Prefer static string literals for one-off icons. Static names are easier to review and easier for the build-time mirror scanner to detect.

Avoid these patterns:

- Material Symbols ligatures, such as `<span class="material-symbols-outlined">menu</span>`.
- Raw embedded SVG path data in Vue components for normal UI icons.
- Computed icon names when the icon is known at authoring time.

## Nuxt UI Components

When a Nuxt UI component exposes an `icon` prop, keep using the Nuxt UI `i-*` icon name:

```vue
<UBanner icon="i-lucide-languages" />
```

For local inline icons, prefer the `@iconify/vue` pattern above instead of importing Nuxt UI's internal icon wrapper directly.

## Local Mirror Behavior

The production build scans `src/`, `config/`, generated `dist` HTML, and Nuxt UI runtime files for Iconify names. Detected icon sets are downloaded into `dist/icons/iconify/`, and normal HTML pages receive a same-origin Iconify provider so runtime icon loading can use the local mirror.

If the build-time Iconify API request fails, the build remains successful. The runtime then falls back to the online Iconify API. Keep icon names static so the mirror can include them whenever network access is available during CI/CD.
