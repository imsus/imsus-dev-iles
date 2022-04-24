<template>
  <div id="default-layout" class="px-6 py-[2rem] lg:py-[5rem]">
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
        <div class="ml-auto flex print:hidden">
          <DarkMode client:only class="h-12 w-12"></DarkMode>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>
