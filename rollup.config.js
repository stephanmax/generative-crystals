
import babel from 'rollup-plugin-babel'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from "rollup-plugin-terser"

const plugins = [
  resolve(),
  babel({
    exclude: 'node_modules/**'
  }),
  htmlTemplate({
    template: 'src/index.html',
    target: 'index.html',
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser())
}

export default {
  input: 'src/sketch.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs'
  },
  plugins
}
