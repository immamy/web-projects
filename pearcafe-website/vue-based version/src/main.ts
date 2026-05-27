import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/styles.css'; // 引入外部 CSS 文件

createApp(App).use(router).mount('#app')
