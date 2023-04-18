import { createRouter, createWebHistory } from "vue-router";


import Cart from '../pages/Cart.vue'
import Main from '../pages/Main.vue'
import Catalog from '../pages/Catalog.vue'

const routes = [
    { path: '/', component: Main },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router