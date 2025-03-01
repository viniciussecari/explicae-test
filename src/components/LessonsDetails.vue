<script setup>
const props = defineProps({
	lesson: {
		type: Object,
		default: () => {},
	},
})
</script>

<template>
	<div class="w-full flex items-center justify-between">
		<div class="flex items-center mb-4">
			<input
				id="default-checkbox"
				type="checkbox"
				:value="lesson.id"
				class="checkbox"
			/>
			<label
				for="default-checkbox"
				class="ms-2 text-sm font-medium text-gray-900"
			>
				{{ lesson.title }}
			</label>
		</div>

		<small> {{ lesson.duration }} </small>
	</div>
</template>
