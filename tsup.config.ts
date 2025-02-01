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
    '.css': 'file',
    '.module.css': 'css',
    '.scss': 'file',
    '.module.scss': 'css'
  }
})
