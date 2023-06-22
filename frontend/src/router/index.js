import { createRouter, createWebHistory } from "vue-router";


import Cart from '../pages/Cart.vue'
import Main from '../pages/Main.vue'
import Catalog from '../pages/Catalog.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contacts from '../pages/Contacts.vue'
import Login from '../pages/Login.vue'
import Admin from '../pages/Admin.vue'
import AddProduct from '../pages/AddProduct.vue'

const routes = [
    { path: '/', component: Main },
    { path: '/cart', component: Cart },
    { path: '/catalog/:filter?', component: Catalog },
    { path: '/about-us', component: AboutUs },
    { path: '/contacts', component: Contacts },
    { path: '/auth', component: Login },
    { path: '/admin', component: Admin },
    { path: '/add', component: AddProduct }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          /* перелистывание */
          return {
            el: to.hash,
            behavior: 'smooth',
          }
        }
      }
})

export default router