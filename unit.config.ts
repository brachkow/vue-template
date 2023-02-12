import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      root: 'src/',
      restoreMocks: true,
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul',
        extension: ['.ts', '.js', '.vue'],
        include: ['**/*.ts', '**/*.vue'],
        exclude: ['**/*.stories.ts'],
        all: true,
        reporter: 'lcov',
      },
    },
  }),
);
