<template>
    <footer class="footer container expanded content">
        <div class="footer-wrapper">
          <ul class="menu">
            <li class="head">
              <span>Меню</span>
            </li>
            <li class="menu__item">
              <router-link to="/" class="menu__link">Главная</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/about-us" class="menu__link">О магазине</router-link>
            </li>
            <li class="menu__item">
              <router-link :to="{path: '/', hash: '#slider'}" class="menu__link">Акции</router-link>
            </li>
          </ul>
          <ul class="menu">
            <li class="head">
              <span>Каталог</span>
            </li>
            <li class="menu__item">
              <router-link to="/catalog" class="menu__link">Обои</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/catalog" class="menu__link">Обои под покраску</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/catalog" class="menu__link">Фотообои и Фрески</router-link>
            </li>
          </ul>
          <ul class="menu">
            <li class="head">
              <span>Контакты</span>
            </li>
            <li class="menu__item">
              <div class="with-icon">
                <a href="" class="menu__link">pertseff.igor7@yandex.ru</a>
              </div>
            </li>
            <li class="menu__item">
              <div class="with-icon">
                <img src="" alt="">
                <a href="" class="menu__link">344022, Ростовская область, г. Ростов-на-Дону, ул. Максима Горького, 226/43</a>
              </div>
            </li>
            <li class="menu__item">
              <div class="with-icon">
                <img src="" alt="">
                <a href="" class="menu__link">+7 968 444 44 98</a>
              </div>
            </li>
          </ul>
        </div>
      </footer>
</template>

<style lang="scss">
@import '../variables.scss';

.footer {
  display: flex;
  justify-content: center;

  &-wrapper {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .menu {
    display: flex;
    flex-direction: column;
    flex: 0 0 90px;

    .head {
      font-weight: 800;
      text-transform: uppercase;
    }

    &__item {
      font-size: 14px;
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
    &__link {
      font-weight: 300;
      &:hover {
        transition: 0.3s all;
        color: $main-color;
      }
    }

    @media(max-width: 768px) {
      max-width: 100px;
      flex:1 1 auto;

      &__item {
        word-break: break-word;
      }

      &.expanded {
        display: none;
      }
    }
  }
}
</style>