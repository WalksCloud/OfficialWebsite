<script setup>
let setLocale = (event) => {
  localStorage.setItem("locale", event.target.value)
}

// todo: navbar active style, 滾動 effect
</script>

<template>
	<nav class="sticky top-0 z-100 bg-white px-6 py-4 flex justify-between items-center shadow">
    <div>
      <img class="rounded-[50%] w-[50px] inline-block" src="/logo-gradual.svg">
      <h2 class="ms-2 inline-block align-middle font-barlow font-bold text-2xl text-primary">WalksCloud</h2>
    </div>
    <div class="space-x-4">
      <a href="#about-section" class="">{{ $t('about') }}</a>
      <a href="#services-section" class="">{{ $t('services') }}</a>
      <a href="#team-section" class="">{{ $t('team') }}</a>
      <a href="#partners-section" class="">{{ $t('partners') }}</a>
      <a href="#contact-section" class="">{{ $t('contact') }}</a>

      <div class="ms-2 locale-changer inline-block">
				<select v-model="$i18n.locale" @change="setLocale($event)">
					<option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ $t(`locales.${locale}`) }}</option>
				</select>
			</div>
    </div>
  </nav>
</template>