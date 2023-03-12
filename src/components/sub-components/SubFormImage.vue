<script setup>
  defineProps({
    image: String,
    headerText: String,
    bodyText: String,
  })
</script>

<template>
  <div class="after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-gray-800 after:via-gray-300/10 after:w-full after:h-full relative w-350 overflow-hidden rounded-lg min-h-500 flex flex-wrap pt-4">
    <img class="absolute top-0 left-0 w-full h-full object-cover" :src="image" alt="Signin Image">
    <div class="absolute bottom-0 left-0 w-full text-white z-10 px-8 py-10">
      <h3 class="text-3xl capitalize font-bold">{{ headerText }}</h3>
      <p class="text-sm text-gray-100/50 mt-4">{{ bodyText }}</p>
    </div>
  </div>
</template>