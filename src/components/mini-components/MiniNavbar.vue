<script setup>
  import { reactive } from 'vue';
import navIcon1 from '../../assets/icons/Brand.png'
  import navIcon2 from '../../assets/icons/Brand1.png'
  import navIcon3 from '../../assets/icons/Brand2.png'
  import navIcon4 from '../../assets/icons/Brand3.png'

  const icons = reactive([navIcon4, navIcon3, navIcon2, navIcon1])
</script>

<template>
  <main class="flex flex-wrap justify-between items-center w-full">
    <div class="flex w-52 items-center gap-3 my-4">
      <img v-for="icon in icons" :src="icon" alt="">
    </div>

    <div class="flex items-center gap-5 my-4">
      <p>Order tracking</p>
      <p>Help</p>
      <input class="border" type="text">
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 0px 12.5%;
    border-bottom: thin solid #F4F6F8;
  }
  main img {
    width: 20px;
  }
  p {
    font-family: "Rubik";
    color: #637381;
  }
</style>