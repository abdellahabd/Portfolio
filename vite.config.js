import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteExternalsPlugin({
    //   react: "React",
    //   "react-dom": "ReactDOM",
    //   // value support chain, transform to window['React']['lazy']
    //   lazy: ["React", "lazy"],
    // }),
  ],
});
