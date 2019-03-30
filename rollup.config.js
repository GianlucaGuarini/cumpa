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
      file: 'cumpa.js',
      format: 'umd'
    }
  ]
}