// 師生同步網站：Preact + htm，沒有 JSX。Agentation 是 React 元件，靠 preact/compat 接上
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.BASE ?? '/',
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/client': 'preact/compat/client',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
});
