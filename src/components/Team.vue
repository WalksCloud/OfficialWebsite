<template>
<section class="py-8 lg:py-18 bg-[#efefef] scroll-mt-[50px] lg:scroll-mt-[80px]" id="team">
	<div class="w-5/6 lg:w-3/4 mx-auto text-center">
		<h2 class="text-2xl lg:text-4xl mb-0 lg:mb-6 font-bold">{{ $t('team') }}</h2>
		<div class="mt-4 my-8 lg:mt-6 lg:my-16 text-gray-600">
		    <p v-for="row in $tm('team-section.intro')">{{ row }}</p>
		</div>
		<div class="grid lg:grid-cols-3 gap-6 lg:gap-12">
	    	<div class="flex lg:block" v-for="row in $tm('team-section.members')">
	    		<div class="flex-none w-[96px] lg:w-[120px] me-6 lg:m-auto">
	    			<img class="rounded-[50%]" :src="row.image">
	    			<a v-if="row.website_url" class="text-gray-600 text-sm inline-block whitespace-nowrap mt-2 lg:hidden" :href="row.website_url" target="_blank">{{ $t('personal_website') }}</a>
	    		</div>

			    <div class="text-left lg:text-center">
			    	<p class="font-bold my-2 lg:my-4">
			    		{{ row.name }}
			    		<a v-if="row.website_url" :href="row.website_url" target="_blank" class="ms-1"><span class="text-gray-600 align-top material-symbols-outlined">public</span></a>
			    	</p>
			    	<p class="text-gray-600">{{ row.intro }}</p>
			    </div>
		  </div>
		</div>
	</div>
</section>
</template>