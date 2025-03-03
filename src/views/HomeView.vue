<script setup>
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import Tabs from '@/components/Tabs.vue'
import Loader from '@/components/Loader.vue'
import { useLessonsStore } from '@/stores/lessons'
import Accordeon from '@/components/Accordeon.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'

const store = useLessonsStore()
const { lessons, isLoading, itemSelected } = storeToRefs(store)

onMounted(() => {
	store.fetchLessons()
})

const navigation = ref([
	{ name: '', label: 'Cadernos' },
	{ name: '', label: 'Lingua Portuguesa' },
])

const setSelectedItem = (id) => {
	store.selectItem(id)
}

watch(
	() => lessons.value,
	(newVal) => {
		const item = newVal.find((el) => el.id === itemSelected.value.id)

		if (item) {
			setTimeout(() => {
				item.status = false
				itemSelected.value.id = null
			}, 2000)
		}
	},
	{ deep: true },
)
</script>

<template>
	<div>
		<BreadCrumb :breadcrumbs="navigation" />

		<section
			class="flex justify-center items-center mt-10"
			v-if="isLoading"
		>
			<Loader />
		</section>

		<section
			v-if="!isLoading"
			class="mt-4"
		>
			<Accordeon
				v-for="(lesson, i) in lessons"
				:key="lesson.id"
				:title="`${i + 1}. ${lesson.title}`"
				:idItem="lesson.id"
				:subjects="lesson.subjects"
				:classes="lesson.classes"
				:exercises="lesson.exercises"
				:has-content="lesson.subModules.length > 0"
				@has-item-clicked="setSelectedItem($event)"
			>
				<template
					v-if="lesson.subModules.length > 0"
					#content
				>
					<Accordeon
						v-if="!lesson.status"
						v-for="(subLesson, j) in lesson.subModules"
						:key="subLesson.id"
						:title="subLesson.title"
						:subjects="subLesson.subjects"
						:classes="subLesson.classes"
						:exercises="subLesson.exercises"
						:is-sub-module="true"
						:has-content="subLesson.modules.length > 0"
					>
						<template
							v-if="subLesson.modules.length > 0"
							#content
						>
							<Accordeon
								v-for="(module, k) in subLesson.modules"
								:key="module.id"
								:title="`${i + 1}.${k + 1}. ${module.title}`"
								:is-sub-module="true"
								:show-details="false"
							>
								<template #content>
									<Tabs :tabs="module.details" />
								</template>
							</Accordeon>
						</template>
					</Accordeon>

					<div
						v-else
						class="flex justify-center items-center w-full"
					>
						<Loader />
					</div>
				</template>
			</Accordeon>
		</section>
	</div>
</template>
