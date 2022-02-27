<template>
  <section id="about-us">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">{{ $t('aboutUS') }}</h2>
      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        <div v-for="(desc, i) in $t('aboutUSDesc').trim().split('\n')" :key="i">
          {{ desc }}
        </div>
      </v-responsive>

      <!--
      <v-avatar class="elevation-12 mb-12" size="128">
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
      </v-avatar>
      -->

      <div></div>

      <!--
      <v-btn color="grey" href="https://vuetifyjs.com" outlined large>
        <span class="grey--text text--darken-1 font-weight-bold">
          {{ $t('AboutUSMore') }}
        </span>
      </v-btn>
      -->
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {}
</script>
