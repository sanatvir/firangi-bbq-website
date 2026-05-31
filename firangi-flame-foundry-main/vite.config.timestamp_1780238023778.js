// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: path.resolve(__dirname, "./src/routes"),
      generatedRouteTree: path.resolve(__dirname, "./src/routeTree.gen.ts")
    }),
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
