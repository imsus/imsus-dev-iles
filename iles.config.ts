import { defineConfig } from "iles";
import images from "@islands/images";
import icons from "@islands/icons";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  siteUrl: "https://imsus.dev",
  modules: [icons({ autoInstall: true }), images({})],
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
        manifest: {
          name: "Imam Susanto",
          short_name: "Imam Susanto",
          display: "standalone",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          icons: [
            {
              src: "/icons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icons/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  },
});
