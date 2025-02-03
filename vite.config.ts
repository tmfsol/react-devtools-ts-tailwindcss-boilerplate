import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
const viteConfig = defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',

				additionalData: (content, filename) => {
					const excludedFiles = ['global.scss'];
					const onlyFilename = filename.split('/').pop();

					if (onlyFilename && excludedFiles.includes(onlyFilename)) {
						return content;
					}

					return `@use "~/styles/abstracts" as *; ${content}`;
				}
			}
		}
	},

	resolve: {
		alias: [
			{
				find: '~/App',
				replacement: resolve(__dirname, 'src/App')
			},

			{
				find: '~/components',
				replacement: resolve(__dirname, 'src/components')
			},
			{
				find: '~/hooks',
				replacement: resolve(__dirname, 'src/hooks')
			},
			{
				find: '~/styles',
				replacement: resolve(__dirname, 'src/styles')
			},
			{
				find: '~/utils',
				replacement: resolve(__dirname, 'src/utils')
			}
		]
	},

	plugins: [react()]
});

export default viteConfig;
