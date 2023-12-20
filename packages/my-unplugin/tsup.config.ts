import { defineConfig } from 'tsup';
import { buildOptions } from '../../scripts/tsupBuildOptions';

export default defineConfig(options => {
  return [
    {
      // ...buildOptions,
      entryPoints: ['src/*.ts'],
      // entry: ['./src/vite.ts'],
      clean: true,
      format: ['cjs', 'esm'],
      dts: true,
      name: 'my-unplugin',
      onSuccess: 'npm run build:fix'
    }
  ];
});
