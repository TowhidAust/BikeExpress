import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import * as path from 'path';

// const projectRootDir = resol ve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), alias()],
	server: {
		open: true,
	},

	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
});
