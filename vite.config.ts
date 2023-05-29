import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const defines = Object.entries(env).reduce((prev, [key, value]) => {
    return {
      ...prev,
      [`process.env.${key}`]: `"${value}"`,
    };
  }, {});

  return {
    plugins: [react()],
    define: defines,
  };
});
