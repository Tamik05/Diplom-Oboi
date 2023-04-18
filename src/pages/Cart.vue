<template>
    <Layout>
        <section class="cart">
            <h2>Корзина</h2>
            <span class="primary-title" v-if="empty">
                ПОКА НИЧЕГО НЕТ
            </span>
            <div class="cart-items">
                <cart-item v-for="item in cartItems"
                    :price="item.price"
                    :image="item.image"
                    :title="item.title"
                    :id="item.id"
                    @delete-item="getCart"
                 />
            </div>
        </section>
    </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue'
import CartItem from '../components/CartItem.vue';
import { onMounted, ref } from 'vue';
const cartItems = ref([]);
const empty = ref(false);

const getCart = () => {
    console.log('cart')
    if(localStorage.getItem('cart')) {
        console.log('full')
        cartItems.value = JSON.parse(localStorage.getItem('cart'));
    } else {
        console.log('empty')
        empty.value = true;
        cartItems.value = [];
    }
}

onMounted(getCart)
</script>

<style lang="scss" scoped>
.cart {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    h2 {
        margin-left: 20px;
    }
    &-items {
        margin-left: 20px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        gap: 10px;
    }
    .primary-title {
        display: block;
        margin: 0 auto;
    }
}
</style>