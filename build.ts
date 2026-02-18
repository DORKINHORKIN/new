import { build } from "bun";
import bunPluginTailwind from "bun-plugin-tailwind";

build({
  entrypoints: ["./src/frontend/index.html"],
  outdir: "./dist",
  plugins: [bunPluginTailwind],
});
