<script setup>
  import freeShipping from '../assets/icons/Shipping.png';
  import moneyGuaranteed from '../assets/icons/Money.png';
  import customerSupport from '../assets/icons/Customer Service.png';
  import bestPrices from '../assets/icons/Badge.png';
  
</script>

<template>
  <main>
    <div>
      <h1>Enjoy all big benefits fro Elma that you can't find in other product again</h1>
      <div>
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

    <div>
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