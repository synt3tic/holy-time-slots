import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'reset-css/reset.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus).mount('#app')
