<template>
<section class="py-18 dark-bg" id="team-section">
	<div class="w-3/4 mx-auto text-center">
		<h2 class="text-4xl mb-6 font-bold">{{ $t('team') }}</h2>
		<div class="mt-6 my-16 text-gray-600">
		    <p v-for="row in $tm('team-section.intro')">{{ row }}</p>
		</div>
		<div class="grid md:grid-cols-3 gap-12">
	    	<div v-for="row in $tm('team-section.members')">
	    		<img class="w-[120px] rounded-[50%] m-auto" :src="row.image">
			    <p class="font-bold my-4">{{ row.name }}</p>
			    <p class="text-gray-600">{{ row.intro }}</p>
			    <a v-if="row.website_url" class="mt-6 text-gray-600 text-sm inline-block" :href="row.website_url" target="_blank">{{ $t('personal_website') }}</a>
		  </div>
		</div>
	</div>
</section>
</template>