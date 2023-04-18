<template>
  <div class="card">
    <ul class="markers">
      <li class="discount" v-if="discount"> -{{ discount }}%</li>
      <li class="hit" v-if="hit">Хит</li>
    </ul>
    <div class="hit-card__content">
      <a class="hit-card__img" href="#">
        <img
          :src="image"
          alt=""
        />
        <div class="category" v-if="category">{{ category }}</div>
      </a>
      <div class="hit-card__text">
        <span class="text__title"
          >{{ title }} <br />
          {{ subtitle ?? '' }}</span
        >
        <div class="price">
          <span class="old-price" v-if="oldprice">{{ oldprice }} P</span>
          <span class="new-price">{{ price }} P/шт</span>
        </div>
        <button class="btn view-btn" ref="btn" @click="addToCart">Купить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    discount: String,
    image: String,
    title: String,
    id: String,
    price: String,
    oldprice: String | undefined,
    subtitle: String | undefined,
    category: String | undefined,
    hit: Boolean | undefined,
});

const btn = ref(null);

const dispatch = () => {
  window.dispatchEvent(new CustomEvent('changeLocalStorage'), {
      detail: {
        storage: localStorage.getItem('cart')
      }
    });
}

function addToCart() {
  const item = {
    title: props.title,
    price: props.price,
    image: props.image,
    id: props.id
  };

  if(localStorage.getItem('cart')) {
    const items = JSON.parse(localStorage.getItem('cart'));
    if(items.find(item => item.id === props.id)) {
      return;
    }
    items.push(item);
    btn.value.classList.add('buy');
    btn.value.textContent = '✔';
    localStorage.setItem('cart', JSON.stringify(items));
    dispatch();
    return;
  }

  localStorage.setItem(`cart`, JSON.stringify([item]));
  dispatch();
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.card {
    max-width: 320px;
    padding: 20px;
    border: 1px solid transparent;
    border-radius: 15px;
    &:hover {
      transition: 0.3s all;
      border-color: $main-color;

      .hit-card__text {
        color: $main-color;
      }
    }

    .markers {
      display: flex;
      justify-content: flex-end;
      color: white;

      .discount {
        position: absolute;
        padding: 15px;
        border-radius: 50px;
        background: $main-color;
        top: 10px;
        right: 90px;
      }

      .hit {
        position: absolute;
        padding: 15px;
        margin-left: 15px;
        border-radius: 50px;
        background: green;
        right: 20px;
        top: 10px;
      }
    }
    .hit-card {
      &__img {
        text-decoration: none;
        img {
          border-radius: 10px;
        }
      }
      &__content {
        .category {
          text-align: left;
          color: black;
          font-weight: 300;
          text-transform: none;
        }
      }
      &__text {
        display: flex;
        flex-direction: column;
        .text__title {
          font-weight: bold;
          text-transform: uppercase;
          margin-top: 10px;
          text-align: left;
        }
        .btn {
          max-width: 120px;
          margin-top: 15px;
          padding: 15px 10px;
          border: 1px solid $main-color;
          color: $main-color;
          font-weight: 800;
          font-size: 14px;

          &:hover {
            transition: 0.3s all;
            background: $main-color;
            color: white;
          }
          &.buy {
            transition: 0.3s all;
            color: green;
            font-size: 36px;
            padding: 0px 10px;
          }
        }
        .price {
          display: flex;
          margin-top: 5px;
          flex-direction: column;
          color: $main-color;
          font-size: 18px;
          .old-price {
            font-weight: 300;
            text-decoration: line-through;
          }
          .new-price {
            font-weight: 800;
          }
        }
      }
    }
  }
</style>