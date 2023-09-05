<template>
  <div class="main">
    <form @submit.prevent="createData">
      <h2>Register</h2>
      <div class="container">
        <div class="list-field">
          <label for="">Firstname</label><br />
        
          <input
            :class="{
              valid: isValidFirstName === true,
              invalid: isValidFirstName === false,
            }"
            v-model="firstName"
            type="firstName"
            placeholder="Enter your first name*"
          />
          <div :style="{ color: isValidFirstName === false ? 'red' : '' }">
            {{ isValidFirstName === false ? "Firstname is required!" : "" }}
          </div>
        </div>

        <div class="list-field">
          <label for="">Lastname</label><br />
          <input
            :class="{
              valid: isValidLastName == true,
              invalid: isValidLastName == false,
            }"
            v-model="lastName"
            type="LastName"
            placeholder="Enter your last name*"
          />
          <div :style="{ color: isValidLastName === false ? 'red' : '' }">
          {{ isValidLastName === false ? 'Lastname is required!' : '' }}
        </div>
        </div>
      </div>

      <div class="container">
        <div class="list-field">
          <label for="">Email</label><br />
          <input
            :class="{
              valid: isValidEmail == true,
              invalid: isValidEmail == false,
            }"
            v-model="email"
            type="email"
            placeholder="Enter your email*"
          />
          <div :style="{ color: isValidEmail === false ? 'red' : '' }">
          {{ isValidEmail === false ? 'Email is required .' : '' }}
        </div>
        </div>
      </div>

      <div class="container">
        <div class="list-field">
          <label for="">Password</label><br />
          <input
            :class="{
              valid: isValidPassword == true,
              invalid: isValidPassword == false,
            }"
            v-model="password"
            type="password"
            placeholder="Enter your password*"
          />
          <div :style="{ color: isValidFirstName === false ? 'red' : '' }">
          {{ isValidPassword === false ? 'Required valid password! ' : '' }}
        </div>
        </div>

        <div class="list-field">
          <label for="">Comfirm</label><br />
          <input
            :class="{
              valid: isValidPasswordComfirm == true,
              invalid: isValidPasswordComfirm == false,
            }"
            v-model="comfirmPassword"
            type="password"
            placeholder="Comfirm password*"
          />
          <div :style="{ color: isValidFirstName === false ? 'red' : '' }">
          {{ isValidPasswordComfirm === false ? 'Required valid password!' : '' }}
        </div>
        </div>
      </div>

      <button type="submit" class="register">Sign up</button>
      <span>
        Already have account?<router-link to="/login">Login</router-link>
      </span>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import axios from "axios";
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const comfirmPassword = ref("");
const startValidation = ref(false);
const createData = async () => {
  try {
    if (
      firstName.value != "" &&
      lastName.value != "" &&
      password.value != "" &&
      email.value != "" &&
      comfirmPassword.value != ""
    ) {
      const userData = {
        first_name: firstName.value,
        last_name: lastName.value,
        password: password.value,
        email: email.value,
      };
      const response = await axios.post(
        "http://localhost:4545/user/register",
        userData, {withCredentials:true}
      );
      firstName.value = "";
      lastName.value = "";
      password.value = "";
      email.value = "";
      comfirmPassword.value = "";
      alert("Please check your email!");
      console.log("Data created successfully:", response.data);
    } else if (
      email.value == "" ||
      password.value == "" ||
      firstName.value == "" ||
      lastName.value == "" ||
      comfirmPassword.value == ""
    ) {
      startValidation.value = true;
    }
  } catch (error) {
    console.error("Error creating data:", error);
    alert("You already have account!")
  }
};
const isValidEmail = computed(() => {
  return startValidation.value
    ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    : null;
});
const isValidPassword = computed(() => {
  return startValidation.value
    ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/.test(password.value)
    : null;
});
const isValidPasswordComfirm = computed(() => {
  if (startValidation.value) {
    const passwordValue = password.value;
    const confirmPasswordValue = comfirmPassword.value;

    if (passwordValue === "" || confirmPasswordValue === "") {
      return false;
    }
    return passwordValue === confirmPasswordValue;
  } else {
    return null;
  }
});

const isValidFirstName = computed(() => {
  return startValidation.value
    ? /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(firstName.value)
    : null;
});
const isValidLastName = computed(() => {
  return startValidation.value
    ? /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(lastName.value)
    : null;
});
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  padding: 8%;
  font-family: Arial, Helvetica, sans-serif;
}
form {
  padding: 30px 60px 60px 60px;
  background-color: #e3e9f0;
  border-top: 10px solid rgb(5, 5, 206);
  border-radius: 3%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.container {
  display: flex;
  margin-right: 30px;
}
.list-field {
  margin: 22px;
}
input[type="password"],
input[type="firstName"],
input[type="LastName"],
input[type="confirmPassword"] {
  width: 110%;
  margin: 8px 0;
  padding: 12px 20px;
  background-color: rgb(232, 240, 254);
}
input[type="email"] {
  width: 230%;
  padding: 12px 20px;
  margin: 8px 0;
  background-color: rgb(232, 240, 254);
}
.register {
  background-color: #2b4aaf;
  padding: 10px;
  width: 100%;
  border: none;
  font-size: large;
  color: white;
}
.valid {
  border: 2px solid rgb(202, 216, 230);
}
.invalid {
  border: 2px solid red;
}
@media (max-width: 1200px) {
  form {
    padding: 20px;
  }
  input[type="email"] {
    width: 240%;
    padding: 10px;
    margin: 8px 0;
  }

  input[type="password"],
  input[type="firstName"],
  input[type="LastName"],
  input[type="confirmPassword"] {
    width: 118%;
    padding: 10px;
  }
  ::placeholder {
    font-size: 8px;
  }
}
@media (max-width: 800px) {
  input[type="email"] {
    width: 145%;
  }
  
}
/* @media (min-width:600px) and (max-width: 800px  ) {
  input[type="email"] {
  width: 210%;
}
} */
</style>
