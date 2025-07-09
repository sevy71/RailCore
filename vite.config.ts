import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load .env.[mode] into process.env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],

    // Only once, no duplicates
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    // DEV‐ONLY: proxy /api to your local Express server on :3001
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  };
});