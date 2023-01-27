<script setup>
  import navIcon1 from '../../assets/icons/Brand.png'
  import navIcon2 from '../../assets/icons/Brand1.png'
  import navIcon3 from '../../assets/icons/Brand2.png'
  import navIcon4 from '../../assets/icons/Brand3.png'
</script>

<template>
  <main class="border flex flex-wrap justify-between items-center w-full py-4">
    <div class="flex w-52 border items-center gap-3">
      <img :src="navIcon4" alt="">
      <img :src="navIcon3" alt="">
      <img :src="navIcon2" alt="">
      <img :src="navIcon1" alt="">
    </div>

    <div class="flex border items-center gap-4">
      <p>Order tracking</p>
      <p>Help</p>
      <input class="border" type="text">
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 0px 12.5%;
  }
  main img {
    width: 20px;
  }
</style>