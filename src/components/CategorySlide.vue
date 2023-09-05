
<template>
  <div class="main">
    <v-sheet
    class="mx-auto"
    max-width="1910"
    style="background-color: white;"
  >
    <v-slide-group
      show-arrows
    >
      <v-slide-group-item
        v-for="n in items"
       
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="ma-2"
          style="background-color: #17b4e0; color: white;"
          :color="isSelected ? 'red' : undefined"
          @click="toggle"
        >
       {{ n.list }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

// Define a reactive reference to the items array
const items = ref([
  {
    list: 'Drive',
  },
  {
    list: 'Beauty',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Beauty',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Beauty',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Beauty',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Beauty',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
  {
    list: 'Bike',
  },
  {
    list: 'Car',
  },
]);

</script>

<style scoped>
.main{
  margin-top: 5%;
}
</style>




