import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', 'jsx']
    }),
    esbuild({
      minify: true
    }),
    commonjs(),
    replace({
      preventAssignment: false,
      'process.env.NODE_ENV': '"development"'
    })
  ]
}