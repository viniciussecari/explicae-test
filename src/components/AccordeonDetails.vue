<script setup>
import { computed } from 'vue'

const props = defineProps({
	label: {
		type: String,
		required: false,
	},

	details: {
		type: Object,
		default: () => {},
	},
})

const fomattedDetails = computed(() => {
	if (!props.details) return ''

	const formatted = props.details?.hours.split(':')
	return `${formatted[0]}h ${formatted[1]}m`
})
</script>

<template>
	<small class="flex">
		<span class="mr-2"> {{ label }} </span>
		<section class="font-bold">
			{{ details?.quantity }} | {{ fomattedDetails }}
		</section>
	</small>
</template>
