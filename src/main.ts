import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { locale } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import 'normalize.css/normalize.css'
import './assets/icon/iconfont.css'

locale(lang)
const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')
