<template>
  <Header />

  <div class="py-10">
    <header>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <slot name="header"></slot>
      </div>
    </header>
    <main>
      <div class="mx-auto mt-10 max-w-7xl sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="p-4  bg-[#f3f4f6] rounded-md mt-3 ">
          <slot> </slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>

  <Footer />


  
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
