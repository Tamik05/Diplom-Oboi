<template>
  <div class="cart-item">
    <div class="image">
      <img :src="`https://api.oboidagestan.ru/${image}`" alt="" />
      <div class="text-wrapper">
        <span class="title">{{ title }}</span>
        <span class="price">{{ price }}</span>
      </div>
    </div>
    <div class="button-wrapper"><button class="button" @click="deleteItem">Удалить</button></div>
  </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
    price: String,
    id: String
})

const emit = defineEmits(['deleteItem'])

const dispatch = () => {
  window.dispatchEvent(new CustomEvent('changeLocalStorage'), {
      detail: {
        storage: localStorage.getItem('cart')
      }
    });
}

function deleteItem() {
    let items = JSON.parse(localStorage.getItem('cart'));
    items = items.filter(item => item.id !== props.id).filter(Boolean);
    if(items.length === 0) {
        localStorage.removeItem('cart')
        emit('deleteItem')
        dispatch()
        return;
    }
    localStorage.setItem('cart', JSON.stringify(items));
    dispatch()
    emit('deleteItem')
}
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.cart-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 150px;
    justify-content: flex-start;
    margin: 15px 0;

    img {
        max-height: 150px;
    }

    .image {
      display: flex;
      align-items: center;

      .text-wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
      }

    }
    .button-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 150px;
      margin-top: 10px;
    }

    .button {
      border-radius: 50px;
      background: $main-color;
      padding: 0 15px;
      color: white;
      max-width: 250px;
      font-weight: bold;
      text-transform: uppercase;
    }
}

</style>
