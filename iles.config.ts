import path from "path";
import { defineConfig } from "iles";
import images from "@islands/images";
import icons from "@islands/icons";
import { partytownVite } from "@builder.io/partytown/utils";

export default defineConfig({
  siteUrl: "https://imsus.dev",
  modules: [icons({ autoInstall: true }), images({})],
  vite: {
    plugins: [
      partytownVite({
        dest: path.join(__dirname, "dist", "~partytown"),
      }),
    ],
  },
});
