import { createApp } from 'vue'
import './null.scss'
import './style.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app');