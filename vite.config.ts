import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/',
  },
  tanstackStart: {
    server: { 
      entry: "server",
      // Add this line to force static generation for GitHub
      preset: 'github-pages' 
    },
  },
});