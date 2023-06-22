<template>
  <router-view></router-view>
  <button @click="up" v-if="showBtn" class="button-up">Наверх</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
const showBtn = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
      showBtn.value = true;
      return;
    }
    showBtn.value = false;
  })
})
const up = () => {
  window.scrollTo(0, 0)
}
</script>

<style scoped lang="scss">
.button-up {
  display: flex;
  padding: .5rem 1rem;
  position: fixed;
  z-index: 1;
  bottom: 10px;
  color: white;
  right: 0;
  background: green;
  border-radius: 15px;
}
</style>