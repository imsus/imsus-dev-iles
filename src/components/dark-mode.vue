<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button aria-label="Toggle dark mode" type="button" class="inline-flex items-center justify-center"
    @click="toggleDark()">
    <icon-ph:sun class="h-6 w-6" v-show="!isDark"></icon-ph:sun>
    <icon-ph:moon class="h-6 w-6" v-show="isDark"></icon-ph:moon>
  </button>
</template>

