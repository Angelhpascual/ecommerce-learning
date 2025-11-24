import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@domain": "/src/domain",
      "@infrastructure": "/src/infrastructure",
      "@application": "/src/application",
      "@ui": "/src/ui",
      "@assets": "/src/assets",
    },
  },
})
