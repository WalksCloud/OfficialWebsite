<template>
  <section class="section-anchor-bottom pt-8 lg:pt-18 pb-24 lg:pb-40" id="contact">
    <div class="w-5/6 lg:w-3/4 mx-auto text-center">
      <div class="lg:w-2/3 mx-auto text-left">
        <iframe :src="$t('contact-section.form-url')"></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 1150px;
}
</style>
