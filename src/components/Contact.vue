<script setup>
import { useAlertStore } from '@/stores/alert'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

let requirements = []
tm('services-section.services').forEach((row) => {
  requirements.push(row.title)
});
requirements.push(t('services-section.else'))

const formData = reactive({
  "company_name": "",
  "company_number": "",
  "name": "",
  "email": "",
  "phone": "",
  "requirements": [],
  "terms": ""
})

const v$ = useVuelidate({
  company_name: { required },
  company_number: {},
  name: { required },
  email: { required, email },
  phone: {},
  requirements: { required },
  terms: { required }
}, formData)

const submit = async () => {
  useAlertStore().showLoading()
  setTimeout(() => {
    useAlertStore().hideLoading()
    useAlertStore().message(t('success'), t('sent-successful'), true)
  }, 1000)

  v$.value.$validate();
  if (!v$.value.$error) {
    // useAlertStore().showLoading()
    // await send(formData).then( () => {
    //	 useAlertStore().message(t('success'), t('sent-successful'))
    //	 // reset formData
    //	 for (var key in formData) {
    //		 formData[key] = (typeof key === Array) ? [] : ''
    //	 }
    // }).catch( error => {
    //	 useAlertStore().message(t('failed'), t('sent-failed'))
    // }).finally( () => {
    //	 useAlertStore().hideLoading()
    //	 v$.value.$reset();
    // });
  }
}

</script>

<template>
  <section class="py-8 lg:py-18 scroll-mt-[50px] lg:scroll-mt-[80px]" id="contact">
    <div class="w-5/6 lg:w-3/4 mx-auto text-center">
      <!--
      <h2 class="text-2xl lg:text-4xl mb-0 lg:mb-6 font-bold">{{ $t('contact') }}</h2>
      <div class="mt-4 my-8 lg:mt-6 lg:my-16 text-gray-600 dark:text-gray-400">
        <p v-bind:key="row" v-for="row in $tm('contact-section.intro')">{{ row }}</p>
      </div>
      -->

      <div class="lg:w-2/3 mx-auto text-left">
        <iframe :src="$t('contact-section.form-url')"></iframe>
        <!--
        <div class="mb-3 lg:mb-6">
          <label class="text-gray-600 dark:text-gray-400">{{ $t('form.company_name') }} *</label>
          <div class="mt-2" :class="{ 'has-validation is-invalid': v$.company_name.$errors.length, 'is-valid': !v$.company_name.$errors.length && formData.company_name }">

            <input v-model.trim="formData.company_name" required :placeholder="$t('form.enter', { field: $t('form.company_name') })" type="text"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-[#4e535d] dark:text-white dark:outline-gray-600">

            <div class="text-red-600 mt-2 text-end text-sm" v-for="error of v$.company_name.$errors" :key="error.$uid">
              <p v-if="error.$validator === 'required'">{{ $t('error.required') }}</p>
            </div>
          </div>
        </div>
        <div class="mb-3 lg:mb-6">
          <label class="text-gray-600 dark:text-gray-400">{{ $t('form.company_number') }}</label>
          <div class="mt-2" :class="{ 'has-validation is-invalid': v$.company_number.$errors.length, 'is-valid': !v$.company_number.$errors.length && formData.company_number }">

            <input v-model.trim="formData.company_number" :placeholder="$t('form.enter', { field: $t('form.company_number') })" type="text"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-[#4e535d] dark:text-white dark:outline-gray-600">

            <div class="text-red-600 mt-2 text-end text-sm" v-for="error of v$.company_number.$errors" :key="error.$uid">
              <p v-if="error.$validator === 'required'">{{ $t('error.required') }}</p>
            </div>
          </div>
        </div>
        <div class="mb-3 lg:mb-6">
          <label class="text-gray-600 dark:text-gray-400">{{ $t('form.name') }} *</label>
          <div class="mt-2" :class="{ 'has-validation is-invalid': v$.name.$errors.length, 'is-valid': !v$.name.$errors.length && formData.name }">

            <input v-model.trim="formData.name" required :placeholder="$t('form.enter', { field: $t('form.name') })" type="text"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-[#4e535d] dark:text-white dark:outline-gray-600">

            <div class="text-red-600 mt-2 text-end text-sm" v-for="error of v$.name.$errors" :key="error.$uid">
              <p v-if="error.$validator === 'required'">{{ $t('error.required') }}</p>
            </div>
          </div>
        </div>
        <div class="mb-3 lg:mb-6">
          <label class="text-gray-600 dark:text-gray-400">{{ $t('form.email') }} *</label>
          <div class="mt-2" :class="{ 'has-validation is-invalid': v$.email.$errors.length, 'is-valid': !v$.email.$errors.length && formData.email }">

            <input v-model.trim="formData.email" required :placeholder="$t('form.enter', { field: $t('form.email') })" type="text"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-[#4e535d] dark:text-white dark:outline-gray-600">

            <div class="text-red-600 mt-2 text-end text-sm" v-for="error of v$.email.$errors" :key="error.$uid">
              <p v-if="error.$validator === 'required'">{{ $t('error.required') }}</p>
              <p v-if="error.$validator === 'email'">{{ $t('error.email') }}</p>
            </div>
          </div>
        </div>
        <div class="mb-3 lg:mb-6">
          <label class="text-gray-600 dark:text-gray-400">{{ $t('form.phone') }}</label>
          <div class="mt-2" :class="{ 'has-validation is-invalid': v$.phone.$errors.length, 'is-valid': !v$.phone.$errors.length && formData.phone }">

            <input v-model.trim="formData.phone" :placeholder="$t('form.enter', { field: $t('form.phone') })" type="text"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-[#4e535d] dark:text-white dark:outline-gray-600">

            <div class="text-red-600 mt-2 text-end text-sm" v-for="error of v$.phone.$errors" :key="error.$uid">
              <p v-if="error.$validator === 'required'">{{ $t('error.required') }}</p>
            </div>
          </div>
        </div>
        <div class="mb-3 lg:mb-6">
          <label class="text-gray-600 dark:text-gray-400">{{ $t('form.requirements') }}</label>
          <div class="mt-2" :class="{ 'has-validation is-invalid': v$.requirements.$errors.length, 'is-valid': !v$.requirements.$errors.length && formData.requirements }">
            <div class="flex flex-wrap">
              <div v-bind:key="index" v-for="(value, index) in requirements" class="flex items-center me-4 my-2">
                <input :id="`requirements-checkbox-${index}`" v-model="formData.requirements" type="checkbox" :value="value" class="w-4 h-4 peer">
                <label :for="`requirements-checkbox-${index}`" class="ms-2 text-gray-600 dark:text-gray-400 whitespace-nowrap peer-checked:text-primary" v-text="value"></label>
              </div>
            </div>
            <div class="text-red-600 mt-2 text-end text-sm" v-for="error of v$.requirements.$errors" :key="error.$uid">
              <p v-if="error.$validator === 'required'">{{ $t('error.required') }}</p>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <label class="text-gray-600 dark:text-gray-400">{{ $t('form.terms') }}</label>
          <div class="mt-2" :class="{ 'has-validation is-invalid': v$.terms.$errors.length, 'is-valid': !v$.terms.$errors.length && formData.terms }">
            <div class="flex items-center me-4 my-2">
              <input id="terms-checkbox" v-model="formData.terms" type="checkbox" value="1" class="w-4 h-4 peer">
              <label for="terms-checkbox" class="ms-2 text-gray-600 dark:text-gray-400 whitespace-nowrap peer-checked:text-primary">我同意</label>
            </div>
            <div class="text-red-600 mt-2 text-end text-sm" v-for="error of v$.terms.$errors" :key="error.$uid">
              <p v-if="error.$validator === 'required'">{{ $t('error.required') }}</p>
            </div>
          </div>
        </div>
        <div class="text-center lg:float-right">
          <button @click="submit()" type="button"
            class="text-white bg-primary border-1 hover:border-primary hover:bg-white hover:text-primary dark:border-transparent dark:hover:bg-[#222831] rounded-lg text-sm px-3 lg:px-5 py-1.5 lg:py-2.5">{{
              $t('form.submit') }}</button>
        </div>
        -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 1150px;
}
</style>
