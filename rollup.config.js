import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.mjs',
  output: {
    name: 'index',
    format: 'iife',
    file: 'scratch/index.js'
  },
  treeshake: true,
  plugins: [ resolve() ]
};