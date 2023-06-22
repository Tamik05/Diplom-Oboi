<template>
    <label> 
        <input :value="name" :name="category" type="checkbox" /> {{ name }}
    </label>
</template>

<script setup>
const props = defineProps({ name: String, category: String });
</script>
