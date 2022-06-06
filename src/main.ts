import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import store from '../src/store/index'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import ElementPlus from 'element-plus'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
const app = createApp(App)
//app.use(ElementPlus) // for English Version
app.use(ElementPlus, { locale: zhCn })
app.use(store).use(router).mount('#app')
// createApp(App).mount('#app')
