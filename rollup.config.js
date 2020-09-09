import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer'
import autoPreprocess from 'svelte-preprocess'
import pkg from './package.json';
import bundleSize from 'rollup-plugin-bundle-size';

const path = require('path');
import alias from '@rollup/plugin-alias';

const production = !process.env.ROLLUP_WATCH;

const {name} = pkg;
export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      name,
    },
    {
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      name,
    },
  ],
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // generate: production ? 'dom' : 'ssr',
      hydratable: true,
      preprocess: autoPreprocess({
        postcss: {
          plugins: [require('autoprefixer')()],
        },
      })
    }),
    alias({
      entries: [
        {find: 'svelte', replacement: path.resolve('node_modules','svelte')}
      ]
    }),
    resolve({
      mainFields: ['svelte','browser', 'module', 'main'],
      extensions: ['.mjs', '.js', '.svelte']
    }),
    commonjs(),
    production && terser(),
    production && analyze(),
    production && bundleSize(),
  ],
  watch: {
    clearScreen: false,
  }
}
