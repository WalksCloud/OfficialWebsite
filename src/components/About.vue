<template>
<section id="about-section">
	<div class="home-bg h-screen relative">
		<div class="absolute bottom-20"><div class="w-3/4 mx-auto text-center">
			<h2 class="text-4xl mb-3 font-bold text-white">{{ $t('about') }}</h2>
			<p class="text-2xl text-white">{{ $t('about-section.title') }} </p>
			<div class="my-6 mb-10 text-white">
			    <p v-for="row in $tm('about-section.intro')">{{ row }}</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
			  <div v-for="row in $tm('about-section.about-items')" class="bg-white rounded-sm shadow-md p-6 border border-gray-200">
			    <h3 class="text-xl font-bold mb-2">{{ row.title }}</h3>
			    <p>{{ row.content }}</p>
			  </div>
			</div>
		</div></div>
	</div>
	
	<div class="py-18"><div class="w-3/4 mx-auto text-center">
		<p class="text-3xl font-bold">{{ $t('about-section.questions-block.title') }}</p>
		<p class="mt-2 mb-8">{{ $t('about-section.questions-block.intro') }}</p>
		<div class="grid md:grid-cols-3 gap-6">
	    	<div v-for="item in $tm('about-section.questions-block.items')" class="bg-white rounded-sm shadow-md p-6 border border-gray-200">
		  	<div class="group">
			  <div>
			  	<span class="icon-element material-symbols-outlined">{{ item.icon }}</span>
			    <p>{{ item.title }}</p>
			  </div>
			  <div class="hidden group-hover:block">
			  	<p>{{ item.content }}</p>
			  </div>
			</div>
		  </div>
		</div>
		<h2 class="text-4xl my-6 font-bold">{{ $t('about-section.services-block.title') }}</h2>
		<div class="mt-6 text-gray-600">
		    <p v-for="row in $tm('about-section.services-block.intro')">{{ row }}</p>
		    <p class="mt-6 font-bold">{{ $t('about-section.services-block.message') }}</p>
		</div>
	</div></div>
</section>
</template>