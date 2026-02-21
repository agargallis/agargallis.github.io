import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        resume: resolve(__dirname, "resume/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
      },
    },
  },
});
