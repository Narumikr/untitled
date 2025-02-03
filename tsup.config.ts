import CssModulesPlugin from 'esbuild-css-modules-plugin'
import alias from 'esbuild-plugin-alias'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
  minify: false,
  clean: true,
  treeshake: true,
  esbuildOptions(options) {
    options.metafile = true
  },
  dts: true,
  external: ['react', 'react-dom'],
  esbuildPlugins: [
    CssModulesPlugin({
      force: true,
      emitDeclarationFile: true,
      localsConvention: 'camelCaseOnly',
      namedExports: true,
      inject: false
    }),
    alias({
      '@': './src'
    })
  ],
  loader: {
    '.scss': 'text',
    '.module.scss': 'text'
  },
  outExtension({ format }) {
    return format === 'esm' ? { js: '.esm.js' } : { js: '.cjs' }
  }
})
