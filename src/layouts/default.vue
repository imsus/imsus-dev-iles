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
  <div id="default-layout">

    <Head>
      <meta property="author" :content="$site.author">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:wght@400;800&display=swap"
        rel="stylesheet">
      <html lang="id-ID" class="scroll-smooth" />

    <body class="dark:bg-black dark:text-white antialiased font-sans"></body>
    </Head>
    <header class="pt-16 pb-30 px-6">
      <div class="flex items-center max-w-[38rem] mx-auto w-full">
        <div class="font-medium leading-normal">
          <router-link to="/">Imam Susanto</router-link>
          <div class="text-gray-500 dark:text-gray-500">Web Developer</div>
          <div class="text-gray-500 dark:text-gray-500">Tangerang Selatan, Banten</div>
        </div>
        <div class="flex items-center ml-auto">
          <div>
            <img class="rounded-full h-[4.5rem] w-[4.5rem]" src="https://frankchimero.com/fc.jpg" alt="">
          </div>
        </div>
      </div>
      <DarkMode client:load class="top-[2px] right-[2px] absolute h-12 w-12"></DarkMode>
    </header>
    <slot />
  </div>
</template>
