import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-media-playback",
  },
  external: ["react", "react-dom", "react-icons"],
  plugins: [typescript({ tsconfig: "tsconfig.json" }),nodeResolve(),
  postcss({
    extract: true, // Extract CSS to a separate file
    modules: true, // Enable CSS modules
    minimize: true // Minimize CSS
  })
,],
});