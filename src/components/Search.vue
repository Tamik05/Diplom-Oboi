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
      </div>
      <div class="search-bar">
        <input type="search" name="search" placeholder="Поиск по сайту" />
        <img src="/img/search.png" alt="" />
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
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const amount = ref(0);

const checkPrice = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const cartParsed = JSON.parse(cart);
    let initial = 0;
    const prices = cartParsed.map((cart) => +cart?.price);
    if (prices.length > 1) {
      initial = prices.reduce((acc, curr) => acc + curr);
      console.log(initial);
    } else if (prices.length) {
      initial = prices[0];
    }
    amount.value = initial;
    console.log(amount.value);
  }
};

onMounted(() => {
  checkPrice();
  window.addEventListener("changeLocalStorage", (event) => {
    checkPrice();
  });
});
</script>

<style lang="scss">
.search {
  &.wrapper {
    .container {
      gap: 5px;
      .button-wrapper {
        @media(max-width: 768px) {
          align-items: center;
        }

        button {
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
