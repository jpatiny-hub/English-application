import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: { chunkSizeWarningLimit: 1200 },
  base: process.env.GITHUB_PAGES ? '/English-application/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'English — Tea Time',
        short_name: 'English',
        description: "Application personnelle pour progresser en anglais du niveau B2 vers le C1",
        theme_color: '#012169',
        background_color: '#eef2ff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.',
        scope: '.',
        icons: [
          { src: 'icons/icon-192-tea.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512-tea.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512-tea.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        // La police n'a besoin que des alphabets latins (pas de cyrillique ni de vietnamien hors ligne).
        globIgnores: ['**/*cyrillic*', '**/*vietnamese*'],
        // Rappel quotidien (notifications locales, sans serveur) : public/reminder-sw.js
        importScripts: ['reminder-sw.js'],
      },
    }),
  ],
})
