// @ts-check
import { defineConfig } from 'astro/config';
import { plugin } from './src/plugin.js';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [plugin],
    }
});
