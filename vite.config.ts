import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
  ],
  build: {
    rollupOptions,
    minify: 'terser', // 使用 terser 进行压缩
    sourcemap: true, // 输出单独的 source 文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SSYUI',
      fileName: 'ssy-ui',
      formats: ['es', 'umd', 'iife'], // 导出模块类型
    },
  },
  test: {
    globals: true, // 启用类似 jest 的全局测试 API
    environment: 'happy-dom', // 使用 happy-dom 模拟 DOM
  },
})
