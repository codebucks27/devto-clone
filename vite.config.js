import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig(({ command, mode, isPreview }) => {
  const root = import.meta.dirname;
  const env = loadEnv(mode, root, ['REACT_APP_', 'PUBLIC_URL']);
  const nodeEnv = process.env.NODE_ENV || (command === 'build' ? 'production' : 'development');
  const configuredUrl = env.PUBLIC_URL || '/';
  const publicBase = configuredUrl.endsWith('/') ? configuredUrl : `${configuredUrl}/`;
  // CRA uses a pathname in development, while builds retain full or relative URLs.
  const base = command === 'serve' && !isPreview
    ? (publicBase.startsWith('.') ? '/' : new URL(publicBase, 'http://localhost').pathname)
    : publicBase;
  const publicUrl = base.slice(0, -1);
  const clientEnv = {
    NODE_ENV: nodeEnv,
    PUBLIC_URL: publicUrl,
    ...Object.fromEntries(Object.entries(env).filter(([key]) => key.startsWith('REACT_APP_'))),
  };

  return {
    plugins: [react()],
    base,
    envPrefix: ['VITE_', 'REACT_APP_'],
    // Only explicitly public variables enter the browser bundle.
    define: {
      'process.env': JSON.stringify(clientEnv),
      'import.meta.env.PUBLIC_URL': JSON.stringify(publicUrl),
    },
    server: { port: 3000 },
    preview: { port: 3000 },
    build: {
      outDir: 'build',
      target: browserslistToEsbuild(undefined, { path: root, env: nodeEnv }),
    },
    css: {
      postcss: { plugins: [autoprefixer({ env: nodeEnv })] },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/setupTests.js'],
    },
  };
});
