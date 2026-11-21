import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command }) => ({
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    ...(command === 'build' ? [cloudflare()] : []),
  ],
}))
