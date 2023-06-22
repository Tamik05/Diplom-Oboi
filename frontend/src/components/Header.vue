<template>
  <header class="header">
    <ul class="menu">
      <router-link class="item first" to="/">
        <li class="menu__item active">
          Главная
        </li>
      </router-link>
      <router-link class="item" to="/about-us">
        <li class="menu__item">О магазине</li>
      </router-link>
      <router-link class="item" :to="{path: '/', hash: '#slider'}">
        <li class="menu__item">Акции</li>
      </router-link>
      <router-link class="item" to="/contacts">
        <li class="menu__item">Контакты</li>
      </router-link>
      <router-link class="item" v-if="!token" to="/auth">
        <li class="menu__item">Авторизация</li>
      </router-link>
      <router-link class="item" v-if="token" to="/admin">
        <li class="menu__item">Админ</li>
      </router-link>
    </ul>
  </header>
</template>

<script setup>
import { ref } from "vue";

const token = ref(localStorage.getItem('token'));
</script>

<style lang="scss">
@import '../variables.scss';
.header {
  width: 100%;
  background: $main-color;
  height: 40px;
  padding-left: 20px;
  .menu {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
    align-items: center;
    .item {
      margin-left: 35px;
      @media (max-width: 768px) {
        display: none;
      }
      &:not(&.first) {
        margin-left: 35px;
        @media(max-width: 768px) {
          margin-left: 5px;
        }
      }
      &.first {
        margin-left: 0;
      }
    }
    &__item {
      list-style-type: none;
      color: white;
      cursor: pointer;
      font-weight: 300;
      padding: 5px;

      &:hover,
      &.active {
        background: white;
        color: $main-color;
      }
    }
  }
  @media(max-width: 500px) {
      font-size: 12px;
      padding-left: 10px;
  }
}
</style>
