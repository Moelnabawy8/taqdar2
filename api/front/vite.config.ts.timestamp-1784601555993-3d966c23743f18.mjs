// vite.config.ts
import { defineConfig } from "file:///C:/xampp/htdocs/body%20-%20Copy/api/front/node_modules/vite/dist/node/index.js";
import react from "file:///C:/xampp/htdocs/body%20-%20Copy/api/front/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/xampp/htdocs/body%20-%20Copy/api/front/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\xampp\\htdocs\\body - Copy\\api\\front";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcYm9keSAtIENvcHlcXFxcYXBpXFxcXGZyb250XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcYm9keSAtIENvcHlcXFxcYXBpXFxcXGZyb250XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi94YW1wcC9odGRvY3MvYm9keSUyMC0lMjBDb3B5L2FwaS9mcm9udC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgYmFzZTogJy8nLFxuICBidWlsZDoge1xuICAgIG91dERpcjogJ2Rpc3QnLFxuICAgIGFzc2V0c0RpcjogJ19hcHAnLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBwcm94eToge1xuICAgICAgLy8gQ3VycmVudCBTUEEgY2FsbHMgY2Fub25pY2FsIC9hcGkvPGNvbnRyb2xsZXI+LzxlbmRwb2ludD4gcGF0aHMuIFByb3h5XG4gICAgICAvLyB0aGVtIHRvIHRoZSBsb2NhbCBiYWNrZW5kIChzZXJ2ZWQgYXQgaHR0cDovL2xvY2FsaG9zdC9hcGkgdmlhIGEgZG9jcm9vdFxuICAgICAgLy8gdGhhdCBtYXBzIC9hcGkgXHUyMTkyIHRoZSBDb2RlSWduaXRlciBhcHApLiBUaGUgbGVnYWN5IC9hcGlfKiBlbnRyaWVzIGJlbG93XG4gICAgICAvLyBhcmUga2VwdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gUmVnZXgga2V5IG1hdGNoZXMgb25seSBcIi9hcGkvXHUyMDI2XCIuXG4gICAgICAnXi9hcGkvJzoge1xuICAgICAgICB0YXJnZXQ6IHByb2Nlc3MuZW52LlZJVEVfREVWX0FQSV9UQVJHRVQgfHwgJ2h0dHA6Ly9sb2NhbGhvc3QnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIC8vIFdpbmRvd3MvQXBhY2hlIGJlaGluZCB0aGlzIGRldiBwcm94eSBkb2Vzbid0IGhhbmQgdGhlIEpXVCBBdXRob3JpemF0aW9uXG4gICAgICAgIC8vIGhlYWRlciB0byBQSFAgKHdvcmtzIGRpcmVjdCwgZHJvcHBlZCB2aWEgdGhlIHByb3h5IGhvcCkuIFRoZSBiYWNrZW5kXG4gICAgICAgIC8vIGFsc28gYWNjZXB0cyA/YXV0aF90b2tlbj0sIHNvIHRyYW5zbGF0ZSBCZWFyZXIgXHUyMTkyIGF1dGhfdG9rZW4gZm9yIHRoZVxuICAgICAgICAvLyBwcm94aWVkIHJlcXVlc3QuIERldi1vbmx5OiBwcm9kdWN0aW9uIHNlcnZlcyBTUEEgKyBBUEkgc2FtZS1vcmlnaW5cbiAgICAgICAgLy8gKG5vIHByb3h5KSBhbmQgdXNlcyB0aGUgaGVhZGVyIG5vcm1hbGx5LlxuICAgICAgICBjb25maWd1cmU6IChwcm94eSkgPT4ge1xuICAgICAgICAgIHByb3h5Lm9uKCdwcm94eVJlcScsIChwcm94eVJlcSwgcmVxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdXRoID0gcmVxLmhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXTtcbiAgICAgICAgICAgIGlmIChhdXRoICYmIC9eQmVhcmVyXFxzKy9pLnRlc3QoYXV0aCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhdXRoLnJlcGxhY2UoL15CZWFyZXJcXHMrL2ksICcnKTtcbiAgICAgICAgICAgICAgY29uc3Qgc2VwID0gcHJveHlSZXEucGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nO1xuICAgICAgICAgICAgICBwcm94eVJlcS5wYXRoICs9IHNlcCArICdhdXRoX3Rva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQodG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICcvYXBpX2Zyb250ZW5kJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0L015Q29tbWNhdGlvbicsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnL2FwaV9jb3Vyc2VzJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0L015Q29tbWNhdGlvbicsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnL2FwaV9wYXltZW50Jzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0L015Q29tbWNhdGlvbicsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnL2FwaV9ub3RpZmljYXRpb25zJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0L015Q29tbWNhdGlvbicsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnL2FwaV9tZXNzYWdlcyc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdC9NeUNvbW1jYXRpb24nLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB9LFxuICAgICAgJy9hcGlfcmVwb3J0cyc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdC9NeUNvbW1jYXRpb24nLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB9LFxuICAgICAgJy9hcGlfYWRtaW4nOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3QvTXlDb21tY2F0aW9uJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICcvYXBpX3dlYmhvb2tzJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0L015Q29tbWNhdGlvbicsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnL3VwbG9hZHMnOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3QvTXlDb21tY2F0aW9uJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpXS5maWx0ZXIoQm9vbGVhbiksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVQsU0FBUyxvQkFBb0I7QUFDOVUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtMLFVBQVU7QUFBQSxRQUNSLFFBQVEsUUFBUSxJQUFJLHVCQUF1QjtBQUFBLFFBQzNDLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNZCxXQUFXLENBQUMsVUFBVTtBQUNwQixnQkFBTSxHQUFHLFlBQVksQ0FBQyxVQUFVLFFBQVE7QUFDdEMsa0JBQU0sT0FBTyxJQUFJLFFBQVEsZUFBZTtBQUN4QyxnQkFBSSxRQUFRLGNBQWMsS0FBSyxJQUFJLEdBQUc7QUFDcEMsb0JBQU0sUUFBUSxLQUFLLFFBQVEsZUFBZSxFQUFFO0FBQzVDLG9CQUFNLE1BQU0sU0FBUyxLQUFLLFNBQVMsR0FBRyxJQUFJLE1BQU07QUFDaEQsdUJBQVMsUUFBUSxNQUFNLGdCQUFnQixtQkFBbUIsS0FBSztBQUFBLFlBQ2pFO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxnQkFBZ0I7QUFBQSxRQUNkLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsZ0JBQWdCO0FBQUEsUUFDZCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLHNCQUFzQjtBQUFBLFFBQ3BCLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsUUFDZixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxZQUFZO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLGlCQUFpQixnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQzlFLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
