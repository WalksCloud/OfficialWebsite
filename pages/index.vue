<template>
  <div>
    <c-01-hero :title="title" :subtitle="subtitle"></c-01-hero>
    <c-02-about-us></c-02-about-us>
    <!-- <c-03-features></c-03-features> -->
    <!-- <c-04-stats></c-04-stats> -->
    <!-- <c-05-blog></c-05-blog> -->
    <!-- <c-06-contact-us></c-06-contact-us> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('companyName'),
      subtitle: this.$t('companyNameSlogan'),
    }
  },
}
</script>
