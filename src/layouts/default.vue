<script setup lang="ts">
import { partytownSnippet } from '@builder.io/partytown/integration';

useHead({
  script: [
    {
      children: `(function () {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
  if (setting === 'dark' || (prefersDark && setting !== 'light')) {
    document.documentElement.classList.toggle('dark', true);
    document.documentElement.style.setProperty("color-scheme", setting);
    document.querySelector('meta[name=theme-color]').setAttribute('content', '#000000');
  }
})()`
    },
    {
      src: '/js/quicklink.umd.js',
      async: true
    },
    {
      type: 'text/partytown',
      src: '/js/pirsch.js',
      id: 'pirschjs',
      defer: true,
      'data-code': 'oWVBQPDXf0hsLBRW0FUPWrPthlPP7k1b'
    },
    {
      type: 'module',
      children: `import { Workbox } from '/js/workbox-window.prod.mjs';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.register();
}`
    },
    {
      children: partytownSnippet()
    }
  ]
})
</script>

<script client:load lang="ts">
if ('quicklink' in window) {
  quicklink.listen();
}
</script>

<template>
  <div id="default-layout" class="px-6 py-[2rem] lg:py-[5rem]">
    <Head>
      <meta property="author" :content="$site.author">
      <link rel="preconnect" href="https://api.pirsch.io">
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
      <link rel="manifest" href="/manifest.webmanifest">
      <html lang="id-ID" class="scroll-smooth" />
      <body class="dark:bg-black dark:text-white antialiased font-sans"></body>
    </Head>
    <header class="pb-30">
      <div class="flex items-start max-w-[38rem] mx-auto w-full gap-6">
        <picture class="flex-none">
          <source type="image/avif" :srcset="`/images/avatar.avif 1x, /images/avatar@2x.avif 2x`">
          <source type="image/webp" :srcset="`/images/avatar.webp 1x, /images/avatar@2x.webp 2x`">
          <img class="rounded-full h-[4.5rem] w-[4.5rem]" :srcset="`/images/avatar.png 1x, /images/avatar@2x.png 2x`"
            alt="Imam Susanto's Portrait">
        </picture>
        <div class="font-medium leading-normal flex-auto">
          <router-link to="/">Imam Susanto</router-link>
          <div class="text-gray-500 dark:text-gray-400">Web Developer</div>
          <div class="text-gray-500 dark:text-gray-400">Tangerang Selatan, Banten</div>
        </div>
        <div class="ml-auto flex">
          <DarkMode client:only class="h-12 w-12"></DarkMode>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>
