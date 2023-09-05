<template>
  <div class="main">
    <form @submit.prevent="resetPassword">
      <h1>Reset password</h1>
      <p>Please change your password</p>
      <div>
        <input v-model="code" type="text" placeholder="code*" />
      <input v-model="password" type="password" placeholder="password*" />
      <input
        v-model="comfirmPassword"
        type="password"
        placeholder="comfirm password*"
      />
      </div>
     
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const code = ref("");
const password = ref("");
const comfirmPassword = ref("");
const resetPassword = async () => {
  const resetPasswordList = {
    code_verification: code.value,
    password: password.value,
    comfirmPassword: comfirmPassword.value,
  };
  if(code.value != "" && password.value != "" && comfirmPassword.value != ""){
    axios
    .post("http://localhost:4545/user/reset", resetPasswordList)
    .then((response) => {
      router.push("/");
      alert("You change password is success!")
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error.response);
      alert("Please input a valid information!")
    });
  }else{
    alert("Please input all information!")
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
span {
  font-size: 12px;
  color: red;
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
