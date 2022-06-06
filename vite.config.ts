import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const pathResolve = (dir: string) => resolve(__dirname, dir)
// https://vitejs.devszzzzzzzzzzsszz/config/
export default defineConfig({
	plugins: [vue(), AutoImport({ resolvers: [ElementPlusResolver()] }), Components({ resolvers: [ElementPlusResolver()] })],
	resolve: {
		alias: {
			'@': pathResolve("./src")
		}
	},
	build: {
		target: 'es2015',
		cssTarget: 'chrome65',
		assetsDir: './assets', // compiling path
		rollupOptions: { // used to configure multiple pages
			input: {
				platform: resolve(__dirname, 'platform.html'),
				merchant: resolve(__dirname, 'merchant.html')
			}
		}

	}
})
