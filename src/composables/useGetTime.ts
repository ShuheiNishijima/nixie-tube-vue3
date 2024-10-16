import { ref, computed } from 'vue'

export const useGetTime = () => {
  const formatter = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`
  }

  const getCurrentTime = async () => {
    const requestUrl = '/img/1x1.gif' as const
    const defaultTime = '1970/01/01 00:00:00'
    try {
      const response = await fetch(requestUrl)
      const serverTime = response.headers.get('Date') ?? new Date(defaultTime)
      return new Date(serverTime)
    } catch {
      return new Date(defaultTime)
    }
  }

  const setCurrentTime = async () => {
    const time = await getCurrentTime()
    currentTime.value = time
  }

  const currentTime = ref(new Date('1970/01/01 00:00:00'))

  const hours = computed(() => {
    const h = formatter(currentTime.value.getHours()).split('')
    return h.map((item) => parseInt(item))
  })

  const minutes = computed(() => {
    const m = formatter(currentTime.value.getMinutes()).split('')
    return m.map((item) => parseInt(item))
  })

  const seconds = computed(() => {
    const s = formatter(currentTime.value.getSeconds()).split('')
    return s.map((item) => parseInt(item))
  })

  const counter = () => {
    setInterval(() => {
      currentTime.value = new Date(currentTime.value.getTime() + 1000)
    }, 1000)
  }

  return {
    getCurrentTime,
    setCurrentTime,
    currentTime,
    hours,
    minutes,
    seconds,
    counter,
  }
}
