import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      external: [],
      onwarn(warning, warn) {
        // Ignore warnings about missing optional dependencies
        if (warning.code === 'MODULE_NOT_FOUND' && warning.message.includes('@rollup/rollup-linux-x64-gnu')) {
          return;
        }
        warn(warning);
      }
    },
    target: 'esnext',
    minify: 'terser',
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
