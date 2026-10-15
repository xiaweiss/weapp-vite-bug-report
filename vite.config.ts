import { defineConfig } from 'weapp-vite'
import AutoImport from 'unplugin-auto-import/vite'
import wevu from 'weapp-vite/auto-import-presets/wevu'
import wevuRouter from 'weapp-vite/auto-import-presets/wevu-router'

export default defineConfig({
  weapp: {
    srcRoot: 'src',
    autoRoutes: true,
    chunks: {
      preserveModules: ["utils/**"],
    },
  },
  plugins: [
    /**
     * 自动补全 import
     * @see https://github.com/unplugin/unplugin-auto-import
     */
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports:[
        wevu,
        wevuRouter
      ]
    })
  ]
})
