<!-- <template>
    <div class="container">
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
      <div class="image">
        <img src="https://direxplay.com/images/games/WOF_Icon.png" alt="" />
      </div>
    </div>

    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
    const page = ref(1);
</script>
<style scoped>
img {
  width: 60%;
  border-radius: 10%;
  border-bottom: 5px solid #17b4e0
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 13px;

}
.image {
  margin: 30px;
  justify-content: center;
  display: flex;
  width: 19%;
  background-color: white;
  border-radius: 15px;
  border-right: 5px solid rgb(225, 27, 205);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}


@media (max-width: 1200px) {
  .image{
    width: 30%;
  } 
  img{
    width: 80%;
  }
}

@media (min-width:600px) and (max-width: 1200px  ){
  .image{
    width: 20%;
  } 
}
</style> -->


<template>
  <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
  <div
  class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://img.tapimg.net/market/images/46d627d93700b4e85c9ee4d1ce769f8d.png?imageView2/2/w/720/h/720/q/80/format/jpg/interlace/1/ignore-error/1"
        alt="Skyscrapers" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
   
  </div>
  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Technology-News/Local/Apps/App3/5bf381f62dd4f_1542685140_medium.jpg"
        alt="Los Angeles Skyscrapers" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This card has supporting text below as a natural lead-in to
        additional content.
      </p>
    </div>
    
  </div>
  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://direxplay.com/images/games/Sok_and_sao_Banner.jpg"
        alt="Palm Springs Road" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Card title
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This card has even longer content
        than the first to show that equal height action.
      </p>
    </div>
    
  </div>

</div>

</template>