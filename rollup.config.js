export default {
  input: 'index.next.js',
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
