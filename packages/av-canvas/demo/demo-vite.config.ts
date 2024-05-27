import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 6066,
  },
  publicDir: resolve(__dirname, '../../../doc-site/public'),
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
});
