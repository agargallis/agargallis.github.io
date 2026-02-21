import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  publicDir: "public",
  plugins: [
    {
      name: "dev-html-rewrite",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/resume" || req.url === "/resume/") {
            req.url = "/resume.html";
          }
          if (req.url === "/contact" || req.url === "/contact/") {
            req.url = "/contact.html";
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/resume" || req.url === "/resume/") {
            req.url = "/resume.html";
          }
          if (req.url === "/contact" || req.url === "/contact/") {
            req.url = "/contact.html";
          }
          next();
        });
      },
    },
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        resume: resolve(__dirname, "resume.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
