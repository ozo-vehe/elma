<script setup>
  import signInImage from '../assets/images/Image1.png';
  import SubFormHeader from '../components/sub-components/SubFormHeader.vue';
  import SubFormImage from '../components/sub-components/SubFormImage.vue';
  import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
</script>

<template>
  <main class="flex relative flex-wrap justify-center gap-14 my-4 before:absolute before:top-0 before:leeft-0 before:bg-custom-gray before:w-full before:h-1/2">
    <div class="bg-white rounded-xl w-500 p-8 box-border">
      <SubFormHeader headerText="Register to Elma" link="/signin" linkText="Sign in here" />
      <form>
        <div class="flex justify-center items-center gap-4 mb-4">
          <div class="w-1/2">
            <label for="name">Your name</label>
            <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="text" id="name" placeholder="Firstname Lastname" required>
          </div>
          <div class="w-1/2">
            <label for="email">Email</label>
            <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="eamil" id="email" placeholder="name@gmail.com" required>
          </div>
        </div>

        <div class="mb-4">
          <label for="number">Phone number</label>
          <!-- <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="tel" id="number"> -->
          <MazPhoneNumberInput
            v-model="phoneNumber"
            show-code-on-list
            color="primary"
            placeholder="000 000 000 000"
            no-example
          />
        </div>
        
        <div class="flex justify-center items-center gap-4 mb-4">
          <div class="w-1/2">
            <label for="password">Password</label>
            <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="password" id="password" placeholder="********" required>
          </div>
          <div class="w-1/2">
            <label for="rPassword">Repeat password</label>
            <input class="outline-none mt-1 pl-4 w-full h-12 rounded-md border bg-white" type="password" id="rPassword" placeholder="********" required>
          </div>
        </div>

        <div class="mb-4 flex gap-2">
          <input type="checkbox" id="checkbox">
          <label for="checkbox">Agree about Terms & Privacy on Elma</label>
        </div>

        <button class="w-full border rounded-md bg-custom-purple text-white px-16 py-3 mt-4">Create Elma Account</button>
      </form>
    </div>
    <div class="after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-gray-800 after:via-gray-300/10 after:w-full after:h-full relative w-350 overflow-hidden rounded-lg min-h-500 flex flex-wrap">
      <SubFormImage
        :image="signInImage"
        headerText="Discount 25% for New Member"
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