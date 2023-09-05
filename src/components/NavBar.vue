<template>
  <div
    class="bg-white flex justify-between shadow-lg shadow-white-500/40 p-2 fixed top-0 left-0 w-full z-10"
  >
    <div class="flex items-center">
      <div class="lg:hidden block md:ml-5" v-on:click="menu">
        <svg
          class="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <div class="md:ml-2">
        <img
          src="https://direxplay.com/images/dxplogo-dark@2x.png"
          class="w-20"
          alt=""
        />
      </div>

      <div class="hidden lg:block">
        <div class="flex">
          <router-link to="/">
            <h2 class="lg:ml-10 md:ml-5">Home</h2></router-link
          >
          <h2 class="lg:ml-10 md:ml-2 ml-5">About</h2>
          <h2 class="lg:ml-10 md:ml-2 ml-5">Contact</h2>
          <router-link to="/allGame">
            <h2 class="lg:ml-10 md:ml-2 ml-5">All game</h2>
          </router-link>
        
        </div>
      </div>
    </div>

    <div class="flex items-center" id="search">
      <input
        type="text"
        class="bg-slate-300 p-2 lg:w-84 md:w-80 w-40 rounded-3xl"
        placeholder="search"
      />
    </div>
    <div class="flex">
      <v-container v-if="users != ''" fluid style="height: 40px">
        <v-row justify="center">
          <v-menu min-width="200px" rounded>
            <template v-slot:activator="{ props }">
              <div class="text-xs">
                <v-btn icon v-bind="props">
                  <img :src="users.profile" alt="" style="border-radius: 50%" />
                </v-btn>
                <p class="text-blue">
                  {{ users.first_name }} {{ users.last_name }}
                </p>
              </div>
            </template>
            <v-card>
              <v-card-text>
                <div class="mx-auto text-center p-5">
                  <div class="userImg">
                    <div class="file-input">
                      <div>
                        <img id="logout" :src="users.profile" size="60" />
                      </div>
                      <input type="file" v-on:change="handleFileChange" />
                      <h3>{{ users.first_name }} {{ users.last_name }}</h3>
                      <p class="text-caption mt-1">
                        {{ users.email }}
                      </p>
                    </div>
                  </div>
                  <v-btn
                    rounded
                    variant="text"
                    style="background-color: rgb(212, 13, 66); color: white"
                    @click="userLogout"
                  >
                    Signout
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-menu>
        </v-row>
      </v-container>
      <div v-else class="flex items-center">
        <router-link to="/register"
          ><button class="md:mr-5 ml-2 bg-blue p-2 rounded-xl">
            Signup
          </button></router-link
        >
        <router-link to="/login"
          ><button class="md:mr-5 ml-2 bg-blue p-2 rounded-xl">
            Login
          </button></router-link
        >
      </div>
    </div>
  </div>
  <div
    class="fixed top-20 left-10 z-50 bg-white bg-opacity-85 p-5 text-black lg:hidden block rounded-md shadow-2xl"
    v-if="isFound"
  >
    <router-link to="/">
      <div class="flex">
        <i class="fa fa-home"></i>
        <h2 class="ml-5">Home</h2>
      </div>
    </router-link>

    <div class="flex">
      <i class="fa fa-address-card"></i>
      <h2 class="ml-5">About</h2>
    </div>

    <div class="flex">
      <i class="fa fa-phone"></i>
      <h2 class="ml-5">Contact</h2>
    </div>
    <router-link to="/allGame">
      <div class="flex">
        <i class="fa fa-address-book"></i>
        <h2 class="ml-5">All game</h2>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const isFound = ref(false);
const users = ref("");
const newProfile = ref("");
const count = ref(0);

const getSession = async () => {
  try {
    const response = await axios.get("http://localhost:4545/user/session", {
      withCredentials: true,
    });
    users.value = response.data.data;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
const userLogout = async () => {
  try {
    await axios.post(
      "http://localhost:4545/user/logout",
      {},
      { withCredentials: true }
    );
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
};
onMounted(() => {
  getSession();
});

const menu = async () => {
  try {
    count.value += 1;
    console.log(count.value);
    if (count.value % 2 == 0) {
      isFound.value = false;
    } else {
      isFound.value = true;
    }
  } catch (error) {
    console.error(error);
  }
};

// ------------------------------------
async function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const handleFileChange = async (event: any) => {
  newProfile.value = await getBase64(event.target.files[0]);
  console.log(newProfile.value);
  axios
    .put(
      `http://localhost:4545/user/updateProfile/${users.value.user_id}`,
      { profile: newProfile.value },
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res.data);
      window.location.href = "/";
    })
    .catch((err) => {
      console.error(err);
    });
};
</script>

<style scoped>
.file-input {
  position: relative;
  display: inline-block;
}
.file-input img {
  width: 20%;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  width: 80px;
  margin-left: 20%;
}

.file-input input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 75%;
  opacity: 0;
  cursor: pointer;
}
</style>
