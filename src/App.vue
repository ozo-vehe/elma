<script setup>
  import { RouterView } from 'vue-router';
  import NavbarSection from './components/NavbarSection.vue';
  import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <NavbarSection />
  <RouterView />
  <FooterSection />
</template>

<style scoped>
</style>
