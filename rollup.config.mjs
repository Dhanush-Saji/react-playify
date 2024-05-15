import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir:'dist',
      format:'es',
      name:'react-playify'
    },
    external: [/\.css$/,"react","react-dom"],
    plugins: [
      resolve(),
      typescript({ tsconfig: 'tsconfig.json' }),
      postcss({ extensions: ['.css'], extract: false }),
    ],
  },
];