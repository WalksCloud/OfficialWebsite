<template>
<section class="py-8 lg:py-18 scroll-mt-[50px] lg:scroll-mt-[80px]" id="partners">
	<div class="w-5/6 lg:w-3/4 mx-auto text-center">
		<h2 class="text-2xl lg:text-4xl mb-0 lg:mb-6 font-bold">{{ $t('partners') }}</h2>
		<div class="mt-4 my-8 lg:mt-6 lg:my-16 text-gray-600 dark:text-gray-400">
			<p v-bind:key="row" v-for="row in $tm('partners-section.intro')">{{ row }}</p>
		</div>
		<div class="grid lg:grid-cols-3 gap-6 lg:gap-12">
			<div v-bind:key="row" v-for="row in $tm('partners-section.partners')">
				<img class="bg-white rounded-sm h-[50px] lg:h-[80px] m-auto" :src="row.image">
				<a v-if="row.url" :href="row.url" target="_blank" class="font-bold font-bold my-2 lg:my-4 inline-block" v-text="row.name"></a>
				<p v-else class="font-bold my-2 lg:my-4" text="row.name"></p>
				<p class="text-gray-600 dark:text-gray-400">{{ row.intro }}</p>
			</div>
		</div>
	</div>
</section>
</template>