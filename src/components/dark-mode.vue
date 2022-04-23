<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  onChanged(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark ? true : false);
    document.documentElement.style.setProperty("color-scheme", dark ? 'dark' : 'light');
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', dark ? '#000000' : '#f1e54e');
  },
})

const toggleDark = useToggle(isDark)
</script>

<template>
  <button aria-label="Mode Gelap" type="button" class="inline-flex items-center justify-center" @click="toggleDark()">
    <icon-ph:sun class="h-6 w-6" v-show="!isDark"></icon-ph:sun>
    <icon-ph:moon class="h-6 w-6" v-show="isDark"></icon-ph:moon>
  </button>
</template>

