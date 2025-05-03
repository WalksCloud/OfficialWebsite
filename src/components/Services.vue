<template>
  <section id="services" class="scroll-mt-[50px] lg:scroll-mt-[80px]">
    <div class="bg-[#efefef] dark:bg-[#4e535d] py-8 lg:py-18">
      <div class="w-5/6 lg:w-3/4 mx-auto text-center">
        <h2 class="text-2xl mb-6 lg:text-4xl lg:mb-12 font-bold">{{ $t('services') }}</h2>
        <div class="grid lg:grid-cols-3 gap-6 lg:gap-12">
          <div v-bind:key="row" v-for="row in $tm('services-section.services')" class="text-left">
            <h3 class="text-xl lg:font-bold mb-2 lg:mb-4 block-title">{{ row.title }}</h3>
            <div v-bind:key="item" v-for="item in row.items" class="mb-2 lg:mb-4">
              <p class="font-bold">{{ item.title }}</p>
              <p class="text-gray-600 dark:text-gray-300">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-[#222831] py-8 lg:py-18">
      <div class="w-5/6 lg:w-3/4 mx-auto text-center">
        <h2 class="text-2xl mb-6 lg:text-4xl lg:mb-12 font-bold">{{ $t('services_flows') }}</h2>
        <div class="lg:w-3/4 mx-auto">
          <div class="grid lg:grid-cols-4 gap-4">
            <div
              v-bind:key="content" v-for="content in $tm('services-section.flows')"
              class="lg:aspect-square border flex flex-col justify-center rounded-md lg:rounded-[50%] shadow lg:shadow-md p-4 lg:p-6 border-gray-200 dark:bg-[#4e535d] dark:border-none">
              <p class="font-bold">{{ $rt(content.title) }}</p>
            <p class="text-gray-600 dark:text-gray-400">{{ $rt(content.content) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
