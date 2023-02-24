<script setup>
</script>

<template>
  <form>
    <h2 class="text-3xl mb-3">Welcome back</h2>
    <p class="text-gray-600 text-sm">
      Welcome our lovely user. Did you miss transaction on Elma? Don't worry, all you need to do
      is login with your username or email and password to start shopping again. If you don't have
      an account, you can register to get started with Elma.
    </p>
    
    <div class="flex flex-wrap my-4">
      <label for="emailUsername">Email or Username</label>
      <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="text" id="emailUsername" placeholder="Email or Username" />
    </div>

    <div class="flex flex-wrap my-4">
      <label for="userPassword">Password</label>
      <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="password" id="userPassword" placeholder="********" />
    </div>
        
    <div class="flex gap-2 my-8">
      <input type="checkbox" id="staySignedIn" />
      <label for="staySignedIn">Stay signed for a week</label>
    </div>

    <div class="flex justify-between items-center my-8 gap-4">
      <button class="border rounded-md bg-custom-purple text-white px-16 py-3">Login now</button>
      <p>or</p>
      <button class="border rounded-md px-12 py-3 bg-gray-200">Register</button>
    </div>
  </form>
</template>

<style scoped>
</style>