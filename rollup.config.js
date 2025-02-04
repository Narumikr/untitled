const fs = require("fs");
const path = require("path");

const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const image = require("@rollup/plugin-image");
const svgr = require("@svgr/rollup");
const esbuild = require("rollup-plugin-esbuild");
const tsconfigPaths = require("rollup-plugin-tsconfig-paths")
const dts = require("rollup-plugin-dts").default

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, "package.json"), "utf-8"));

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: 'dist/index.cjs.js',
        format: "cjs",
        sourcemap: false,
        preserveModules: false
      },
      {
        file: 'dist/index.esm.js',
        format: "esm",
        sourcemap: false,
        preserveModules: false
      },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", useTsconfigDeclarationDir: true }),
      image(),
      svgr(),
      tsconfigPaths(),
      postcss({
        modules: true,
        use: {
          sass: { implementation: require("sass") },
        },
        plugins: [require("autoprefixer")],
      }),
      esbuild.default({
        sourcemap: false,
        minify: false,
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]