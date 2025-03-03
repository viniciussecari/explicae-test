import { defineStore } from 'pinia'
import { ref } from 'vue'
import lesson from '@/services/lesson'

export const useLessonsStore = defineStore('lessons', () => {
  const lessons = ref([])
  const isLoading = ref(false)
  const itemSelected = ref({ id: null })

  function fetchLessons() {
    isLoading.value = true

    setTimeout(() => {
      lessons.value = [...lesson]
      isLoading.value = false
    }, 3000)
  }

  function selectItem(id) {
    const item = lessons.value.find((el) => el.id === id)

    if (item) {
      itemSelected.value.id = item.id
      item.status = true
    }
  }

  return {
    lessons,
    isLoading,
    fetchLessons,
    selectItem,
    itemSelected,
  }
})