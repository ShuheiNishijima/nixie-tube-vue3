import { ref, computed } from 'vue'

export const useGetTime = () => {
  const formatter = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`
  }

  const date = ref<Date>(new Date())

  const hours = computed(() => {
    const h = formatter(date.value.getHours()).split('')
    return h.map((item) => parseInt(item))
  })

  const minutes = computed(() => {
    const m = formatter(date.value.getMinutes()).split('')
    return m.map((item) => parseInt(item))
  })

  const seconds = computed(() => {
    const s = formatter(date.value.getSeconds()).split('')
    return s.map((item) => parseInt(item))
  })

  const continuos = () => {
    setInterval(() => {
      date.value = new Date()
    }, 1000)
  }

  return {
    date,
    hours,
    minutes,
    seconds,
    continuos,
  }
}
