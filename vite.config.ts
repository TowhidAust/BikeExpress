import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import * as path from 'path';

// const projectRootDir = resol ve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // src: https://github.com/remix-run/remix/issues/8891
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
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
