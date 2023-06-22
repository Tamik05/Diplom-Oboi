<template>
    <Layout>
        <section class="cart">
            <h2>Корзина</h2>
            <span class="primary-title" v-if="empty">
                ПОКА НИЧЕГО НЕТ
            </span>
            <div class="cart-items">
                <div class="items-main">
                    <cart-item v-for="item in cartItems"
                        :price="item.price"
                        :image="item.image"
                        :title="item.title"
                        :id="item.id"
                        @delete-item="getCart"
                     />
                </div>
                <div class="create-order">
                    <button class="button"><a target="_blank" href="https://wa.me/890000000">Купить</a></button>
                </div>
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
    if(localStorage.getItem('cart')) {
        cartItems.value = JSON.parse(localStorage.getItem('cart'));
    } else {
        empty.value = true;
        cartItems.value = [];
    }
}

onMounted(getCart)
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.cart {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    h2 {
        margin-left: 20px;
    }
    &-items {
        display: flex;
        gap: 50px;
        align-items: flex-start;

    }
    .create-order {
        max-width: 40%;
        width: 100%;
        .button {
            border-radius: 50px;
            background: $main-color;
            padding: 15px 30px;
            color: white;
            max-width: 250px;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
    &-items .items-main{
        margin-left: 20px;
        display: flex;
        flex-wrap: wrap;
        max-width: 50%;
        margin-top: 20px;
        gap: 10px;
    }
    .primary-title {
        display: block;
        margin: 0 auto;
    }
}
</style>