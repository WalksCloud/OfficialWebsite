<template>
  <v-app dark>
    <v-app-bar app height="100">
      <v-avatar class="mr-3" color="grey darken-5" size="70">
        <v-img contain max-height="100%" src="icon_gradual_512.svg"></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline companyname">
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} — {{ companyName }}
        <companyname-ch />
        <span style="font-size: 10px">
          <a href="https://github.com/WalksCloud/OfficialWebsite">GitHub</a> (<a
            :href="
              'https://github.com/WalksCloud/OfficialWebsite/commit/' +
              $config.buildHash
            "
            >#{{ $config.buildHash }}</a
          >
          {{ $config.buildTime }})
        </span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import 'assets/main.scss'

export default {
  data() {
    return {
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
  },
}
</script>

<style lang="stylus" scoped>
.container.container--fluid
  padding 0
</style>
