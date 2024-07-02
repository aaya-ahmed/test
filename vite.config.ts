import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import viteTsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
    plugins:[react(),viteTsconfigPaths()],
    server:{
        port:3000,
        open:true
    },
    build: {
        outDir: 'build',
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, './src/components'),
          '@services': path.resolve(__dirname, './src/services'),
          '@assets':path.resolve(__dirname,'assets'),
          '@sharred':path.resolve(__dirname,'./src/components/shared')
        }}
});