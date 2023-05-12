<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + getLayoutItem('app-bar').top + 'px)'"
        src="img/hero-back.jpg"
      >
        <v-theme-provider theme="dark">
          <v-container class="fill-height">
            <v-row align="center" class="text-white mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <span
                  :class="[
                    smAndDown ? 'text-h3' : 'text-h2',
                    'companyname',
                  ]"
                  class="font-weight-black"
                >
                  {{ title }}
                </span>
                <br />
                <span
                  :class="[
                    smAndDown ? 'text-h5' : 'text-h4',
                  ]"
                  class="font-weight-light"
                >
                  {{ subtitle }}
                </span>
              </v-col>
              <v-btn
                class="align-self-end"
                variant="outlined"
                rounded="circle"
                size="56"
                @click="goto('about-us')"
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
    const goto = (to) => {
      document.getElementById(to).scrollIntoView({behavior: 'smooth'})
    }
    return {
      goto,
      getLayoutItem,
      smAndDown,
    }
  },
}
</script>
