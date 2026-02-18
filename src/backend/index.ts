import IndexHTML from "../frontend/index.html";

Bun.serve({
  port: 3000,
  development: {
    hmr: true,
    console: true,
  },
  routes: {
    "/*": IndexHTML,
  },
});

console.log("server running on port http://localhost:3000");
