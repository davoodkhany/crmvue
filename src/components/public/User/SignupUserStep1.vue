<template>
  <div class="bg-gradient-to-b from-stone-300">
    <div class="px-12 py-8">
      <a href="/" class="text-lg font-medium">Logo</a>
    </div>
    <div class="flex flex-row">
      <div class="p-6 md:ml-56 md:w-2/6 mt-14">
        <form @submit.prevent="RegisterUser.submitForm">
          <div class="z-0 w-full mb-6 group">
            <MobileCountry/>
          </div>
      
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              id="password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-lime-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              v-model="RegisterUser.password"
            />
            <label
              for="password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Password</label
            >
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input
              type="company"
              name="company"
              id="company"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-lime-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              v-model="RegisterUser.company"
            />
            <label
              for="company"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Company</label
            >
          </div>

          <div class="z-0 flex justify-center w-full mt-12">
            <button

       
              type="submit"
              
              class="text-black bg-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-sm text-xl w-full px-5 py-2.5 text-center dark:bg-yellow-50-600 dark:hover:bg-amber-400 dark:focus:bg-amber-400"
            >
            Sign up
              <i class="ml-1 fa-sharp fa-solid fa-angle-right"></i>
            </button>
          </div>
        </form>
      </div>
      <div class="md:w-4/6">
        <div
          class="flex flex-row-reverse xs:justify-center md:absolute md:bottom-32"
        >
          <img
            src="../../../assets/img/signup-2.png"
            alt="signup"
            class="md:w-3/5 w-[58%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MobileCountry from "../../attribute/MobileCountry.vue";

import { useRegisterUser } from "@/stores/RegisterUserStore";

const RegisterUser = useRegisterUser();


</script>

<style>
.m-input-wrapper{
  border-radius: unset !important;
  background-color: #ebeae9 !important;
  border: none !important;
  border-bottom: 0.625rem;
}

.m-select-list{
  background-color: #ebeae9 !important;
}


.m-phone-number-input__input:focus{
outline: unset !important;
border: unset !important;
background-color: #ebeae9 !important;
}

.m-phone-number-input{
  border-bottom:2px solid #365314 !important;
}
</style>
