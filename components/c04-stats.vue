<template>
  <section id="stats">
    <v-parallax
      :height="smAndDown.value ? 1200 : 900"
      src="img/features.jpg"
    >
      <div class="py-12" />

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
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
          class="mx-auto title font-weight-light mb-8"
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

      <v-container fill-height>
        <v-row class="mx-auto">
          <v-col
            v-for="(member, i) in $tm('teamMembers')"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-12 px-4 member"
              color="text-center grey lighten-2"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    color="primary"
                    size="88"
                  >
                    <v-img
                      v-if="$rt(member.avatar)"
                      alt="Avatar"
                      :src="$rt(member.avatar)"
                    ></v-img>
                    <v-icon
                      v-else
                      large
                      class="mdi mdi-account-circle"
                    ></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black grey--text text--darken-1"
                v-text="$rt(member.name)"
              />

              <v-card-text
                class="text-center subtitle-1 grey--text text--darken-1"
                v-text="$rt(member.desc)"
              />
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
