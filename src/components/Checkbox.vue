<template>
    <label for=""><input type="checkbox" /> {{ name }}</label>
</template>

<script setup>
const props = defineProps({name: String})
</script>