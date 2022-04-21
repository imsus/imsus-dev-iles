import { defineConfig } from "iles";
import images from "@islands/images";
import icons from "@islands/icons";
import unocss from "unocss/vite";

export default defineConfig({
  siteUrl: "https://imsus.dev",
  modules: [icons({ autoInstall: true }), images()],
  vite: {
    plugins: [unocss()],
  },
});
