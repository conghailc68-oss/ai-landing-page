import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Chuỗi rỗng giúp tự động nhận diện mọi đường dẫn tĩnh sau khi build
})