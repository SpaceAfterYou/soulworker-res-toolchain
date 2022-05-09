import { basePath } from "./base-path";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "node:path": "path-browserify",
      "node:buffer": "buffer",
    },
  },
});
