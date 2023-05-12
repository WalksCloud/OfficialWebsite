<template>
  <section id="stats">
    <v-parallax
      :height="smAndDown ? 1200 : 900"
      src="img/features.jpg"
    >
      <div class="py-12" />

      <v-container class="text-center">
        <h2 class="text-h3 font-weight-bold mb-3">
          {{ $t('aboutTeam') }}
        </h2>
        <v-responsive
          class="mx-auto mb-8"
          width="56"
        >
          <v-divider class="mb-1" />
          <v-divider />
        </v-responsive>

        <v-responsive
          class="mx-auto text-h6 font-weight-light mb-8"
          max-width="720"
        >
          <div
            v-for="(desc, i) in $t('aboutDesc').trim().split('\n')"
            :key="i"
          >
            {{ desc }}
          </div>
        </v-responsive>
      </v-container>

      <v-container>
        <v-row class="mx-auto">
          <v-col
            v-for="(member, i) in $tm('teamMembers')"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-12 px-4 member text-center"
              color="grey-lighten-2"
              flat
            >
              <v-theme-provider theme="dark">
                <div>
                  <v-avatar
                    color="blue-darken-2"
                    size="88"
                  >
                    <v-img
                      v-if="$rt(member.avatar)"
                      alt="Avatar"
                      :src="$rt(member.avatar)"
                    ></v-img>
                    <v-icon
                      v-else
                      class="mdi mdi-account-circle"
                      size="36"
                    ></v-icon>
                  </v-avatar>
                </div>

                <v-card-title
                  class="justify-center font-weight-black text-grey-darken-1"
                  v-text="$rt(member.name)"
                />

                <v-card-text
                  class="text-center subtitle-1 text-grey-darken-1"
                  v-text="$rt(member.desc)"
                />
              </v-theme-provider>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12" />
    </v-parallax>
  </section>
</template>

<style lang="scss">
.member {
  backdrop-filter: blur(10px);
  background-color: #e0e0e0aa !important;
}
</style>

<script>
import { useLayout, useDisplay } from 'vuetify'

export default {
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
