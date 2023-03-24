<template>
  <div class="bg-gradient-to-b from-stone-300" v-if="RegisterUser.step == false">
    <div class="px-12 py-8">
      <a href="/" class="text-lg font-medium">Logo</a>
    </div>
    
    <div class="md:flex-row md:flex">
      <div class="p-6 md:ml-56 md:w-2/6 mt-14">
        
        <div class="flex justify-center">
          <div
            class="flex items-stretch justify-center w-4/5 mb-6 border-2 rounded-md border-stone-500"
          >
            <img
              src="../../../assets/fonts/svgs/brands/google.svg"
              class="w-6 mr-3"
            />
            <button class="py-2 font-bold">Continue with google</button>
          </div>
        </div>
        <div class="inline-flex items-center justify-center w-full mb-6">
          <hr class="w-full h-px my-8 bg-gray-500 border-0 dark:bg-gray-700" />
          <span
            class="absolute px-3 font-medium text-gray-900 bg-[#e5e5e596] -translate-x-2/2"
            >or</span
          >
        </div>
        <form @submit.prevent="RegisterUser.nextSignup">
          <div class="grid md:grid-cols-2 md:gap-6">
           
              <div class="relative z-0 w-full mb-6 group">
                  <input v-model="RegisterUser.first_name" type="text" name="first_name" id="first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-lime-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                  <input v-model="RegisterUser.last_name" type="text" name="last_name" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-lime-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            
            </div>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-lime-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              v-model="RegisterUser.email"
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Email address</label
            >
          </div>
          <div class="z-0 flex justify-center w-full mt-12">
            <button
              type="submit"
              class="text-black bg-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-sm text-xl w-full px-5 py-2.5 text-center dark:bg-yellow-50-600 dark:hover:bg-amber-400 dark:focus:bg-amber-400"
            >
              Next
              <i class="ml-1 fa-sharp fa-solid fa-angle-right"></i>
            </button>
          </div>
          <p class="mt-4 text-xs text-justify text-gray-400">
            We’re committed to your privacy. HubSpot uses the information you
            provide to us to contact you about our relevant content, products,
            and services. You may unsubscribe from these communications at any
            time. For more information, check out our Privacy Policy
          </p>
        </form>
      </div>
      <div class="md:w-4/6">
        <div class="flex flex-row-reverse xs:justify-center md:absolute md:bottom-32">
          <img src="../../../assets/img/signup.png" alt="signup" class="md:w-2/5 w-[58%]" />
        </div>
      </div>
    </div>
  </div>

<div  v-if="RegisterUser.step" >
  <SignupUserStep1  />
</div>
</template>

<script setup>
import SignupUserStep1 from "./SignupUserStep1.vue";
import { useRegisterUser } from "@/stores/RegisterUserStore.js";
const RegisterUser = useRegisterUser();
</script>
