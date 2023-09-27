import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(
        "/Users/Volt/webdev/react-course/17-the-wild-oasis/the-wild-oasis",
        "./src"
      ),
      "@tests": path.resolve(
        "/Users/Volt/webdev/react-course/17-the-wild-oasis/the-wild-oasis",
        "./tests"
      ),
    },
  },
});
