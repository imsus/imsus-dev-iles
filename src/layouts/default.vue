<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  script: [
    {
      children: `(function () {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.toggle('dark', true)
})()`
    },
    {
      src: '/js/quicklink.umd.js',
      async: true
    }
  ]
})
</script>

<script client:load>
if ('quicklink' in window) {
  quicklink.listen();
}
</script>

<template>
  <div id="default-layout" class="px-6 py-[2rem] lg:py-[5rem]">
    <Head>
      <meta property="author" :content="$site.author">
      <html lang="id-ID" class="scroll-smooth" />
      <body class="dark:bg-black dark:text-white antialiased font-sans"></body>
    </Head>
    <header class="pb-30">
      <div class="flex items-start max-w-[38rem] mx-auto w-full gap-6">
        <img class="rounded-full h-[4.5rem] w-[4.5rem] flex-none" src="../assets/avatar.png" alt="">
        <div class="font-medium leading-normal">
          <router-link to="/">Imam Susanto</router-link>
          <div class="text-gray-500 dark:text-gray-400">Web Developer</div>
          <div class="text-gray-500 dark:text-gray-400">Tangerang Selatan, Banten</div>
        </div>
        <div class="ml-auto flex">
          <DarkMode client:load class="h-12 w-12"></DarkMode>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>
