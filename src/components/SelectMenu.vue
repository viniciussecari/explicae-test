<template>
	<select
		class="text-purple-500 focus:border-none w-full"
		v-model="selectedValue"
		@change="onChange"
	>
		<option
			v-for="option in options"
			:key="option.id"
			:value="option"
		>
			{{ option.title }}
		</option>
	</select>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	options: {
		type: Array,
		required: true,
	},
	value: {
		type: Object,
		required: true,
	},
})

const emit = defineEmits(['input'])
const selectedValue = ref(props.value)
const onChange = () => {
	emit('input', selectedValue.value)
}

watch(
	() => props.value,
	(newVal) => {
		selectedValue.value = newVal
	},
)
</script>
