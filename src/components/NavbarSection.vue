<script setup>
  import SubNavbar from './sub-components/SubNavbar.vue';
  import logo from '../assets/icons/logo.png';
  import searchIcon from '../assets/icons/search.png';
  import cart from '../assets/icons/stroller.png';
  import like from '../assets/icons/Path.png';
  import userImg from '../assets/icons/Path1.png';
  import arrowDown from '../assets/icons/Down.png'

</script>

<template>
  <main class="pb-4">
    <SubNavbar />
    <div class="flex justify-between items-center flex-wrap mt-5">
      <div class="flex flex-wrap items-center justify-between w-600 h-12">
        <img class="w-24" :src="logo" alt="Logo">
        <div class="searchBar bg-slate-50 rounded-l flex justify-evenly h-full w-450 box-border">
          <input class="border-r bg-transparent rounded-l pl-4 w-3/4" type="text" placeholder="Search something..." />
          <select class="rounded-r bg-transparent border-r w-2/4 px-2">
            <option value="">All Categories</option>
          </select>
          <div class="searchIcon bg-black rounded flex items-center justify-center w-1/6">
            <img :src="searchIcon" alt="Search Icon" />
          </div>
        </div>
      </div>

      <div class="userAccount flex items-center justify-between">
        <div class="accountIcon flex items-center min-w-1/2 gap-x-3.5">
          <div class="icon">
            <img :src="cart" alt="Cart">
          </div>

          <div class="icon">
            <img :src="like" alt="Likes">
          </div>

          <div class="icon">
            <img :src="userImg" alt="User Image">
          </div>
        </div>

        <div class="accountDetails min-w-1/3 px-4">
          <h3>Join Elma</h3>
          <h3 class="font-bold flex items-center justify-end">
            My Account
            <img class="w-4 ml-2" :src="arrowDown" alt="Arrow Down">
          </h3>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main > div {
    padding: 0px 10%;
  }
  .userAccount {
    width: 320px;
  }
  .icon {
    border: thin solid #F4F6F8;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>