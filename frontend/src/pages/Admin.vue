<template>
  <Layout>
    <section class="admin-wrapper">
      <div class="table-wrapper container">
        <section class="buttons">
          <router-link to="/add">
            <button class="add">Добавить товар</button>
          </router-link>
        </section>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Наименование</th>
              <th>Хит</th>
              <th>Скидка</th>
              <th>Изображение</th>
              <th>Категория</th>
              <th>Подпись</th>
              <th>Старая цена</th>
              <th>Цена</th>
              <th>Стиль</th>
              <th>Цвет</th>
              <th>Страна</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.hit ? "Да" : "Нет" }}</td>
              <td>{{ item?.discount ? item.discount + "%" : "" }}</td>
              <td><img :src="`https://api.oboidagestan.ru/${item?.image}`" class="item-image" /></td>
              <td>{{ item?.category }}</td>
              <td>{{ item?.subtitle }}</td>
              <td>{{ item?.oldprice }}</td>
              <td>{{ item?.price }}</td>
              <td>{{ item?.style }}</td>
              <td>{{ item?.color }}</td>
              <td>{{ item?.country }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination :total="count" :page="page" @change="(e) => page = e"/>
    </section>
  </Layout>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import Layout from "../components/Layout.vue";
import Pagination from "../components/Pagination.vue";

const items = ref([]);
const count = ref(0);
const page = ref(1);

async function getProducts() {
  await axios
    .get("https://api.oboidagestan.ru/api/products/", {
      headers: { Authorization: localStorage.getItem("token") },
      params: {
        page: page.value,
        sort: [], 
        filter: [],
        price: [null, null],
        search: ''
    
      }
    })
    .then((data) => {
      items.value = data.data.rows;
      count.value = Math.ceil(data.data.count / 10);
    });
}
onMounted(() => {
  getProducts();
});

watch(page, getProducts);
</script>

<style lang="scss">
@import "../variables.scss";
.admin-wrapper {
  .pagination {
    justify-content: center;
  }
}
.buttons {
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
  .add {
    border-radius: 50px;
    background: $main-color;
    padding: 15px 30px;
    color: white;
    max-width: 250px;
    font-weight: bold;
    text-transform: uppercase;
  }
}

.table {
  margin: 1rem 0;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid $main-color;

  border-spacing: 0;
  color: #fff;
  font-size: 15px;
  background: #fff !important;
  table-layout: auto;
  min-width: 1065px;

  .item-image {
    max-height: 100px;
  }

  th {
    font-weight: bold;
    padding: 7px;
    background: $main-color;
    border: none;
    text-align: left;
    font-size: 15px;
    &:last-child {
      text-align: center;
    }
  }
  td {
    padding: 7px;
    border: none;
    height: 100%;
    border-top: 2px solid $main-color;
    border-bottom: 2px solid $main-color;
    font-size: 15px;
    word-break: break-all;
    vertical-align: middle;
    color: black;
  }
  tbody tr:nth-child(even) {
    background: #f8f8f8 !important;
  }

  &-wrapper {
    overflow-x: auto;
  }
}
</style>
