<script setup>
import { useAlertStore } from '@/stores/alert'
import { storeToRefs } from 'pinia'

const store = useAlertStore()
const { alert, loading } = storeToRefs(store)
const { clear } = store
</script>
<template>
	<!-- alert -->
	<div v-if="alert.title" class="relative z-[200]">
		<div class="fixed inset-0 bg-gray-500/75 transition-opacity duration-300" aria-hidden="true"></div>
		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-[50vh] md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<transition name="slide-down" appear>
					<div v-if="alert.title" class="w-5/6 lg:w-1/4 relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 bg-white">
						<div class="px-5 pt-6">
							<h3 class="font-bold text-gray-900" v-text="alert.title"></h3>
							<div class="my-2 lg:mt-2 lg:mb-4">
								<p class="text-gray-500" v-text="alert.content"></p>
							</div>
						</div>
						<div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button @click="clear" type="button" class="text-white bg-primary border-1 hover:border-primary hover:bg-white hover:text-primary rounded-lg text-sm px-3 lg:px-5 py-1.5 lg:py-2.5">{{ $t('close') }}</button>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>

	<!-- loading -->
	<div class="bg-white/70 z-200 fixed"><div :class="{'flex': loading, 'hidden': !loading}" class="w-screen h-screen text-center items-center justify-center">
		<div>
			<svg class="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
			width="114" height="114">
				<path
					d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
				<path
					d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
					class="text-primary"></path>
			</svg>
			<p class="mt-2 font-weight-bold">{{ $t('loading') }}</p>
		</div>
	</div></div>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
	transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-down-enter-to,
.slide-down-leave-from {
	opacity: 1;
	transform: translateY(0);
}
</style>