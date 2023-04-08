import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'index.next.js',
  plugins: [
    resolve({
      jsnext: true
    })
  ],
  output: [
    {
      name: 'cumpa',
      file: 'index.cjs',
      format: 'umd'
    },
    {
      name: 'cumpa',
      file: 'index.js',
      format: 'esm'
    }
  ]
}
