import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-media-playback",
  },
  external: ["react", "react-dom", "react-icons"],
  plugins: [typescript({ tsconfig: "tsconfig.json" }),nodeResolve()],
});