import alias from 'esbuild-plugin-alias'
import cssModulesPlugin from 'esbuild-plugin-css-modules'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  external: ['react', 'react-dom'],
  esbuildPlugins: [
    cssModulesPlugin(),
    alias({
      '@': './src'
    })
  ],
  loader: {
    '.scss': 'file',
    '.module.scss': 'file'
  },

  outExtension({ format }) {
    return format === 'esm' ? { js: '.esm.js' } : { js: '.cjs' }
  }
})
