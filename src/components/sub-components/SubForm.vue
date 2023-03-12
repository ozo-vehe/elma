<script setup>
</script>

<template>
  <form>
    <div class="flex flex-wrap mb-8">
      <label for="emailUsername">Username or Email</label>
      <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="text" id="emailUsername" placeholder="Email or Username" />
    </div>

    <div class="flex flex-wrap mt-8">
      <label class="flex justify-between items-center w-full" for="userPassword">
        <span>Password</span>
        <span class="text-blue-700 text-sm">Forgot Password</span>
      </label>
      <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="password" id="userPassword" placeholder="********" />
    </div>
    
    <button class="w-full border rounded-md bg-custom-purple text-white px-16 py-3 mt-8">Sign In</button>
  </form>
</template>

<style scoped>
</style>