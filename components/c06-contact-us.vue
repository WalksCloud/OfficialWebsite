<template>
  <v-sheet id="contact-us" color="#333333" dark tag="section" tile>
    <div class="py-12"/>

    <!-- <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">{{ $t('contactUS') }}</h2>
      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"/>
        <v-divider/>
      </v-responsive>

      <v-theme-provider light>
        <v-row>
          <v-col cols="12">
            <v-text-field dark flat v-model="companyName" v-bind:label="$t('contactCompanyName')" outlined/>
          </v-col>

          <v-col cols="12">
            <v-text-field dark flat v-model="name" v-bind:label="$t('contactName')" outlined/>
          </v-col>

          <v-col cols="12">
            <v-text-field dark flat v-model="email" v-bind:label="$t('contactEmail')" outlined/>
          </v-col>

          <v-col cols="12">
            <v-text-field dark flat v-model="phone" v-bind:label="$t('contactPhone')" outlined/>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="4">
                {{ $t('contactRequirements') }}
              </v-col>
              <v-col cols="8">
                <div
                  v-for="svc in $t('contactServices')"
                  :key="svc.id"
                >
                  <v-switch
                    v-model="svc.selected"
                    :label="svc.name"
                    :value="svc.id"
                    color="primary"
                    hide-details
                    dark
                  />
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col class="mx-auto" cols="auto">
            <v-btn color="accent" x-large @click="submit($t('contactServices'))">Submit</v-btn>
          </v-col>
        </v-row>
      </v-theme-provider>
    </v-container> -->

    <div class="py-12"/>
  </v-sheet>
</template>

<script>
export default {
  data: () => {
    return {
      companyName: '',
      name: '',
      email: '',
      phone: '',
    }
  },
  methods: {
    submit(cs) {
      const payload = {
        companyName: this.companyName,
        name: this.name,
        email: this.email,
        phone: this.phone,
        services: cs.map(c => c.selected).filter(c => c),
      }
      // console.log(payload)
    },
  },
}
</script>
