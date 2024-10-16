<script setup lang="ts">
import { onMounted } from 'vue'
import { useGetTime } from '@/composables/useGetTime.ts'
import NixieTube from '@/components/NixieTube.vue'

const items = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const colon = ['：']
const { setCurrentTime, hours, minutes, seconds, counter } = useGetTime()

onMounted(async () => {
  await setCurrentTime()
  counter()
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
      <NixieTube :items="colon" :active="0" blink />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="minutes[0]" />
    </li>
    <li class="container__item">
      <NixieTube :items="items" :active="minutes[1]" />
    </li>
    <li class="container__item">
      <NixieTube :items="colon" :active="0" blink />
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
  width: 100%;
  height: 100vh;
  background: #000;
  @include tab-pc {
    gap: 16px;
    padding: 24px;
  }
  @include sp {
    gap: 8px;
    padding: 8px;
  }
}

// .container__item {
// }
</style>
