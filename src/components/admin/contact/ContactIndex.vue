<template>
  <Layout>
    <template v-slot:header>
      <div class="flex justify-between"></div>
    </template>
    <div class="rounded-md">
      <div>
        <CreateContact />
      </div>

      <ul
        role="list"
        class="grid gap-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 mt-6"
      >
        <li
          v-for="person in ContactStore.contacts"
          :key="person.id"
          class="col-span-1 bg-[#f8f7fa] rounded-md shadow-md"
        >
          <a href="" class="py-10">
            <div class="flex items-center justify-between w-full px-3 pt-3">
              <div class="flex-1 truncate">
                <div class="flex items-center space-x-3">
                  <h3 class="text-sm font-medium text-gray-900 truncate ml-2">
                    {{ person.name }}
                  </h3>
                </div>
                <p class="mt-1 text-sm text-gray-500 truncate">
                  {{ person.title }}
                </p>
              </div>
              <img
                class="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
                src="../../../assets/img/profile.jpg"
                alt=""
              />
            </div>
            <div class="px-3 my-8">
              <span class="flex flex-1 text-xs hidden">{{
                person.mobile
              }}</span>
            </div>
            <div class="px-3 pb-3">
              <div class="flex justify-between">
                <div class="">
                    <span class="text-xs">{{ ContactStore.userLogin }}</span>
                </div>
                <div class="">
                  <span
                    class="rounded-full bg-tones-200 px-2 py-0.5 text-xs font-medium text-green-800"
                    >امروز</span
                  >
                  <!-- <a
                    :href="`tel:${person.telephone}`"
                    class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon
                      class="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="mr-2">شماره تماس</span>
                  </a> -->
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script setup>
import { onMounted } from "vue";
import Layout from "../layouts/Layout.vue";
import CreateContact from "./CreateContact.vue";
import { useContactStore } from "@/stores/ContactStore.js";
import { PhoneIcon } from "@heroicons/vue/20/solid";

const ContactStore = useContactStore();

onMounted(() => {
  ContactStore.getContact;
});
</script>
