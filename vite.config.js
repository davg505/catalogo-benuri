import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/catalogo-benuri/", // ✅ Apenas UMA VEZ, sem repetições
});s