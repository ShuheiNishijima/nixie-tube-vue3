<script setup lang="ts">
import { onMounted } from 'vue'
import { useGetTime } from '@/composables/useGetTime.ts'
import NixieTube from '@/components/NixieTube.vue'

const items = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const { hours, minutes, seconds, continuos } = useGetTime()

onMounted(() => {
  continuos()
  console.table(hours.value)
  console.table(minutes.value)
  console.table(seconds.value)
})
</script>

<template>
  <ul class="container">
    <li class="container__item">
      <NixieTube :items="items" :active="hours[0]" />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="hours[1]" />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="undefined" />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="minutes[0]" />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="minutes[1]" />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="undefined" />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="seconds[0]" />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="seconds[1]" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100vh;
  padding: 24px;
  background: #000;
}

// .container__item {
// }
</style>
