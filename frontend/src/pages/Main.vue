<template>
  <Layout>
      <section class="content container">
        <section class="popular-items">
          <div class="head">
            <h2 class="primary-title">Популярные коллекции</h2>
            <span class="secondary-title"
              >Мы выбрали лучшее обои для вас и разместили их в нашем магазине</span
            >
          </div>
          <div class="categories">
            <Collection image="img/collection.jpg" title="Флористика" />
            <Collection image="img/collection2.jpg" title="Детские" />
            <Collection image="img/collection2.jpg" title="Классические" />
            <Collection image="img/collection3.jpg" title="Геометрия" />
            <Collection image="img/collection4.jpg" title="Тематика" />
            <Collection image="img/collection5.jpeg" title="Клей для обоев" />
          </div>
        </section>
      </section>
      <section class="content container" id="slider">
        <section class="hits">
          <div class="head">
            <h2 class="primary-title">Хиты продаж</h2>
          </div>
          <SwiperContainer>
              <swiper-slide v-for="item in data" :key="item.id" class="swiper-slide">
                <Card
                  :hit="item.hit"
                  :id="item.id"
                  :discount="item.discount"
                  :image="item.image"
                  :category="item.category"
                  :title="item.title"
                  :subtitle="item.subtitle"
                  :oldprice="item.oldprice"
                  :price="item.price"
                />
              </swiper-slide>
            </SwiperContainer>
        </section>
      </section>
      <section class="content with-image expanded">
        <section class="container image-block">
          <div class="image-block__item">
            <div class="item-image">
              <img
                src="https://www.don-oboi.ru/upload/html_content/60e2c240ee77d.png"
                alt=""
              />
            </div>
            <div class="item-text">
              <span class="text-title"> ВЫСОКИЙ УРОВЕНЬ СЕРВИСА </span>
              <span class="text-info">
                У нас работают профессионалы, мы с вниманием и заботой относимся к
                каждому посетителю нашего магазина
              </span>
            </div>
          </div>
          <div class="image-block__item">
            <div class="item-image">
              <img
                src="https://www.don-oboi.ru/upload/html_content/60e2c2e807002.png"
                alt=""
              />
            </div>
            <div class="item-text">
              <span class="text-title"> БОЛЕЕ 100 000 ВИДОВ ОБОЕВ </span>
              <span class="text-info">
                Уникальный ассортимент и его наличие, это одно из преимуществ нашего
                магазина которое выгодно нас отличает от других
              </span>
            </div>
          </div>
          <div class="image-block__item">
            <div class="item-image">
              <img
                src="https://www.don-oboi.ru/upload/html_content/60e2c336ca8b5.png"
                alt=""
              />
            </div>
            <div class="item-text">
              <span class="text-title"> ОБОИ ОТ ВЕДУЩИХ БРЕНДОВ И ФАБРИК </span>
              <span class="text-info">
                Работаем только с лучшими брендами и проверенными фабриками, т.к.
                заботимся и дорожим своей репутаций
              </span>
            </div>
          </div>
        </section>
      </section>
  </Layout>
</template>

<script setup>
import Layout from "../components/Layout.vue";
import Collection from "../components/Collection.vue";
import Card from "../components/Card.vue";
import SwiperContainer from '../components/SwiperContainer.vue'
import { SwiperSlide } from "swiper/vue";
import data from "../data";
</script>

<style lang="scss">
@import '../variables.scss';
.search {
  background: black;
  padding: 15px 0;
  &.wrapper {
    .container {
      display: flex;
      justify-content: space-between;
      color: white;
    }
    .button-wrapper {
      display: flex;
      .button-catalog {
        display: flex;
        align-items: center;
        img {
          margin-right: 15px;
        }
      }
      .button {
        border-radius: 50px;
        background: $main-color;
        padding: 0 15px;
        color: white;
        max-width: 250px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
    .search-bar {
      display: flex;
      align-items: center;
      flex: 0 0 60%;
      position: relative;
      input {
        width: 100%;
        height: 50px;
        border-radius: 50px;
        padding: 0 20px;
      }
      img {
        position: absolute;
        right: 30px;
        cursor: pointer;
      }
    }
    .cart {
      display: flex;
      flex: 0 0 15%;

      &-img {
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        width: 50px;
      }

      &-info {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
      }

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
}

.popular-items {
  display: flex;
  flex-direction: column;

  .categories {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 15px;

    .card {
      &:hover {
        .btn {
          transition: 0.3s all;
          background: $main-color;
          color: white;
        }
      }
      a {
        position: relative;

        .image {
          max-width: 400px;
          width: 100%;
          border-radius: 10px;
        }

        .name {
          position: absolute;
          top: 20px;
          margin-left: 10px;
          color: black;
          font-weight: 800;
          font-size: 20px;
        }

        .btn {
          margin-left: 10px;
          position: absolute;
          bottom: 20px;
          border-radius: 50px;
          padding: 10px 20px;
          color: black;
          background: white;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 300;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

.hits {
  margin-top: 60px;
  position: relative;

  .buttons-control {
    position: absolute;
    right: 80px;
    top: 25px;
    color: black;

    .swiper-button-prev {
      left: -15px;
      top: 20px;
      width: 10px;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23black'%2F%3E%3C%2Fsvg%3E") !important;
    }

    .swiper-button-next {
      right: -50px;
      top: 20px;
      width: 10px;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%234black'%2F%3E%3C%2Fsvg%3E") !important;
    }
  }
}

.with-image {
  background: url(https://www.don-oboi.ru/images/preim.jpg);
  padding: 80px 0;
  .image-block {
    display: flex;
    justify-content: center;
    align-items: center;
    &__item {
      display: flex;
      align-items: center;
      flex: 0 0 33%;

      .item-image {
        width: 100%;
        max-width: 100px;
      }

      .item-text {
        color: white;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        max-width: 250px;
        .text-title {
          font-weight: 800;
        }

        .text-info {
          font-weight: 300;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
    }
  }
}

</style>