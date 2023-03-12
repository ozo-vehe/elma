<script setup>
  import logo from '../assets/icons/logo.png';
  import facebook from '../assets/icons/Brand3.png';
  import twitter from '../assets/icons/Brand2.png';
  import linkedIn from '../assets/icons/Brand4.png';
  import instagram from '../assets/icons/Brand.png';
  import github from '../assets/icons/Brand5.png';

  const icons = [facebook, twitter, linkedIn, instagram, github]

  const footerMenu = [
    {
      title: "First Menu",
      features: ["Features", "Enterprise", "Security", "Customer Stories", "Pricing", "Demo"]
    },
    {
      title: "Second Menu",
      features: ["Engineering", "Financial Services", "Sales", "IT", "Customer Support", "Human Resources", "Media"]
    },
    {
      title: "Third Menu",
      features: ["Tips", "Blog", "Event", "Certified Program", "Help Center", "API", "Download Template"]
    },
    {
      title: "Fourth Menu",
      features: ["About Us", "Leadership", "News", "Media Kit", "Career", "Documentation"]
    },
  ]
</script>

<template>
  <main class="flex flex-wrap justify-center gap-4 items-top bg-custom-gray py-16">
    <div class="w-300">
      <img :src="logo" alt="Logo" />
    </div>
    <div class="w-40" v-for="(menu, index) in footerMenu" :key="index">
      <h3 class="my-2">{{ menu.title }}</h3>
      <p class="text-sm my-3" v-for="text in menu.features">{{ text }}</p>
    </div>
  </main>
  <div class="footer-icons w-full flex flex-wrap gap-4 justify-between items-center">
    <p>Elma © Copyrigth 2020, Inc. All rights reserved</p>
    <div class="w-300 flex">
      <img class="ml-5" v-for="(icon, index) in icons" :src="icon" :key="index" alt="Footer icons">
    </div>
  </div>
</template>

<style scoped>
  main {
    padding-left: 10%;
    padding-right: 10%;
  }
  main > div > img {
    width: 100px;
    height: 40px;
  }
  
  .footer-icons {
    padding: 20px 10%;
    background-color: #f1f5f8;
  }
  .footer-icons img {
    width: 25px;
    height: 25px;
  }
</style>
