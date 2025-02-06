import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'
import svgr from '@svgr/rollup'
import esbuild from 'rollup-plugin-esbuild'
import tsconfigPaths from 'rollup-plugin-tsconfig-paths'
import babel from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'))

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: false,
        preserveModules: false
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: false,
        preserveModules: false
      }
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
      babel({
        presets: ['@babel/preset-react'],
        extensions: ['.ts', '.tsx']
      }),
      image(),
      svgr(),
      tsconfigPaths(),
      postcss({
        modules: true,
        use: {
          sass: { implementation: (await import('sass')).default }
        },
        plugins: [(await import('autoprefixer')).default]
      }),
      esbuild({
        sourcemap: false,
        minify: false,
        tsconfig: './tsconfig.json'
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
]
