import { createApp } from 'vue'
import './null.scss'
import './style.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app');

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});