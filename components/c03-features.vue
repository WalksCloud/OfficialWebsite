<template>
  <section id="features" class="bg-grey">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="text-h3 font-weight-bold mb-3">{{ $t('featuresTitle') }}</h2>
      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto text-h6 font-weight-light mb-8"
        max-width="720"
      >
        <div
          v-for="(desc, i) in $t('featuresDesc').trim().split('\n')"
          :key="i"
        >
          {{ desc }}
        </div>
      </v-responsive>

      <h2 class="text-h5 font-weight-bold mb-3">
        {{ $t('featuresPriveded') }}
      </h2>
      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto text-h6 font-weight-light mb-8"
        max-width="720"
      >
        <div v-for="(desc, i) in $t('features').trim().split('\n')" :key="i">
          {{ desc }}
        </div>
      </v-responsive>

      <h2 class="text-h5 font-weight-bold mb-3">{{ $t('featured') }}</h2>
      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in $tm('featuredServices')"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card class="py-12 px-4" color="grey-lighten-2" flat>
            <v-theme-provider theme="dark">
              <div>
                <v-avatar color="blue-darken-2" size="88">
                  <v-icon size="36" :icon="$rt(icon)"></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase text-grey text-darken-1"
              v-text="$rt(title)"
            ></v-card-title>

            <v-card-text class="subtitle-1 text-grey text-darken-1" v-text="$rt(text)"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {}
</script>
