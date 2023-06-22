<template>
  <Layout>
    <h1>Авторизация</h1>
    <form>
      <div class="input-field">
        Логин
        <input type="text" v-model="login" />
      </div>
      <div class="input-field">
        Пароль
        <input type="password" v-model="password" />
      </div>
      <span class="error">{{ error }}</span>
      <button type="submit" @click.prevent="submit">Войти</button>
    </form>
  </Layout>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Layout from "../components/Layout.vue";
import router from "../router";

const login = ref("");
const password = ref("");
const error = ref('');

async function submit() {
  await axios.post("http://localhost:8001/api/user/auth", {
    login: login.value,
    password: password.value,
  }).then((data) => {
    console.log(data)
    localStorage.setItem('token', data.data.token)
    error.value = "";
    router.push('/');
  }).catch(e => {
    console.log(e)
    error.value = e.response.data.message
  });
}
</script>

<style lang="scss" scoped>
@import "../variables.scss";

h1 {
  text-align: center;
  padding-top: 20px;
}

.error {
    color: $main-color;
    font-size: 12px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  .input-field {
    display: flex;
    flex-direction: column;
  }

  button {
    background: $main-color;
    color: white;
    margin-top: 20px;
    padding: 10px 30px;
    border-radius: 15px;
  }
}
</style>
