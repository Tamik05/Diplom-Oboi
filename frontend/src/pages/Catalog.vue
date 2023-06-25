<template>
  <Layout>
    <section class="content container catalog">
      <div class="open-filter">
        <button @click="openFilter = !openFilter">Фильтр</button>
      </div>
      <nav :class="[openFilter ? 'sidenav' : 'sidenav hidden']">
        <div class="sidenav__item column">
          <div>
            <h4>Цена</h4>
          </div>
          <div class="price">
            <input type="text" v-model="priceFrom" placeholder="От" />
            <input type="text" v-model="priceTo" placeholder="До" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Стиль</h4>
          <div class="column">
            <Checkbox category="style" name="Флористика" />
            <Checkbox category="style" name="Детские" />
            <Checkbox category="style" name="Классические" />
            <Checkbox category="style" name="Геометрия" />
            <Checkbox category="style" name="Тематика" />
            <Checkbox category="style" name="Клей для обоев" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Акции и распродажа</h4>
          <div class="column">
            <Checkbox category="discount" name="Акция" />
            <Checkbox category="hit" name="Распродажа" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Цвет</h4>
          <div class="column">
            <Checkbox category="color" name="Cалатовый" />
            <Checkbox category="color" name="Бежевый" />
            <Checkbox category="color" name="Белый" />
            <Checkbox category="color" name="Бирюзовый" />
            <Checkbox category="color" name="Бежевый светлый" />
          </div>
        </div>
        <div class="sidenav__item column">
          <h4>Страна производитель</h4>
          <div class="column">
            <Checkbox category="country" name="Англия" />
            <Checkbox category="country" name="Беларусь" />
            <Checkbox category="country" name="Бельгия" />
            <Checkbox category="country" name="Вьетнам" />
            <Checkbox category="country" name="Германия" />
          </div>
        </div>
      </nav>
      <section class="main-content">
        <div class="sort">
          <span>Сортировать по</span>
          <a href="" class="color-main link" @click.prevent="sortBy('price')"
            >Цене</a
          >
          <a href="" @click.prevent="sortBy('hit')" class="color-main link">Популярности</a>
        </div>
        <section class="cards">
          <Card
            v-for="(item, i) in paginatedData"
            :key="i"
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
        </section>
        <section class="pagination-wrapper content">
          <Pagination
            @change="(page) => selectPage(page)"
            :total="allPages"
            :page="currentPage"
          />
        </section>
      </section>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../components/Layout.vue";
import Card from "../components/Card.vue";
import Checkbox from "../components/Checkbox.vue";
import Pagination from "../components/Pagination.vue";

import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";

const currentPage = ref(1);
const paginatedData = ref();
const allPages = ref(0);
const sortDirection = ref("asc");
const sort = ref([]);
const openFilter = ref(false);

const priceFrom = ref();
const priceTo = ref();
const search = ref();

const filters = ref([]);

async function getProducts() {
  const data = await axios.get("https://api.oboidagestan.ru/api/products", {
    params: { 
      page: currentPage.value, 
      sort: JSON.stringify(sort.value), 
      filter: JSON.stringify(filters.value),
      price: JSON.stringify([priceFrom.value, priceTo.value]),
      search: search.value ?? ''
    },
  });
  paginatedData.value = data.data.rows;
  allPages.value = Math.ceil(data.data.count / 10);
}

const selectPage = (page) => {
  currentPage.value = page;
};

const sortBy = (item) => {
  sort.value = [item, sortDirection.value.toUpperCase()];
  console.log(sort.value);
  sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
};

const filterItems = () => {
  getProducts();
};

const addFilter = (filterCat, val) => {
  if (filterCat) {
    filterCat.push(val);
    return Object.values(filterCat);
  }
  return [val];
};

onMounted(() => {
  getProducts();
  const urlParams = new URLSearchParams(window.location.search);
  const filterQuery = urlParams.get('filter');
  const searchQuery = urlParams.get('search')
  /* если перешли с главной карточки каталога */
  if(filterQuery) {
    filters.value.push({ style: [filterQuery] });
    filterItems()

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes?.forEach(item => {
      if(item.value === filterQuery) {
        item.checked = 1;
      }
    })
  }
  if(searchQuery) {
    search.value = searchQuery;
    getProducts();
  }
  
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes?.forEach((item) => {
    item.addEventListener("change", (e) => {
      const val = e.target.value;
      const cat = e.target.name;
      let filterCat = filters.value.find((item) => Object.keys(item).includes(cat));
      let filterCatItems = filterCat?.[cat];
      /* выкл чекбокс */
      if (!e.target.checked && filterCat) {
        /* если есть ещё фильтры у этой категории */
        if (filterCatItems.length > 1) {
          delete filterCatItems[filterCatItems.indexOf(val)];

          filterCatItems = filterCatItems.filter(Boolean);
          filters.value[filters.value.indexOf(filterCat)] =
            {[cat]: filterCatItems};
        } else {
          /* если нет, то удаляем категорию */
          filters.value.splice(filters.value.indexOf(filterCat), 1);
        }
        filterItems();
        return;
      }
      if (filterCat) {
        filterCat = {[cat]: [...filterCat[cat], val]};
        const idx = filters.value.findIndex(item => Object.keys(item).includes(cat))
        delete filters.value[idx];
        filters.value = filters.value.filter(Boolean);
        console.log(filters.value)
        filters.value = [...filters.value, filterCat];
      } else {
        if (cat === "hit") {
          filters.value.push({ [cat]: true });
          filterItems();
          return;
        }
        filters.value.push({ [cat]: addFilter(filterCatItems, val) });
      }

      filterItems();
    });
  });
});
onBeforeRouteUpdate((to, from, next) => {
  const searchQuery = to.query.search;
  if(searchQuery && searchQuery !== search.value) {
    search.value = searchQuery;
    getProducts();
  }
})

watch([currentPage, sort, priceFrom, priceTo], getProducts);

</script>

<style lang="scss">
@import "../variables.scss";
.catalog {
  display: flex;
  justify-content: space-between;
  position: relative;
  .open-filter {
      display: none;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 90%;
        top: -20px;
        button {
          padding: 10px 0;
          width: 100%;
          color: white;
          background: $main-color;
          border-radius: 50px;
        }
      }
    }
  .main-content {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    width: 100%;
    min-height: 100%;
    flex: 0 1 auto;


    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 30px;
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
      height: 100%;

      .card {
        position: relative;
      }

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

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .sidenav {
      margin-top: 30px;
      padding: 10px 20px;
      background: #ececec;
      border-radius: 15px;
      max-width: none;
      display: flex;
      justify-content: center;
      align-items: center;

      &__item.column {
        width: 100%;

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
    &.hidden {
      display: none;
    }
  }
}
</style>
