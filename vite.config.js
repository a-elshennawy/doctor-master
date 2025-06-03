import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //  as long as hosting we need to make it only "appType./"
  base: "./",
});
