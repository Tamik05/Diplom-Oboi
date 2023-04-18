<template>
  <header class="header">
    <ul class="menu">
      <router-link to="/">
        <li class="menu__item active">
          Главная
        </li>
      </router-link>
      <li class="menu__item">О магазине</li>
      <li class="menu__item">Отзывы</li>
      <li class="menu__item">Акции</li>
      <li class="menu__item">Возврат</li>
      <li class="menu__item">Контакты</li>
    </ul>
  </header>
</template>

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
    &__item {
      list-style-type: none;
      color: white;
      cursor: pointer;
      font-weight: 300;
      padding: 5px;

      &:not(:first-child) {
        margin-left: 35px;
        @media(max-width: 768px) {
          margin-left: 5px;
        }
      }

      &:hover,
      &.active {
        background: white;
        color: $main-color;
      }
    }
    @media(max-width: 768px) {
      display: none;
    }
  }
}
</style>
