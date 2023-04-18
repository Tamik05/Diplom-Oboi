<template>
    <Header />
    <section class="main">
        <Search />
        <slot></slot>
    </section>
    <Footer />
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Search from './Search.vue';
</script>

<style scoped>
.main {
    min-height: 60vh;
}
</style>