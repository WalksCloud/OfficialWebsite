<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

let items = tm('about-section.questions-block.items')
items.forEach((row) => {
  row.showTooltip = false
});

const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth < 1024
})

const handleHover = (index) => {
  if (!isMobile.value) {
    items[index].showTooltip = true
  }
}
const handleLeave = (index) => {
  if (!isMobile.value) {
    items[index].showTooltip = false
  }
}
const handleClick = (index) => {
  if (isMobile.value) {
    items[index].showTooltip = !items[index].showTooltip
  }
}
</script>

<template>
<section id="about" class="pt-[53px] lg:pt-[82px]">
	<div class="home-bg h-[85vh] lg:h-screen relative">
		<div class="w-full absolute bottom-25 lg:bottom-5"><div class="w-5/6 lg:w-3/4 mx-auto text-center text-white shadow-dark">
			<h2 class="text-4xl mb-2 lg:text-5xl lg:mb-3 font-bold">{{ $t('about') }}</h2>
			<p class="text-xl lg:text-3xl">{{ $t('about-section.title') }} </p>
			<div class="my-4 mb-4 lg:my-6 lg:mb-10">
			  <p v-for="row in $tm('about-section.intro')">{{ row }}</p>
			</div>
			<!-- desktop -->
			<div class="hidden lg:grid grid-cols-3 gap-6 text-black text-shadow-none">
			  <div v-for="row in $tm('about-section.about-items')" class="bg-white rounded-sm shadow-md p-6 border border-gray-200">
			    <h3 class="text-xl font-bold mb-2">{{ row.title }}</h3>
			    <p>{{ row.content }}</p>
			  </div>
			</div>
		</div></div>
	</div>
	<!-- mobile -->
	<div class="lg:hidden w-5/6 mx-auto grid gap-4 relative mt-[-60px]">
	  <div v-for="row in $tm('about-section.about-items')" class="bg-white rounded-sm shadow p-4 border border-gray-200">
	    <h3 class="font-bold mb-1">{{ row.title }}</h3>
	    <p class="text-sm">{{ row.content }}</p>
	  </div>
	</div>

	<div class="py-8 lg:py-18"><div class="w-5/6 lg:w-3/4 mx-auto text-center">
		<p class="text-2xl lg:text-3xl font-bold">{{ $t('about-section.questions-block.title') }}</p>
		<p class="mt-2 mb-8">{{ $t('about-section.questions-block.intro') }}</p>
		<div class="grid lg:grid-cols-3 gap-4 lg:gap-6">
	    	<div v-for="(item, index) in items" @mouseenter="handleHover(index)" @mouseleave="handleLeave(index)" @click="handleClick(index)" class="rounded-sm shadow-md p-4 lg:p-6 border border-gray-200 relative" :class="[index % 2 === 0 ? 'bg-[#efefef] text-gray-700' : 'bg-white text-black']">
			  	<div class="text-left lg:text-center">
				  <div class="flex lg:block">
				  	<span class="icon-element material-symbols-outlined">{{ item.icon }}</span>
				    <p class="ms-2 lg:ms-0">{{ item.title }}</p>
				  </div>
				  <transition name="fade">
				  	<div v-if="item.showTooltip" class="p-4 flex flex-col justify-center absolute top-0 left-0 w-full h-full text-sm" :class="[index % 2 === 0 ? 'bg-[#efefef] text-gray-700' : 'bg-white text-black']">{{ item.content }}</div>
				  </transition>
				</div>
		 	</div>
		</div>

		<h2 class="lg:hidden text-2xl my-6 font-bold" v-html="t('about-section.services-block.mobile-title')"></h2>
		<h2 class="hidden lg:block text-4xl my-12 font-bold">{{ $t('about-section.services-block.desktop-title') }}</h2>
		<div class="mt-6 text-gray-600">
		    <p v-for="row in $tm('about-section.services-block.intro')">{{ row }}</p>
		    <p class="mt-4 lg:mt-6 font-bold">{{ $t('about-section.services-block.message') }}</p>
		</div>
	</div></div>
</section>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>