import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // keep root as default (project root) unless you intentionally changed it
  build: {
    outDir: 'public',      // write build directly into public/
    emptyOutDir: true      // remove previous contents
  }
});