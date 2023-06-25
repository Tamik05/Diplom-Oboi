<template>
  <Layout>
    <seciton class="add-product">
      <h1>Добавить новый товар</h1>
      <form class="product-form">
        <div class="input-field required">
          Наименование
          <input type="text" required v-model="title" />
        </div>
        <div class="input-field">
          Скидка(если есть)
          <input type="number" required v-model="discount" />
        </div>
        <div class="input-field required">
          Категория
          <input type="text" required v-model="category" />
        </div>
        <div class="input-field">
          Подпись
          <input type="text" v-model="subtitle" />
        </div>
        <template v-if="discount">
          <div class="input-field required">
            Старая цена
            <input type="number" required v-model="oldprice" />
          </div>
          <div class="input-field required">
            Новая цена
            <input type="number" required v-model="price" />
          </div>
        </template>
        <template v-else>
          <div class="input-field required">
            Цена
            <input type="number" required v-model="price" />
          </div>
        </template>
        <div class="input-field">
          Стиль:
          <label class="radio">
            <input
              v-model="style"
              value="Флористика"
              name="style"
              type="radio"
            />
            Флористика
          </label>
          <label class="radio">
            <input v-model="style" value="Детские" name="style" type="radio" />
            Детские
          </label>
          <label class="radio">
            <input
              v-model="style"
              value="Классические"
              name="style"
              type="radio"
            />
            Классические
          </label>
          <label class="radio">
            <input
              v-model="style"
              value="Геометрия"
              name="style"
              type="radio"
            />
            Геометрия
          </label>
          <label class="radio">
            <input v-model="style" value="Тематика" name="style" type="radio" />
            Тематика
          </label>
          <label class="radio">
            <input
              v-model="style"
              value="Клей для обоев"
              name="style"
              type="radio"
            />
            Клей для обоев
          </label>
        </div>
        <div class="input-field">
          Цвет
          <input type="text" v-model="color" />
        </div>
        <div class="input-field">
          Страна
          <input type="text" v-model="country" />
        </div>
        <div class="input-field">
          Картинка
          <input @change="(e) => setImage(e)" type="file" />
          <img v-if="image" :src="getImage()">
        </div>
        <div class="input-field">
          <label class="checkbox">
            <input v-model="hit" type="checkbox" />
            Хит
          </label>
        </div>
        <div class="warning" v-if="error">{{ error }}</div>
        <button class="send" type="submit" @click.prevent="addProduct">
          Отправить
        </button>
      </form>
    </seciton>
  </Layout>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import Layout from "../components/Layout.vue";

const title = ref("");
const discount = ref();
const category = ref();
const subtitle = ref();
const oldprice = ref();
const price = ref();
const style = ref();
const country = ref();
const color = ref();
const hit = ref(false);
const error = ref();

const image = ref(null);

const setImage = (e) => {
  image.value = e.target.files[0];
};

const getImage = () => (
  URL.createObjectURL(image.value)
)

async function addProduct() {
  if (
    !title.value ||
    !category.value ||
    !price.value ||
    (discount.value && !oldprice.value)
  ) {
    error.value = "Заполните все обязательные поля";
    return;
  }

  const data = new FormData();

  data.append("title", title.value);
  data.append("discount", discount.value);
  data.append("category", category.value);
  data.append("subtitle", subtitle.value);
  data.append("oldprice", oldprice.value);
  data.append("price", price.value);
  data.append("style", style.value);
  data.append("country", country.value);
  data.append("color", color.value);
  data.append("hit", hit.value);
  data.append("img", image.value);

  error.value = "";
  
  await axios.post(
    "https://api.oboidagestan.ru/api/products", 
    data, 
    { 
      headers: 
      { 
        Authorization: localStorage.getItem("token") 
      } 
    }
  );
}
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.add-product {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .warning {
    margin-top: 15px;
    color: $main-color;
    font-size: 12px;
  }

  .product-form {
    margin-top: 20px;
    .input-field {
      display: flex;
      flex-direction: column;
      position: relative;

      img {
        margin-top: 15px;
        max-width: 100%;
        width: 100px;
        object-fit: contain;
      }

      &.required {
        &:after {
          content: "*";
          color: red;
          position: absolute;
          right: -3px;
          top: 10px;
        }
      }

      .checkbox {
        margin-top: 15px;
      }
    }
  }

  .send {
    border-radius: 50px;
    background: $main-color;
    padding: 15px 30px;
    color: white;
    max-width: 250px;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 25px;
    margin-top: 20px;
  }
}
</style>
