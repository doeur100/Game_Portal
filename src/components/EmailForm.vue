<template>
  <div class="main">
    <form @submit.prevent="sentEmail">
      <h1>Forgot Password</h1>
      <p>Enter your email address</p>
      <input v-model="email" type="email" placeholder="enter email address" />
      <div class="submit">
        <button type="submit">Continue</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
// import { useRouter } from "vue-router";
// const router = useRouter
const email = ref("");
const sentEmail = async () => {
  const Email = {
    email: email.value,
  };
  try {
    if (email.value != "") {
      const response = await axios.post(
        "http://localhost:4545/user/code_verification",
        Email
      );
      alert("Please check your email!");
      console.log("Data created successfully:", response.data);
    }else{
      alert("Please input a valid email!")
    }
    
  } catch (error) {
    console.error("Error creating data:", error);
    alert("Plese enter a valid email!")
  }
};
</script>

<style scoped>
form {
  border-top: 10px solid rgb(5, 5, 206);
  background-color: #e3e9f0;
  padding: 60px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 3%;
}
.main {
  display: flex;
  justify-content: center;
  margin-top: 10%;
}
input {
  width: 100%;
  padding: 12px 18px;
  background-color: rgb(232, 240, 254);
}
button {
  background-color: #0642c4;
  margin-top: 5px;
  color: white;
  padding: 10px;
  width: 100%;
}
.submit {
  display: flex;
  justify-content: center;
}
</style>
