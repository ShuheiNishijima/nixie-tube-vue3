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
  <div class="container">
    <ul class="container__list">
      <li v-for="(hour, hIndex) in hours" :key="`hour-${hIndex}`" class="container__item">
        <NixieTube :items="items" :active="hour" />
      </li>
      <li class="container__item">
        <NixieTube :items="colon" :active="0" blink />
      </li>
      <li v-for="(min, mIndex) in minutes" :key="`min-${mIndex}`" class="container__item">
        <NixieTube :items="items" :active="min" />
      </li>
      <li class="container__item">
        <NixieTube :items="colon" :active="0" blink />
      </li>
      <li v-for="(sec, sIndex) in seconds" :key="`sec-${sIndex}`" class="container__item">
        <NixieTube :items="items" :active="sec" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: #000;
}

.container__list {
  display: flex;
  gap: 1%;
  padding: 2%;
}

.container__item {
  &:nth-child(3n) {
    :deep(.nixie-tube__item) {
      @include font-default;
      @include tab-pc {
        font-size: 14rem;
      }
      @include sp {
        font-size: 3.5rem;
      }
    }
  }
}
</style>
