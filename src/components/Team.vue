<template>
<section class="py-8 lg:py-18 bg-[#efefef] scroll-mt-[50px] lg:scroll-mt-[80px]" id="team">
	<div class="w-5/6 lg:w-3/4 mx-auto text-center">
		<h2 class="text-2xl lg:text-4xl mb-0 lg:mb-6 font-bold">{{ $t('team') }}</h2>
		<div class="mt-4 my-8 lg:mt-6 lg:my-16 text-gray-600">
		    <p v-for="row in $tm('team-section.intro')">{{ row }}</p>
		</div>
		<div class="grid lg:grid-cols-3 gap-6 lg:gap-12">
	    	<div class="flex lg:block" v-for="row in $tm('team-section.members')">
	    		<img class="w-24 h-24 lg:w-[120px] lg:h-auto rounded-[50%] me-6 lg:m-auto" :src="row.image">
			    <div class="text-left lg:text-center">
			    	<p class="font-bold my-2 lg:my-4">{{ row.name }}</p>
			    	<p class="text-gray-600">{{ row.intro }}</p>
			    	<a v-if="row.website_url" class="mt-2 lg:mt-6 text-gray-600 text-sm inline-block" :href="row.website_url" target="_blank">{{ $t('personal_website') }}</a>
			    </div>
		  </div>
		</div>
	</div>
</section>
</template>