<template>
        <button
          type="button" @click="open = true"
          class="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          افزودن شخص
        </button>

        <TransitionRoot as="template" :show="open">
          <Dialog as="div" class="relative z-10" @close="open = true">
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
                    <div
                      class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block"
                    >
                      <button
                        type="button"
                        class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        @click="open = false"
                      >
                        <span class="sr-only">Close</span>
                        <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div class="sm:flex sm:items-start">content</div>
                    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        @click="open = false"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                        @click="open = false"
                      >
                        Cancel
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const open = ref(false);
</script>
