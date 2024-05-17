import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly' // 设置 CSS 类名转换规则为驼峰式
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 允许在 Less 文件中使用 JavaScript
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 设置 @ 代表 src 目录
    }
  }
})
