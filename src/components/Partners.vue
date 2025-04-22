<template>
<section class="py-18 scroll-mt-[80px]" id="partners">
	<div class="w-3/4 mx-auto text-center">
		<h2 class="text-4xl mb-6 font-bold">{{ $t('partners') }}</h2>
		<div class="mt-6 my-16 text-gray-600">
		    <p v-for="row in $tm('partners-section.intro')">{{ row }}</p>
		</div>
		<div class="grid md:grid-cols-3 gap-12">
	    	<div v-for="row in $tm('partners-section.partners')">
	    		<img class="h-[80px] m-auto" :src="row.image">
			    <a v-if="row.url" :href="row.url" target="_blank" class="font-bold font-bold my-4 inline-block" v-text="row.name"></a>
			    <p v-else class="font-bold my-4" text="row.name"></p>
			    <p class="text-gray-600">{{ row.intro }}</p>
		  </div>
		</div>
	</div>
</section>
</template>