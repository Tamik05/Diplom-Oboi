<template>
    <footer class="footer container expanded content">
        <div class="footer-wrapper">
          <ul class="menu expanded">

          </ul>
          <ul class="menu">
            <li class="head">
              <span>Меню</span>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Главная</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">О магазине</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Отзывы</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Акции</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Возврат</a>
            </li>
          </ul>
          <ul class="menu">
            <li class="head">
              <span>Каталог</span>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Обои</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Обои под покраску</a>
            </li>
            <li class="menu__item">
              <a href="" class="menu__link">Фотообои и Фрески</a>
            </li>
          </ul>
          <ul class="menu">
            <li class="head">
              <span>Каталог</span>
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
    flex: 0 0 50px;

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