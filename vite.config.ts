import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'

const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: false
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`
        },
      }]
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      'views': pathResolve('./src/views'),
      'components': pathResolve('./src/components'),
      'assets': pathResolve('./src/assets'),
      'utils': pathResolve('./src/utils'),
      'plugins': pathResolve('./src/plugins'),
      'requests': pathResolve('./src/requests'),
      'hooks': pathResolve('./src/hooks'),
      'store': pathResolve('./src/store'),
      'configs': pathResolve('./src/configs')
    }
  }
})
