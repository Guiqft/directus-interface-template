import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';;
import vuePlugin from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript';
// For scss styles
import postcss from "rollup-plugin-postcss";
import sass from "node-sass"


export default {
	input: 'src/index.ts',
	external: ["vue"],
	output: {
		format: 'es',
		file: 'index.js',
	},
	plugins: [
		vuePlugin({ preprocessStyles: true }),
		nodeResolve(),
		commonjs(),
		typescript(),
		postcss({
			preprocessor: (content, id) => new Promise((resolve, reject) => {
				const result = sass.renderSync({ file: id})
				resolve({ code: result.css.toString() })
			}),
		})
	],
};