<template>
  <Layout>
    <template v-slot:header>
        <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900">اشخاص</h2>  
    </template>
     
<div class="p-4 bg-[#f3f4f6] rounded-md mt-3 ">
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="person in people" :key="person.email" class="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
      <div class="flex flex-col flex-1 p-8">
        <img class="flex-shrink-0 w-32 h-32 mx-auto rounded-full" :src="person.imageUrl" alt="" />
        <h3 class="mt-6 text-sm font-medium text-gray-900">{{ person.name }}</h3>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">Title</dt>
          <dd class="text-sm text-gray-500">{{ person.title }}</dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span class="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">{{ person.role }}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="flex -mt-px divide-x divide-gray-200">
          <div class="flex flex-1 w-0">
            <a :href="`mailto:${person.email}`" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500">
              <EnvelopeIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="flex flex-1 w-0 -ml-px">
            <a :href="`tel:${person.telephone}`" class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
              <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
  </Layout>
</template>

<script setup>
import Layout from "../layouts/Layout.vue";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
const people = [
  {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
    {
    name: 'داود خانی',
    title: 'Regional Paradigm Technician',
    role: 'داود خانی',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  
  // More people...
]


</script>
