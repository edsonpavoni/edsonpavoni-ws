import { defineConfig } from 'astro/config';

// https://astro.build/config
//export default defineConfig({});

export default defineConfig({
    vite: {
      ssr: {
        noExternal: ['plyr'],
      }
    }
}
)