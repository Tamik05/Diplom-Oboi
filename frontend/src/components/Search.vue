<template>
  <section class="search wrapper">
    <div class="container">
      <div class="button-wrapper">
        <button class="button button-large button-catalog">
          <router-link to="/catalog" class="button-catalog">
            <img src="/img/ham.png" alt="" />
            <span class="search-text">Каталог товаров</span>
          </router-link>
        </button>
        <button @click="isOpen = true" class="button button-large button-catalog mobile">
            <img src="/img/ham.png" alt="" />
            <span class="search-text">Каталог товаров</span>
        </button>
      </div>
      <div class="search-bar">
        <input 
          type="search" 
          name="search"
          v-model="search"
          @keydown.enter="searchInCatalog"
          placeholder="Поиск по сайту"
        />
        <img src="/img/search.png" alt="" @click="searchInCatalog" />
      </div>
      <router-link to="/cart">
        <div class="cart">
          <div class="cart-img"><img src="/img/basket.png" alt="" /></div>
          <div class="cart-info">
            <span>Ваша корзина</span>
            <!-- TODO: -->
            <span>{{ amount }}p</span>
          </div>
        </div>
      </router-link>
    </div>
  </section>
  <Menu :burgerIcon="false" noOverlay :isOpen="isOpen" @closeMenu="closeMenu">
    <router-link to="/">Главная</router-link>
    <router-link to="/catalog">Каталог</router-link>
    <router-link to="/about-us">О магазине</router-link>
    <router-link :to="{path: '/', hash: '#slider'}">Акции</router-link>
    <router-link to="/contacts">Контакты</router-link>
    <router-link class="item" v-if="!token" to="/auth">
        Авторизация
      </router-link>
      <router-link class="item" v-if="token" to="/admin">
        Админ
      </router-link>
  </Menu>
</template>

<script setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { Slide, Menu } from 'vue3-burger-menu'
import router from "../router";

const emit = defineEmits(['change'])

const amount = ref(0);
const isOpen = ref(false);
const token = ref(localStorage.getItem('token'));
const search = ref();

const closeMenu = () => {
  isOpen.value = false;
  document.body.className = ''
}

const searchInCatalog = () => {
  router.push(`/catalog?search=${search.value}`)
}

const checkPrice = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const cartParsed = JSON.parse(cart);
    let initial = 0;
    const prices = cartParsed.map((cart) => +cart?.price);
    if (prices.length > 1) {
      initial = prices.reduce((acc, curr) => acc + curr);
    } else if (prices.length) {
      initial = prices[0];
    }
    amount.value = initial;
  }
};

onMounted(() => {
  checkPrice();
  window.addEventListener("changeLocalStorage", (event) => {
    checkPrice();
  });
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search')

  if(searchQuery) {
    search.value = searchQuery;
  }
});
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.search {
  &.wrapper {
    .container {
      gap: 5px;
      .button-wrapper {
        @media(max-width: 768px) {
          align-items: center;
        }

        button {
          &.mobile {
            display: none;
            @media (max-width: 768px) {
              display: flex;
            }
          }
          &:not(.mobile) {
            @media (max-width: 768px) {
              display: none;
            }
          }
          @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 0px;
            max-height: 40px;
            padding: 10px 15px;

            img {
              margin-right: 0;
            }
          }
        }
      }

      .cart {
        @media (max-width: 768px) {
          height: 100%;
          margin-top: 0;
          justify-content: center;
          align-items: center;
          &-info {
            display: none;
          }
          &-img {
            padding: 10px;
          }
        }
      }

      .search-bar {
        @media(max-width: 768px) {
          img {
            display: none;
          }
        }
      }
    }
  }
}
</style>
