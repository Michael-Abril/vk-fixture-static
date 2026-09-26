import { existsSync } from "node:fs"
import { fileURLToPath, URL } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Do not edit: the Playground preview resolves "@/" and Tailwind the same way,
// so a change here makes the deployed build differ from the preview.
// - base "./": a static app is served under varity.app/<app>/, so every built
//   asset URL is relative to the page, never the domain root.
// - outDir: dist/ for a static site. With a backend (server/index.js) the
//   build goes to server/public, which the Express server serves: Varity's
//   Node runtime serves a dist/ that holds an index.html as static files and
//   would never start the server.
const hasServer = existsSync(fileURLToPath(new URL("./server/index.js", import.meta.url)))

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: hasServer ? "server/public" : "dist",
  },
})
