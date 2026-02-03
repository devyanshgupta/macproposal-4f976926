import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "::",
        port: 12345,
	allowedHosts: ["ca.mayur", "mac.server"],
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
            },
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
//if page not generating text in pdf delete the proxy line from this file, delete the .vite folder in node_modules and restart the frontend server. then put this back in and save this file.
//doesnt always work