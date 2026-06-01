<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { buildLocalizedPath } from '@/utils/contentIndex'

  const env = import.meta.env
  const { locale } = useI18n()

  const termsOfUsePath = computed(() =>
    buildLocalizedPath('/legal/terms-of-use', locale.value),
  )

  const privacyPolicyPath = computed(() =>
    buildLocalizedPath('/legal/privacy-policy', locale.value),
  )

  const buildYear = computed(() => {
    const rawBuildTime = String(env.buildTime || '')
    const yearMatch = rawBuildTime.match(/^(\d{4})/)
    if (yearMatch) return yearMatch[1]

    const parsedYear = new Date(rawBuildTime).getFullYear()
    return Number.isFinite(parsedYear) ? String(parsedYear) : String(new Date().getFullYear())
  })
</script>

<template>
	<footer class="text-center px-3 pb-3 lg:py-6 lg:px-0 text-sm lg:text-base">
    <p>
      © {{ buildYear }} — Walks Cloud Inc.
      <img class="inline-block dark:hidden align-bottom ms-2 h-5" alt="" src="/logo-wordmark-company.svg" />
      <img class="hidden dark:inline-block align-bottom ms-2 h-5" alt="" src="/logo-wordmark-company-white.svg" />
    </p>

    <a :href="$t('footer.facebook_url')" target="_blank" class="inline-block my-2 me-2">
      <font-awesome-icon :icon="['fab', 'square-facebook']" class="text-2xl text-gray-600 dark:text-gray-300" />
    </a>
    <a :href="$t('footer.linkedin_url')" target="_blank" class="inline-block my-2">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl text-gray-600 dark:text-gray-300" />
    </a>
    <p class="text-sm lg:leading-1">
      <span class="block lg:inline">
        <a href="https://github.com/WalksCloud/OfficialWebsite">GitHub Repo</a>
        (<a :href="`https://github.com/WalksCloud/OfficialWebsite/commit/` + env.buildHash">#{{env.buildHash}}</a> {{env.buildTime}})
      </span>
      <span class="hidden lg:inline"> | </span>
      <span class="block lg:inline">
        <RouterLink :to="termsOfUsePath">{{ $t('footer.term-of-use') }}</RouterLink>
        |
        <RouterLink :to="privacyPolicyPath">{{ $t('footer.privacy-policy') }}</RouterLink>
      </span>
    </p>
  </footer>
</template>
