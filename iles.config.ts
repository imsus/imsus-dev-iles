import { defineConfig } from "iles";
import images from "@islands/images";
import icons from "@islands/icons";

export default defineConfig({
  siteUrl: "https://imsus.dev",
  modules: [icons({ autoInstall: true }), images()],
});
