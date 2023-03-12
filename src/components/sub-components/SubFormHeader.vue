<script setup>
  import twitter from '../../assets/icons/twitter (2).png';
  import gmail from '../../assets/icons/Google.png';
  import facebook from '../../assets/icons/facebook.png';
  import { RouterLink } from 'vue-router'

  // Props
  defineProps({
    headerText: String,
    link: String,
    linkText: String,
  })
</script>

<template>
  <h2 class="text-3xl mb-3 flex justify-between items-center">
    <span class="font-bold">{{ headerText }}</span>
    <span class="text-sm text-blue-700"><RouterLink :to="link">{{ linkText }}</RouterLink></span>
  </h2>

  <div class="socialBtns border-b border-gray-100 flex items-center justify-between pb-12 my-8">
    <button class="bg-custom-btn-gray w-3/4 h-12 rounded-xl text-white flex items-center justify-center gap-2 py-3">
      <img class="w-7" :src="gmail" alt="GMail">
      <span>Register with Google</span>
    </button>
    <button class="w-12 flex items-center justify-center h-12 bg-custom-gray rounded-xl">
      <img :src="twitter" alt="Twitter">
    </button>
    <button class="w-12 flex items-center justify-center h-12 bg-custom-gray rounded-xl">
      <img :src="facebook" alt="Facebook">
    </button>
  </div>
</template>