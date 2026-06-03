# Icon Usage

Inline icons in Vue components should use Iconify through `@iconify/vue` and the build-time local mirror.

## Component Pattern

Use static literal icon names so `scripts/generate-iconify-mirror.js` can detect them during the build:

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

- `Icon` receives the canonical Iconify name, such as `material-symbols:menu`.
- `data-icon` may keep the utility-style name, such as `i-material-symbols-menu`, for traceability and scanner visibility.
- Keep visual classes such as color, opacity, transition, transform, and animation on the wrapper element. `@iconify/vue` may replace classes on the generated SVG after icon data loads.
- Prefer static string literals over computed variables for one-off icons. This makes the source easier to review and keeps mirror scanning predictable.
- Do not use Material Symbols font ligatures such as `<span class="material-symbols-outlined">menu</span>`.
- Do not embed SVG path data in Vue components for ordinary UI icons; the local Iconify mirror should provide the icon data.

## Nuxt UI Components

When a Nuxt UI component exposes an `icon` prop, keep using the Nuxt UI `i-*` name:

```vue
<UBanner icon="i-lucide-languages" />
```

For local inline icons, prefer the `@iconify/vue` pattern above instead of importing Nuxt UI's internal `Icon.vue` wrapper directly.

## Local Mirror

The production build scans `src/`, `config/`, generated `dist` HTML, and Nuxt UI runtime files for Iconify names. Detected icon sets are downloaded into `dist/icons/iconify/`, and normal HTML pages receive a same-origin Iconify provider so runtime icon loading can use the local mirror.

If the build-time Iconify API request fails, the build remains successful and runtime icon loading falls back to the online Iconify API. Keep icon names static so the mirror can include them when network access is available during CI/CD.
