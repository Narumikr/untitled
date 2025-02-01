import { sassPlugin } from 'esbuild-sass-plugin'
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
    sassPlugin({
      type: 'css'
    })
  ],
  loader: {
    '.css': 'text',
    '.module.css': 'text',
    '.scss': 'text',
    '.module.scss': 'text'
  },
  outExtension({ format }) {
    return format === 'esm' ? { js: '.esm.js' } : { js: '.cjs' }
  }
})
