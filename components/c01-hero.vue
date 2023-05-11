<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + getLayoutItem('app-bar').top + 'px)'"
        src="img/hero-back.jpg"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <span
                  :class="[
                    smAndDown.value ? 'display-3' : 'display-4',
                    'companyname',
                  ]"
                  class="font-weight-black"
                >
                  {{ title }}
                </span>
                <br />
                <span
                  :class="[
                    smAndDown.value ? 'display-1' : 'display-2',
                  ]"
                  class="font-weight-light"
                >
                  {{ subtitle }}
                </span>
              </v-col>
              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#about-us')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script>
import { useLayout, useDisplay } from 'vuetify'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  setup() {
    const { getLayoutItem } = useLayout()
    const { smAndDown } = useDisplay()
    return {
      getLayoutItem,
      smAndDown,
    }
  },
}
</script>
