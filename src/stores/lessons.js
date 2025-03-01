import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import lesson from '@/services/lesson'

export const useLessonsStore = defineStore('lesssons', () => {
  const lessons = reactive([])
  const isLoading = ref(false)

  function fetchLessons() {
    isLoading.value = true

    setTimeout(() => {
      lessons.splice(0, lessons.length, ...lesson)
      isLoading.value = false
    }, 3000)
  }

  return { lessons, isLoading, fetchLessons }
})