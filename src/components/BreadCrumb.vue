<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
	breadcrumbs: {
		type: Array,
		default: [{ name: 'home', label: 'Home' }],
	},
})

const isLastItem = (index) => {
	return index + 1 === props.breadcrumbs.length
}
</script>

<template>
	<div class="flex">
		<section
			v-for="(item, i) in breadcrumbs"
			:key="item.name"
		>
			<section v-if="!isLastItem(i)">
				<RouterLink :to="item.name">
					<span>{{ item.label }}</span>
				</RouterLink>
				<span class="mx-1"> / </span>
			</section>

			<section v-else>
				<u class="text-purple-500">
					{{ item.label }}
				</u>
			</section>
		</section>
	</div>
</template>
