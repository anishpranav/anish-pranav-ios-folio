import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/", // ✅ Required for GitHub Pages (repo name)
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(), // optional: remove if not needed outside dev
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
