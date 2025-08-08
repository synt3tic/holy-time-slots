import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import ru from 'element-plus/es/locale/lang/ru';

// CSS
import 'reset-css/reset.css';
import 'element-plus/dist/index.css';
import './main.css';

const app = createApp(App);

app.use(ElementPlus, {
    locale: ru,
}).mount('#app')
