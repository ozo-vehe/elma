<script setup>
  import freeShipping from '../assets/icons/Shipping.png';
  import moneyGuaranteed from '../assets/icons/Money.png';
  import customerSupport from '../assets/icons/Customer Service.png';
  import bestPrices from '../assets/icons/Badge.png';
  import SubForm from '../components/sub-components/SubForm.vue';

</script>

<template>
  <main class="flex flex-wrap justify-center gap-10 my-20">
    <div class="w-450 flex flex-wrap pt-4">
      <h1 class="w-full text-4xl font-bold">Enjoy all big benefits from Elma that you can't find in other product again</h1>
      <div class="productContainer flex flex-wrap justify-between w-full">
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

    <div class="w-500 p-4 box-border">
      <SubForm />
    </div>
  </main>
</template>

<style scoped>
  main {
    padding: 0px 12%;
  }
  .productContainer {
    padding: 40px 0px;
  }
  .productContainer div {
    box-shadow: 0px 0px 4px #F4F6F8;
    border-radius: 5px;
    width: 210px;
    padding: 10px 20px;
    margin-bottom: 30px;
  }
  .productContainer div img {
    width: 25px;
    margin-bottom: 8px;
  }
  .productContainer div p {
    font-size: 18px;
  }
  .productContainer div span {
    font-size: 14px;
    color: #afafaf;
  }
</style>