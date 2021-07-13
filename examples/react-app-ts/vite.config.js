import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactJsx from 'vite-react-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...(process.env.NODE_ENV !== "test" ? [reactRefresh()] : []), reactJsx()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
