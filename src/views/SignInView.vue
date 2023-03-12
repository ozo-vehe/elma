<script setup>
  import SubForm from '../components/sub-components/SubForm.vue';
  import signInImage from '../assets/images/Image.png';
  import SubFormHeader from '../components/sub-components/SubFormHeader.vue';
  import SubFormImage from '../components/sub-components/SubFormImage.vue';
</script>

<template>
  <main class="flex relative flex-wrap justify-center gap-14 my-4 before:absolute before:top-0 before:leeft-0 before:bg-custom-gray before:w-full before:h-1/2">
    <div class="bg-white rounded-xl w-500 px-8 py-12 box-border">
      <SubFormHeader />
      <SubForm />
    </div>
    <div class="after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-gray-800 after:via-gray-300/10 after:w-full after:h-full relative w-350 overflow-hidden rounded-lg h-500 flex flex-wrap pt-4">
      <SubFormImage
        :image="signInImage"
        headerText="Crazy deals 7.7.7 free shipping all!"
        bodyText="Register now and subscribe our Newsletter to get and claim the 25% discount."
      />      
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 50px 10%;
  }
</style>