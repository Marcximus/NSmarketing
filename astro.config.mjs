// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://silbergcreative.dk',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
});
