<script setup>
  const env = import.meta.env;
</script>

<template>
	<footer class="text-center px-3 pb-3 lg:py-6 lg:px-0 text-sm lg:text-base">
    <p>
      © 2025 — Walks Cloud Inc. 
      <img class="inline-block dark:hidden align-bottom ms-2 h-[20px]" src="/logo-wordmark-company.svg" />
      <img class="hidden dark:inline-block align-bottom ms-2 h-[20px] " src="/logo-wordmark-company-white.svg" />
    </p>

    <a :href="$t('footer.facebook_url')" target="_black" class="inline-block my-2 me-2">
      <font-awesome-icon :icon="['fab', 'square-facebook']" class="text-2xl text-gray-600 dark:text-gray-300" />
    </a>
    <a :href="$t('footer.linkedin_url')" target="_black" class="inline-block my-2">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl text-gray-600 dark:text-gray-300" />
    </a>
    <p class="text-sm leading-1">
      <a href="https://github.com/WalksCloud/OfficialWebsite">GitHub Repo</a>
			(<a :href="`https://github.com/WalksCloud/OfficialWebsite/commit/` + env.buildHash">#{{env.buildHash}}</a> {{env.buildTime}}) | 
      <a :href="$t('footer.term-of-use_url')" target="_blank">{{ $t('footer.term-of-use') }}</a> | 
      <a :href="$t('footer.privacy-policy_url')" target="_blank">{{ $t('footer.privacy-policy') }}</a>
    </p>
  </footer>
</template>