import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/cse_cit_basic/",
  plugins: [react()],
});
