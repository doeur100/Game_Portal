<template>
  <div class="main">
    <form @submit.prevent="loginAccount">
      <h1>Login</h1>
      <input v-model="email" type="email" placeholder="Email*" />
      <input v-model="password" type="password" placeholder="Password*" />
      <div class="submit">
        <button type="submit">Login</button>
      </div>
      <span>
      <router-link to="/code_verification">Forgot password?</router-link>
      </span>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
const email = ref("");
const password = ref("");

const loginAccount = async () => {
  const userLogin = {
    email: email.value,
    password: password.value
  };
  try {
    const response = await axios.post(
      "http://localhost:4545/user/login",
      userLogin, {withCredentials:true}
    );
    window.location.href = "/";
    console.log("Data created successfully:", response.data);
  } catch (error) {
    console.error("Error creating data:", error);
    alert("Your email or password not correct!")
  }
};
</script>
<style scoped>
form {
  border-top: 10px solid rgb(5, 5, 206);
  background-color: #e3e9f0;
  padding: 60px;
  border-radius: 3%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.main {
  display: flex;
  justify-content: center;
  margin-top: 10%;
}
input {
  padding: 12px 18px;
  width: 98%;
  margin: 10px;
  background-color: rgb(232, 240, 254);
}
button {
  background-color: #0642c4;
  padding: 10px;
  width: 100%;
  margin-top: 5px;
  color: white;
}
.submit {
  display: flex;
  justify-content: center;
}
</style>
