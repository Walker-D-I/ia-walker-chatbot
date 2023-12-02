import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const devConfig = defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

const buildConfig = defineConfig(({ command }) =>
	command === 'serve'
		? {
				plugins: [sveltekit()],
				test: {
					include: ['src/**/*.{test,spec}.{js,ts}']
				}
		  }
		: {
				plugins: [
					svelte({
						compilerOptions: {
							customElement: true
						}
					})
				],
				test: {
					include: ['src/**/*.{test,spec}.{js,ts}']
				},
				build: {
					lib: {
						name: 'ChatAgent',
						entry: ['./src/lib/index.ts'],
						formats: ['es', 'umd', 'iife']
					}
				}
		  }
);

export default process.env.NODE_ENV === 'dev' ? devConfig : buildConfig;
