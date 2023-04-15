<template>
  <div class="container flex justify-center mx-auto mt-20">
    <div class="w-full max-w-md" >
      <form  @submit.prevent="RegisterUser.submitForm"
        id="step-1"
v-if="RegisterUser.status != 200"
        class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
      >
        <div class="mb-4">
          <label class="block mb-2 text-sm text-gray-500" for="name">
            نام و نام خانوادگی
          </label>
          <input
            required
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none valid:border-green-500 required:border-red-300 focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            v-model="RegisterUser.name"
          />
           <span class="text-red-500" v-if="RegisterUser.errors.name">{{
            RegisterUser.errors.name[0]
          }}</span> 
        </div>

        <div class="my-6">
          <label class="block mb-2 text-sm text-gray-500" for="email"
            >ایمیل</label
          >
          <input
            required
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none valid:border-green-500 required:border-red-300 focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            v-model="RegisterUser.email"
          />
         <span class="text-red-500" v-if="RegisterUser.errors.email">{{
            RegisterUser.errors.email[0]
          }}</span> 
        </div>

        <div class="mb-4">
          <label class="block mb-2 text-sm text-gray-500" for="password"
            >پسورد</label
          >
          <input
            v-model="RegisterUser.password"
            type="password"
            min="8"
            max="40"
            required
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none valid:border-green-500 required:border-red-300 focus:outline-none focus:shadow-outline"
          />

        <span class="text-red-500" v-if="RegisterUser.errors.password">{{
          RegisterUser.errors.password[0]
          }}</span> 
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm text-gray-500" for="password"
            >تلفن</label
          >
          <input
            v-model="RegisterUser.mobile"
            type="text"
            min="8"
            max="40"
            required
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none valid:border-green-500 required:border-red-300 focus:outline-none focus:shadow-outline"
          />

        <span class="text-red-500" v-if="RegisterUser.errors.mobile">{{
          RegisterUser.errors.mobile[0]
          }}</span> 
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm text-gray-500" for="company"
            >نام شرکت</label
          >
          <input
            v-model="RegisterUser.company"
            required
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none valid:border-green-500 required:border-red-300 focus:outline-none focus:shadow-outline"
          />
          <!-- /* <span class="text-red-500" v-if="errors.company">{{
            errors.company[0]
          }}</span> */ -->
        </div>

        <div class="flex mb-4">
          <input
            type="checkbox"
            class="text-lg text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-offst-0 focus:ring-indigo-200 focus:ring-opacity-50"
          /><span class="mr-2 text-xs"
            >قوانین و مقررات دیدار را به دقت مطالعه کرده و میپذیرم
          </span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-[#00af9e] hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            ثبت نام
          </button>
        </div>
      </form>

      <!-- <div v-if="RegisterUser.status == 200" id="step">
        <MobileVerification />
      </div>  -->

    </div>
  </div>
</template>

<script setup>

import {useRegisterUser} from '@/stores/RegisterUserStore'

const RegisterUser = useRegisterUser();

</script>
