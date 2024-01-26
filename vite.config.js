import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import cors from 'koa2-cors';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    middleware: [
      // 註冊 CORS 中間件
      cors({
        origin: 'http://127.0.0.1:5000', // 允許的來源
        credentials: true, // 允許携帶認證信息，例如 cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE'] // 允許的請求方法
      })
    ]
  },
})
