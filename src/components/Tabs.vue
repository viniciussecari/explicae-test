<script setup>
import { ref } from 'vue'
import LessonContent from './LessonContent.vue'
import AccordeonDetails from './AccordeonDetails.vue'

const props = defineProps({
	tabs: {
		type: Array,
		required: true,
	},
})

const selected = ref({})

const setModelValue = (data) => {
	if (!data) return
	selected.value = data
}

setModelValue({ ...props.tabs[0] })
</script>

<template>
	<div class="tabs__box">
		<div
			v-for="(tab, index) in tabs"
			:key="index"
			:class="`tab__item ${selected?.id === tab.id ? 'text-purple-500' : 'text-gray-500'}`"
			@click="setModelValue(tab)"
		>
			<section class="flex items-center">
				{{ tab.title }}

				<AccordeonDetails :details="tab" />
			</section>
		</div>

		<section class="p-2">
			<LessonContent :informations="selected" />
		</section>
	</div>
</template>
