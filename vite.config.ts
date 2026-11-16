import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build` makes the normal production site (dist/).
// `npm run build:preview` makes a single self-contained HTML file for quick sharing.
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'preview' ? [viteSingleFile()] : [])],
  build: {
    outDir: mode === 'preview' ? 'dist-preview' : 'dist',
    target: 'es2020',
  },
}));
