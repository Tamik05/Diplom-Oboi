<template>
  <div class="card">
    <a href="#">
      <img
        class="image"
        :src="image"
        alt=""
      />
      <div class="name">{{ title }}</div>
      <div class="btn view-btn">Посмотреть</div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
})
</script>