import { defineApp } from "iles";
import "~/assets/tailwind.css";

export default defineApp({
  head: {
    meta: [
      {
        name: "theme-color",
        content: "#f1e54e",
      },
    ],
  },
});
