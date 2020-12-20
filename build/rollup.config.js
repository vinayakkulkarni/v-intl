import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';

const extensions = ['.js', '.vue'];

const plugins = [
  resolve({ extensions, browser: true }),
  commonjs({ extensions, exclude: 'src/**' }),
  vue(),
  alias({
    entries: {
      vue: 'vue/dist/vue.runtime.esm-browser.prod.js',
    },
  }),
  babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
];

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'VIntl',
      file: 'dist/v-intl.esm.js',
    },
    plugins,
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      name: 'VIntl',
      file: 'dist/v-intl.cjs.js',
    },
    plugins,
  },
  // UMD build.
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'VIntl',
      file: 'dist/v-intl.js',
    },
    plugins,
  },
];
