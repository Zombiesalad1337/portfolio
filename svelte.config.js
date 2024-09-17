import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import path from 'path'; // Import path module


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			// Additional mdsvex configuration
		})
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		vite: { // Add `vite` property here
			resolve: {
				alias: {
					$components: path.resolve('src/lib/components'),
					$lib: path.resolve('src/lib'),
					$icons: path.resolve('static/icons'),
					$images: path.resolve('static/images'),
					$fonts: path.resolve('static/fonts')
				}
			}
		}
	}
};

export default config;
