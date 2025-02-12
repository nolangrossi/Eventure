import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001", // Backend running on port 3001
        changeOrigin: true,
        secure: false,
      },
      "/login": {
        target: "http://localhost:3001", // Backend running on port 3001
        changeOrigin: true,
        secure: false,
      },
      "/signup": {
        target: "http://localhost:3001", // Backend running on port 3001
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

