<template>
<section id="services-section">
	<div class="dark-bg py-18"><div class="w-3/4 mx-auto text-center">
		<h2 class="text-4xl mb-12 font-bold">{{ $t('services') }}</h2>
		<div class="grid md:grid-cols-3 gap-12">
	    	<div v-for="row in $tm('services-section.services')" class="text-left mb-8">
			    <h3 class="text-xl font-bold mb-4 block-title">{{ row.title }}</h3>
			    <div v-for="item in row.items" class="mb-4">
		    		<p class="font-bold">{{ item.title }}</p>
		      		<p class="text-gray-600">{{ item.content }}</p>
			  	</div>
		  </div>
		</div>
	</div></div>
	
	<div class="bg-white py-18"><div class="w-3/4 mx-auto text-center">
		<h2 class="text-4xl mb-12 font-bold">{{ $t('services_flows') }}</h2>
		<div class="w-3/4 mx-auto"><div class="grid grid-cols-4 gap-4">
		  <div v-for="content in $tm('services-section.flows')"  class="aspect-square border flex flex-col justify-center items-center text-center rounded-[50%] shadow-md p-6 border border-gray-200 mb-8">
		    <p class="font-bold">{{ $rt(content.title) }}</p>
			<p class="text-gray-600">{{ $rt(content.content) }}</p>
		  </div>
		</div></div>
	</div></div>
</section>
</template>