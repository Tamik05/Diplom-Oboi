<template>
  <Layout>
    <section class="about-us container">
      <h1>О магазине</h1>
      <section class="about-us__info content">
        Наша компания производит важнейшие факторы 21 века : <br />
        <ol class="list">
          <li>Ассортимент более 100 000 товаров</li>
          <li>Высокий уровень сервиса</li>
          <li>Детальное знание продукта</li>
          <li>Индивидуальный подход и система скидок - наше КРЕДО !</li>
          <li>Комфортная обстановка и культура общения .</li>
          <li>ДОСТАВКА ПО ВСЕЙ ТЕРРИТОРИИ РФ</li>
        </ol>
        Мы всегда рады встретить Вас и оказать профессиональную помощь в
        преображении вашего интерьера. <br />
        Обои, фотообои, фрески, керамическая плитка, лепной декор, краска, свет,
        декоративные элементы, клей - все по самым выгодным ценам.
      </section>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../components/Layout.vue";
</script>

<style lang="scss" scoped>
.about-us {
  h1 {
    font-size: 22pt;
  }

  &__info {
    line-height: 40px;
    font-weight: 300;
      .list {
          margin-left: 1rem;
          list-style-type: number;
    }
  }
}
</style>
