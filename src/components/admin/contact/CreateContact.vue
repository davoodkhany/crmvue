<script setup>

import AlertSuccess from "../../attribute/AlertSuccess.vue";

import { useContactStore  } from "@/stores/ContactStore.js";

import { ref, onUpdated, watch , onMounted , onBeforeUpdate  } from "vue";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const ContactStore = useContactStore();

const isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}

watch(() => ContactStore.status, (newValue, oldValue) => {
    if (newValue) {
      setIsOpen(false);
     
    }
  }
)

onMounted(()=>{
  ContactStore.responibleGet
})

</script>

<template>
  <button
    type="button"
    @click="isOpen = true"
    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-tones-700 rounded-md shadow-sm hover:bg-tones-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tones-600"
  >
    افزودن شخص
  </button>

  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-10" :open="isOpen" @close="setIsOpen">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="setIsOpen(false)"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div class="mt-6">
                <form @submit.prevent="ContactStore.createContact">
                  <div class="mb-4">
                    <label
                      for="name"
                      class="flex mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >نام</label
                    >
                    <input
                      type="text"
                      v-model="ContactStore.name"
                      id="name"
                      class="block w-full p-1.5 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                    <span
                      class="text-red-500"
                      v-if="ContactStore.errors.name"
                      >{{ ContactStore.errors.name[0] }}</span
                    >
                  </div>
                  <div class="mb-4">
                    <label
                      for="family"
                      class="flex mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >نام خانوادگی</label
                    >
                    <input
                      type="text"
                      id="family"
                      v-model="ContactStore.family"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                    <span
                      class="text-red-500"
                      v-if="ContactStore.errors.family"
                      >{{ ContactStore.errors.family[0] }}</span
                    >
                  </div>
                  <div class="mb-4">
                    <label
                      for="email"
                      class="flex mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >ایمیل</label
                    >
                    <input
                      type="email"
                      id="email"
                      v-model="ContactStore.email"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                    <span
                      class="text-red-500"
                      v-if="ContactStore.errors.email"
                      >{{ ContactStore.errors.email[0] }}</span
                    >
                  </div>

                  <div class="mb-4">
                    <label
                      for="mobile"
                      class="flex mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >موبایل</label
                    >
                    <input
                      type="text"
                      id="mobile"
                      v-model="ContactStore.mobile"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      required
                    />
                    <span
                      class="text-red-500"
                      v-if="ContactStore.errors.mobile"
                      >{{ ContactStore.errors.mobile[0] }}</span
                    >
                  </div>

                  <div class="mb-4">
                    <label
                      for="responsible"
                      class="flex mb-1 text-sm font-medium text-gray-900 dark:text-white"
                      >مسئول</label
                    >
                    <select
                      id="responsible"
                      v-model="ContactStore.responsible"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option
                        v-for="contact in ContactStore.liable"
                        :key="contact.id"
                        :value="contact.id"
                      >
                        {{ contact.name }}
                      </option>
                    </select>
                    <span
                      class="text-red-500"
                      v-if="ContactStore.errors.responsible"
                      >{{ ContactStore.errors.responsible[0] }}</span
                    >
                  </div>
                  <div
                    class="flex justify-between mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
                  >
                    <button
                    
                      type="submit"
                      class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      ارسال
                    </button>
                    <button
                      type="button"
                      class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      @click="setIsOpen(false)"
                    >
                      لغو
                    </button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
   
  </TransitionRoot>
 <AlertSuccess v-if="ContactStore.toast"></AlertSuccess>
  

  
  
</template>
