<template>
  <Layout>
    <section class="content container catalog">
      <nav class="sidenav">
        <div class="sidenav__item column">
          <div>
            <h4>Цена</h4>
          </div>
          <div class="price">
            <input type="text" placeholder="От" />
            <input type="text" placeholder="До" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Производитель</h4>
          <div class="column">
            <Checkbox name="Architects Paper" />
            <Checkbox name="A.Rossi" />
            <Checkbox name="A.S. Creation" />
            <Checkbox name="Alessandro Allori" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Стиль</h4>
          <div class="column">
            <Checkbox name="Абстрактный рисунок" />
            <Checkbox name="Абстракция" />
            <Checkbox name="Архитектура" />
            <Checkbox name="Вазоны" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Акции и распродажа</h4>
          <div class="column">
            <Checkbox name="Акция" />
            <Checkbox name="Распродажа" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Цвет</h4>
          <div class="column">
            <Checkbox name="Cалатовый" />
            <Checkbox name="Бежевый" />
            <Checkbox name="Белый" />
            <Checkbox name="Бирюзовый" />
            <Checkbox name="Бежевый светлый" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Страна производитель</h4>
          <div class="column">
            <Checkbox name="Англия" />
            <Checkbox name="Беларусь" />
            <Checkbox name="Бельгия" />
            <Checkbox name="Вьетнам" />
            <Checkbox name="Германия" />
          </div>
        </div>
      </nav>
      <section class="main-content">
        <div class="open-filter">
            <button>Фильтр</button>
        </div>
        <div class="sort">
            <span>Сортировать по</span>
            <a href="" class="color-main link">Цене</a>
            <a href="" class="color-main link">Популярности</a>
        </div>
        <section class="cards">
          <Card
            id="1"
            image="https://www.don-oboi.ru/cache/goods_photos/300x300x1x61425182907cd.jpg"
            category="Обои"
            title="Dieter Langer (Дитер Лангер)"
            subtitle="OVK Design 10439-02"
            oldprice="4200"
            price="3900"
          />
          <Card
            id="6"
            image="https://www.don-oboi.ru/cache/goods_photos/300x300x1x61425182907cd.jpg"
            category="Обои"
            title="Dieter Langer (Дитер Лангер)"
            subtitle="OVK Design 10439-02"
            oldprice="4200"
            price="3900"
          />
          <Card
            id="2"
            image="https://www.don-oboi.ru/cache/goods_photos/300x300x1x613cb7f70422e.jpg"
            category="Обои"
            title="Dieter Langer (Дитер Лангер)"
            subtitle="OVK Design 10442-02"
            oldprice="4200"
            price="3900"
          />
          <Card
            id="3"
            image="https://www.don-oboi.ru/cache/goods_photos/300x300x1x613ca90e884cf.PNG"
            category="Обои"
            title="Dieter Langer (Дитер Лангер)"
            subtitle="OVK Design 10443-01"
            oldprice="4200"
            price="3900"
          />
          <Card
            id="4"
            image="https://www.don-oboi.ru/cache/goods_photos/300x300x1x613c80e9413e4.PNG"
            category="Обои"
            title="Dieter Langer (Дитер Лангер)"
            subtitle="OVK Design 10439-02"
            oldprice="4200"
            price="3900"
          />
          <Card
            id="5"
            image="https://www.don-oboi.ru/cache/goods_photos/300x300x1x61425182907cd.jpg"
            category="Обои"
            title="Dieter Langer (Дитер Лангер)"
            subtitle="OVK Design 10439-02"
            oldprice="4200"
            price="3900"
          />
        </section>
        <section class="pagination-wrapper content">
            <Pagination />
        </section>
      </section>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../components/Layout.vue";
import Collection from "../components/Collection.vue";
import Card from "../components/Card.vue";
import SwiperContainer from "../components/SwiperContainer.vue";
import { SwiperSlide } from "swiper/vue";
import Checkbox from "../components/Checkbox.vue";
import Pagination from "../components/Pagination.vue";
</script>

<style lang="scss">
@import "../variables.scss";
.catalog {
  display: flex;
  justify-content: space-between;

  .main-content {
    display: flex;
    flex-direction: column;
    margin-left: 100px;

    .open-filter {
        display: none;
        margin-bottom: 20px;
        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            button {
                padding: 10px 0;
                width: 100%;
                color: white;
                background: $main-color;
                border-radius: 50px;
            }
            
        }
    }

    @media (max-width: 768px) {
        margin-left: 0;
    }

    .sort {
        a {
            margin-left: 15px;
            @media (max-width: 768px) {
                margin-left: 5px;
            }
        }
    }

    .cards {
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        .card {
            max-width: none;
            width: 100%;
            .hit-card__content {
                display: flex;
                align-items: center;

                .category {
                    display: none;
                }
            }

            .hit-card__text {
                margin-left: 20px;
            }
        }
      }
    }
  }
}
.sidenav {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__item {
    margin-top: 15px;
    display: flex;

    .price {
      display: flex;
      gap: 10px;
      input {
        border-radius: 50px;
        border: 0;
        height: 45px;
        padding-left: 10px;
        max-width: 115px;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
}
</style>
