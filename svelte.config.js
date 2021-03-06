/** @type {import('@sveltejs/kit').Config} */
import { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter({ pages: 'build', assets: 'build', fallback: null }),
    vite: () => ({
      optimizeDeps: {
        include: ['svelte-hero-icons'],
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, '/src'),
        },
      },
    }),
  },
};

export default config;
