<template>
  <div class="card">
    <a href="#">
      <img
        class="image"
        :src="image"
        alt=""
      />
      <div class="name">{{ title }}</div>
      <router-link :to="`/catalog?filter=${title}`" class="btn view-btn">Посмотреть</router-link>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
})
</script>