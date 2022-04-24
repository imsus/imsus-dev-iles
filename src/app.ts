import { defineApp } from "iles";
import "~/assets/tailwind.css";
import { partytownSnippet } from "@builder.io/partytown/integration";

export default defineApp({
  head({ frontmatter, site }) {
    return {
      htmlAttrs: {
        lang: "id-ID",
        class: "scroll-smooth",
      },
      bodyAttrs: {
        class: "dark:bg-black dark:text-white antialiased font-sans",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://api.pirsch.io",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/icons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/icons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/icons/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/manifest.webmanifest",
        },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#f1e54e",
        },
        {
          property: "author",
          content: site.author,
        },
      ],
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
})()`,
        },
        {
          children: partytownSnippet(),
        },
        {
          type: "text/partytown",
          src: "/js/pirsch.js",
          id: "pirschjs",
          defer: true,
          "data-code": "oWVBQPDXf0hsLBRW0FUPWrPthlPP7k1b",
        },
        {
          type: "module",
          children: `import * as quicklink from '/js/quicklink.mjs';

window.addEventListener('load', () => {
  quicklink.listen();
});`,
        },
        {
          type: "module",
          children: `import { Workbox } from '/js/workbox-window.prod.mjs';
    
if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.register();
}`,
        },
      ],
    };
  },
});
