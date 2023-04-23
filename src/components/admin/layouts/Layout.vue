<template>
  <Header />

  <div class="py-5 bg-[#f8f7fa]">
    <header>
      <div class="px-4 mx-auto max-w-12xl sm:px-6 lg:px-8">
        <slot name="header"></slot>
      </div>
    </header>
    <main>
      <div class="mx-auto mt-1 max-w-12xl sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="shadow-md rounded-md bg-white p-6">
          <slot> </slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>

  <Footer />



<!-- 

bg-[#f8f7fa]



 -->
  
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
