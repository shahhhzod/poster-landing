import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Указывает, чтобы сервер был доступен по локальной сети
    port: 5173, // Выберите порт (по умолчанию 5173)
  },
})