// vite.config.ts
import { defineConfig } from "file:///C:/xampp/htdocs/body/api/front/node_modules/vite/dist/node/index.js";
import react from "file:///C:/xampp/htdocs/body/api/front/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/xampp/htdocs/body/api/front/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\xampp\\htdocs\\body\\api\\front";
var vite_config_default = defineConfig(({ mode }) => ({
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "_app"
  },
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Current SPA calls canonical /api/<controller>/<endpoint> paths. Proxy
      // them to the local backend (served at http://localhost/api via a docroot
      // that maps /api → the CodeIgniter app). The legacy /api_* entries below
      // are kept for backward compatibility. Regex key matches only "/api/…".
      "^/api/": {
        target: process.env.VITE_DEV_API_TARGET || "http://localhost",
        changeOrigin: true,
        // Windows/Apache behind this dev proxy doesn't hand the JWT Authorization
        // header to PHP (works direct, dropped via the proxy hop). The backend
        // also accepts ?auth_token=, so translate Bearer → auth_token for the
        // proxied request. Dev-only: production serves SPA + API same-origin
        // (no proxy) and uses the header normally.
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq, req) => {
            const auth = req.headers["authorization"];
            if (auth && /^Bearer\s+/i.test(auth)) {
              const token = auth.replace(/^Bearer\s+/i, "");
              const sep = proxyReq.path.includes("?") ? "&" : "?";
              proxyReq.path += sep + "auth_token=" + encodeURIComponent(token);
            }
          });
        }
      },
      "/api_frontend": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      },
      "/api_courses": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      },
      "/api_payment": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      },
      "/api_notifications": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      },
      "/api_messages": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      },
      "/api_reports": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      },
      "/api_admin": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      },
      "/api_webhooks": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      },
      "/uploads": {
        target: "http://localhost/MyCommcation",
        changeOrigin: true
      }
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcYm9keVxcXFxhcGlcXFxcZnJvbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxib2R5XFxcXGFwaVxcXFxmcm9udFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzoveGFtcHAvaHRkb2NzL2JvZHkvYXBpL2Zyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBiYXNlOiAnLycsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgYXNzZXRzRGlyOiAnX2FwcCcsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICAgIHByb3h5OiB7XG4gICAgICAvLyBDdXJyZW50IFNQQSBjYWxscyBjYW5vbmljYWwgL2FwaS88Y29udHJvbGxlcj4vPGVuZHBvaW50PiBwYXRocy4gUHJveHlcbiAgICAgIC8vIHRoZW0gdG8gdGhlIGxvY2FsIGJhY2tlbmQgKHNlcnZlZCBhdCBodHRwOi8vbG9jYWxob3N0L2FwaSB2aWEgYSBkb2Nyb290XG4gICAgICAvLyB0aGF0IG1hcHMgL2FwaSBcdTIxOTIgdGhlIENvZGVJZ25pdGVyIGFwcCkuIFRoZSBsZWdhY3kgL2FwaV8qIGVudHJpZXMgYmVsb3dcbiAgICAgIC8vIGFyZSBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LiBSZWdleCBrZXkgbWF0Y2hlcyBvbmx5IFwiL2FwaS9cdTIwMjZcIi5cbiAgICAgICdeL2FwaS8nOiB7XG4gICAgICAgIHRhcmdldDogcHJvY2Vzcy5lbnYuVklURV9ERVZfQVBJX1RBUkdFVCB8fCAnaHR0cDovL2xvY2FsaG9zdCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgLy8gV2luZG93cy9BcGFjaGUgYmVoaW5kIHRoaXMgZGV2IHByb3h5IGRvZXNuJ3QgaGFuZCB0aGUgSldUIEF1dGhvcml6YXRpb25cbiAgICAgICAgLy8gaGVhZGVyIHRvIFBIUCAod29ya3MgZGlyZWN0LCBkcm9wcGVkIHZpYSB0aGUgcHJveHkgaG9wKS4gVGhlIGJhY2tlbmRcbiAgICAgICAgLy8gYWxzbyBhY2NlcHRzID9hdXRoX3Rva2VuPSwgc28gdHJhbnNsYXRlIEJlYXJlciBcdTIxOTIgYXV0aF90b2tlbiBmb3IgdGhlXG4gICAgICAgIC8vIHByb3hpZWQgcmVxdWVzdC4gRGV2LW9ubHk6IHByb2R1Y3Rpb24gc2VydmVzIFNQQSArIEFQSSBzYW1lLW9yaWdpblxuICAgICAgICAvLyAobm8gcHJveHkpIGFuZCB1c2VzIHRoZSBoZWFkZXIgbm9ybWFsbHkuXG4gICAgICAgIGNvbmZpZ3VyZTogKHByb3h5KSA9PiB7XG4gICAgICAgICAgcHJveHkub24oJ3Byb3h5UmVxJywgKHByb3h5UmVxLCByZXEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF1dGggPSByZXEuaGVhZGVyc1snYXV0aG9yaXphdGlvbiddO1xuICAgICAgICAgICAgaWYgKGF1dGggJiYgL15CZWFyZXJcXHMrL2kudGVzdChhdXRoKSkge1xuICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF1dGgucmVwbGFjZSgvXkJlYXJlclxccysvaSwgJycpO1xuICAgICAgICAgICAgICBjb25zdCBzZXAgPSBwcm94eVJlcS5wYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyc7XG4gICAgICAgICAgICAgIHByb3h5UmVxLnBhdGggKz0gc2VwICsgJ2F1dGhfdG9rZW49JyArIGVuY29kZVVSSUNvbXBvbmVudCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJy9hcGlfZnJvbnRlbmQnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3QvTXlDb21tY2F0aW9uJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICcvYXBpX2NvdXJzZXMnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3QvTXlDb21tY2F0aW9uJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICcvYXBpX3BheW1lbnQnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3QvTXlDb21tY2F0aW9uJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICcvYXBpX25vdGlmaWNhdGlvbnMnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3QvTXlDb21tY2F0aW9uJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICcvYXBpX21lc3NhZ2VzJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0L015Q29tbWNhdGlvbicsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnL2FwaV9yZXBvcnRzJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0L015Q29tbWNhdGlvbicsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnL2FwaV9hZG1pbic6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdC9NeUNvbW1jYXRpb24nLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB9LFxuICAgICAgJy9hcGlfd2ViaG9va3MnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3QvTXlDb21tY2F0aW9uJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICcvdXBsb2Fkcyc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdC9NeUNvbW1jYXRpb24nLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCldLmZpbHRlcihCb29sZWFuKSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UixTQUFTLG9CQUFvQjtBQUNyVCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0wsVUFBVTtBQUFBLFFBQ1IsUUFBUSxRQUFRLElBQUksdUJBQXVCO0FBQUEsUUFDM0MsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1kLFdBQVcsQ0FBQyxVQUFVO0FBQ3BCLGdCQUFNLEdBQUcsWUFBWSxDQUFDLFVBQVUsUUFBUTtBQUN0QyxrQkFBTSxPQUFPLElBQUksUUFBUSxlQUFlO0FBQ3hDLGdCQUFJLFFBQVEsY0FBYyxLQUFLLElBQUksR0FBRztBQUNwQyxvQkFBTSxRQUFRLEtBQUssUUFBUSxlQUFlLEVBQUU7QUFDNUMsb0JBQU0sTUFBTSxTQUFTLEtBQUssU0FBUyxHQUFHLElBQUksTUFBTTtBQUNoRCx1QkFBUyxRQUFRLE1BQU0sZ0JBQWdCLG1CQUFtQixLQUFLO0FBQUEsWUFDakU7QUFBQSxVQUNGLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsUUFDZixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxnQkFBZ0I7QUFBQSxRQUNkLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0Esc0JBQXNCO0FBQUEsUUFDcEIsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxRQUNmLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsZ0JBQWdCO0FBQUEsUUFDZCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsUUFDZixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLFlBQVk7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDOUUsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
