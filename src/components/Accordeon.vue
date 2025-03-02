<script setup>
import { computed } from 'vue'
import EmptyAccordion from './EmptyAccordion.vue'
import AccordeonDetails from './AccordeonDetails.vue'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},

	classes: {
		type: Object,
		default: () => {},
	},
	exercises: {
		type: Object,
		default: () => {},
	},
	subjects: {
		type: Object,
		default: () => {},
	},

	isSubModule: {
		type: Boolean,
		default: false,
	},
	hasContent: {
		type: Boolean,
		default: true,
	},
	showDetails: {
		type: Boolean,
		default: true,
	},
})

const styleHierarchy = computed(() => {
	const subModule = 'sub-module'
	return props.isSubModule ? subModule : ''
})
</script>

<template>
	<details class="w-f bg-white">
		<summary :class="`${styleHierarchy}`">
			<section class="sm:flex md:flex md:flex-col">
				{{ title }}

				<div
					v-if="showDetails"
					class="sm:block sm:w-full md:flex md:flex-row"
				>
					<AccordeonDetails
						label="Aulas"
						:details="classes"
					/>

					<AccordeonDetails
						label="Exercícios"
						:details="exercises"
					/>

					<AccordeonDetails
						label="Matérias"
						:details="subjects"
					/>
				</div>
			</section>
		</summary>

		<section
			v-if="hasContent"
			class="p-4"
		>
			<slot name="content" />
		</section>

		<span v-if="!hasContent">
			<EmptyAccordion />
		</span>
	</details>
</template>
