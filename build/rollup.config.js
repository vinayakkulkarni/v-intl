import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'VIntl',
      file: 'dist/v-intl.esm.js',
    },
    plugins: [
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
      commonjs(),
      vue(),
      resolve(),
    ],
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      name: 'VIntl',
      file: 'dist/v-intl.cjs.js',
    },
    plugins: [
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
      commonjs(),
      vue(),
      resolve(),
    ],
  },
  // UMD build.
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'VIntl',
      file: 'dist/v-intl.js',
    },
    plugins: [
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
      commonjs(),
      vue(),
      resolve(),
    ],
  },
];
