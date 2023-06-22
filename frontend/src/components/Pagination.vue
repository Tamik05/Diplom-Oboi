<template>
  <ul class="pagination content">
    <li
      v-for="item in total"
      @click="() => emit('change', item)"
      :class="[item === page ? 'active' : '']"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  total: Number,
  page: Number,
});
const emit = defineEmits(["change"]);
</script>

<style lang="scss">
@import "../variables.scss";
.pagination {
  display: flex;

  li {
    margin-right: 10px;
    color: $main-color;
    cursor: pointer;
    padding: 2px 8px;
    &.active {
      color: white;
      background: $main-color;
    }
    border: 1px solid $main-color;
  }
}
</style>
