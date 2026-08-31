<script setup lang="ts">
import autoRoutes from 'weapp-vite/auto-routes'
import { createRouter } from 'wevu/router'

defineAppJson({
  pages: autoRoutes.pages,
  window: {
    navigationBarTitleText: 'Wevu 模板',
    navigationBarBackgroundColor: '#0f172a',
    navigationBarTextStyle: 'white',
  },
  style: 'v2',
  componentFramework: 'glass-easel',
  sitemapLocation: 'sitemap.json',
})

/**
 * 程序等待一段时间
 * @param ms 停止的毫秒数
 * @returns
 */
const sleep = (ms: number = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const router = createRouter()

const login = async () => {
  console.log('开始登录')
  await sleep(3000)
  console.log('完成登录')
}

router.beforeEach(async (to, from) => {
  console.log('beforeEach', to, from)
  await login()
  return true
})
</script>

<style>
page {
  color: #0f172a;
  background: #f3f6fb;
}
</style>
