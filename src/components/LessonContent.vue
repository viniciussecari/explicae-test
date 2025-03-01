<script setup>
import LessonsDetails from './LessonsDetails.vue'

const props = defineProps({
	informations: {
		type: Object,
		default: () => {},
	},
})
</script>

<template>
	<div class="flex flex-col">
		<section class="mb-4 flex items-center justify-between">
			<h1 class="text-3xl">{{ informations?.content?.title }}</h1>

			<small>{{ informations?.content?.duration }}</small>
		</section>

		<LessonsDetails
			v-for="lesson in informations?.content?.materials"
			:lesson
		/>
	</div>
</template>
