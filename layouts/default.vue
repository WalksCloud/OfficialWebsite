<template>
  <v-app theme="dark">
    <v-app-bar name="app-bar" app height="100" class="px-4 py-1">
      <v-avatar color="grey-darken-5" size="70">
        <v-img contain max-height="100%" src="icon_gradual_512.svg"></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black text-h5 companyname">
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <v-footer name="app-footer" class="justify-center" color="#292929" height="100">
      <div
        class="text-h6 font-weight-light text-grey text-lighten-1 text-center"
      >
        &copy; {{ nowYear }} — {{ companyName }}
        <companyname-ch />
        <div style="font-size: 10px">
          <a href="https://github.com/WalksCloud/OfficialWebsite">GitHub</a> (<a :href="`https://github.com/WalksCloud/OfficialWebsite/commit/` + $config.buildHash">#{{ $config.buildHash }}</a>
          {{ $config.buildTime }}) | <a href="//auth.select/term-of-use">Term of Use</a> | <a href="//auth.select/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import 'assets/main.scss'

export default {
  data() {
    return {
      nowYear: (new Date().getFullYear()),
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
      ],
      miniVariant: false,
      title: 'WalksCloud',
      companyName: 'Walks Cloud Inc.',
    }
  }
}
</script>

<style lang="scss" scoped>
.v-container.v-container--fluid {
  padding: 0;
}
</style>
