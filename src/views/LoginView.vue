<script setup>
  import freeShipping from '../assets/icons/Shipping.png';
  import moneyGuaranteed from '../assets/icons/Money.png';
  import customerSupport from '../assets/icons/Customer Service.png';
  import bestPrices from '../assets/icons/Badge.png';

</script>

<template>
  <main class="flex flex-wrap justify-center gap-x-7 border my-20">
    <div class="border w-450 flex flex-wrap">
      <h1 class="w-full border text-4xl font-bold">Enjoy all big benefits from Elma that you can't find in other product again</h1>
      <div class="productContainer flex flex-wrap w-full">
        <div>
          <img :src="freeShipping" alt="Free Shipping">
          <p>Free Shipping</p>
          <span>You will get free shipping from all your transactions.</span>
        </div>
        <div>
          <img :src="moneyGuaranteed" alt="Money Guaranteed">
          <p>Money Guaranteed</p>
          <span>You will get free shipping from all your transactions.</span>
        </div>
        <div>
          <img :src="customerSupport" alt="Customer Support">
          <p>Customer Support</p>
          <span>You will get free shipping from all your transactions.</span>
        </div>
        <div>
          <img :src="bestPrices" alt="Best Prices">
          <p>Best Prices</p>
          <span>You will get free shipping from all your transactions.</span>
        </div>
      </div>
    </div>

    <div class="border w-450">
      <h2>Welcome back</h2>
      <p></p>
      <form>
        <div>
          <label for="emailUsername">Email or Username</label>
          <input type="text" id="emailUsername" placeholder="Email or Username" />
        </div>

        <div>
          <label for="userPassword">Password</label>
          <input type="password" id="userPassword" placeholder="********" />
        </div>
        
        <div>
          <input type="checkbox" id="staySignedIn" />
          <label for="staySignedIn">Stay signed for a week</label>
        </div>

        <div>
          <button>Login now</button>
          <p>or</p>
          <button>Register</button>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 0px 12.5%;
    border-bottom: thin solid #F4F6F8;
  }
  .productContainer {
    border: thin solid red;
  }
  .productContainer div {
    border: thin solid red;
  }
</style>