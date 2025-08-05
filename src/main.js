import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'reset-css/reset.css'
import './main.css'

const app = createApp(App)

app.use(ElementPlus).mount('#app')
