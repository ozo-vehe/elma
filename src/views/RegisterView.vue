<script setup>
  import signInImage from '../assets/images/Image1.png';
  import SubFormHeader from '../components/sub-components/SubFormHeader.vue';
  import SubFormImage from '../components/sub-components/SubFormImage.vue';
</script>

<template>
  <main class="flex relative flex-wrap justify-center gap-14 my-4 before:absolute before:top-0 before:leeft-0 before:bg-custom-gray before:w-full before:h-1/2">
    <div class="bg-white rounded-xl w-500 p-8 box-border">
      <SubFormHeader headerText="Register to Elma" link="/signin" linkText="Sign in here" />
      <form>
        <div>
          <div>
            <label for="name">Your name</label>
            <input type="text" id="name" placeholder="Firstname Lastname" required>
          </div>
          <div>
            <label for="email">Your name</label>
            <input type="eamil" id="email" placeholder="name@gmail.com" required>
          </div>
        </div>

        <div>
          <label for="number">Phone number</label>
          <input type="tel" id="number">
        </div>
        
        <div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="********" required>
          </div>
          <div>
            <label for="rPassword">Repeat password</label>
            <input type="password" id="rPassword" placeholder="********" required>
          </div>
        </div>

        <div>
          <input type="checkbox" id="checkbox">
          <label for="checkbox">Agree about Terms & Privacy on Elma</label>
        </div>

        <button>Create Elma Account</button>
      </form>
    </div>
    <div class="after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-gray-800 after:via-gray-300/10 after:w-full after:h-full relative w-350 overflow-hidden rounded-lg h-500 flex flex-wrap">
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