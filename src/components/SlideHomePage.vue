
<template>
    <v-carousel
    class="main"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(slide, i) in items"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
        >
          <div class="d-flex fill-height justify-center align-center">
            <img src="https://direxplay.com/assets/34436-Character2x--1---1-.png" alt="">
            <img :src="slide.src" alt="Slide Image" />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- <div>
      <h1>Wellcome</h1>
    </div> -->
  </template>
<script>
export default {
  data () {
    return {
      colors: [
        'white',
      ],
     
      items: [
          {
            src: 'https://www.khmertimeskh.com/wp-content/uploads/2021/04/WoF-online.jpg',
          },
          {
            src: 'https://www.khmertimeskh.com/wp-content/uploads/2021/04/WoF-new-season.jpg',
          },
          {
            src: 'https://direxplay.com/images/welcome.png',
          },
          {
            src: 'https://lh3.googleusercontent.com/p/AF1QipMkzMdcLYPj4m4v2iMlsSR42zm05iEzsMeXdd21=w1080-h608-p-no-v0',
          },
          {
            src: 'https://direxplay.com/images/games/ChasingZombie_Banner.jpg',
          },
        ],
    }
  },
}
</script>

<style scoped>

 .image{
    display: flex;
    justify-content: center;
    padding: 20px;
    transition: none 0s ease 0s;
 }
 img{
    width: 44%;
 }
 h1{
  text-align: center;
  color: white;
  background-color: #17b4e0;
  border-top: 5px solid rgb(225, 27, 205);
 }

 @media (max-width: 1200px) {
  img{
    margin-top: 10%;
    width: 60%;
  }
  
}
</style>