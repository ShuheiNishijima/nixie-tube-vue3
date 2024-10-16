<script setup lang="ts">
import { defineProps, withDefaults, ref } from 'vue'

type Props = {
  items: string[]
  active?: number | undefined
  blink?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  active: undefined,
  blink: false,
})

const isActive = ref<Boolean>(false)

const init = () => {
  isActive.value = props.active !== undefined
}

const blinking = () => {
  if (props.blink) {
    setInterval(() => {
      isActive.value = !isActive.value
    }, 900)
  }
}

init()
blinking()
</script>

<template>
  <div :class="['nixie-tube', { 'is-active': isActive }]">
    <ul class="nixie-tube__list">
      <li
        v-for="(item, index) in props.items"
        :key="index"
        :class="['nixie-tube__item', { 'is-active': isActive && index === props.active }]"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100&family=Quicksand:wght@300&family=Urbanist:ital,wght@0,100..900;1,100..900&family=Zen+Maru+Gothic&display=swap');
.nixie-tube {
  position: relative;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  border-radius: 40px 40px 8px 8px;
  box-shadow:
    rgba(#fff, 0.3) 0 0 8px inset,
    rgba(#fff, 0.4) 0 0 16px inset,
    rgba(#fff, 0.5) 0 0 24px inset;
  transition:
    border-bottom 0.3s linear,
    border-left 0.3s linear,
    box-shadow 0.3s linear;
  @include tab-pc {
    width: 100px;
    height: 184px;
    box-shadow:
      rgba(#fff, 0.3) 0 0 8px inset,
      rgba(#fff, 0.4) 0 0 16px inset,
      rgba(#fff, 0.5) 0 0 24px inset;
  }
  @include sp {
    width: calc(100px * 0.3);
    height: calc(184px * 0.3);
    box-shadow:
      rgba(#fff, 0.3) 0 0 calc(8px * 0.3) inset,
      rgba(#fff, 0.4) 0 0 calc(16px * 0.3) inset,
      rgba(#fff, 0.5) 0 0 calc(24px * 0.3) inset;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    transform: rotate(135deg);
    transition: box-shadow 0.3s linear;
    @include tab-pc {
      width: 12px;
      height: 24px;
      top: 18px;
      right: 24px;
      box-shadow: -8px 0 6px rgba(#fff, 0.9);
    }
    @include sp {
      width: calc(12px * 0.3);
      height: calc(24px * 0.3);
      top: calc(18px * 0.3);
      right: calc(24px * 0.3);
      box-shadow: calc(-8px * 0.3) 0 calc(6px * 0.3) rgba(#fff, 0.9);
    }
  }

  &.is-active {
    border-bottom: 1px solid #ff9d14;
    border-left: 1px solid #ff9d14;
    @include tab-pc {
      box-shadow:
        rgba(#fff, 0.9) 0 0 8px inset,
        rgba($secondaryColor, 0.9) 0 0 16px inset,
        rgba($secondaryColor, 0.9) 0 0 24px inset;
    }
    @include sp {
      box-shadow:
        rgba(#fff, 0.9) 0 0 calc(8px * 0.3) inset,
        rgba($secondaryColor, 0.9) 0 0 calc(16px * 0.3) inset,
        rgba($secondaryColor, 0.9) 0 0 calc(24px * 0.3) inset;
    }

    &::before {
      @include tab-pc {
        box-shadow: -8px 0 6px rgba(#ff9d14, 0.9);
      }
      @include sp {
        box-shadow: calc(-8px * 0.3) 0 calc(6px * 0.3) rgba(#ff9d14, 0.9);
      }
    }
  }
}

.nixie-tube__list {
  position: relative;
  height: 100%;
}

.nixie-tube__item {
  z-index: 1;
  position: absolute;
  line-height: 1;
  top: 50%;
  left: 50%;
  color: #666;
  list-style: none;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
  text-shadow: #000 0 0 8px;
  transform: translate(-50%, -50%) scale(70%, 100%);
  transition:
    color 0.3s ease-in-out,
    text-shadow 0.3s ease-in-out;
  @include tab-pc {
    font-size: 18rem;
  }
  @include sp {
    font-size: 4rem;
  }

  &.is-active {
    z-index: 2;
    color: $primaryColor;
    text-shadow:
      $secondaryColor 0 0 16px,
      $secondaryColor 0 0 16px,
      $secondaryColor 0 0 16px,
      $secondaryColor 0 0 16px;
  }
}
</style>
