<template>
  <Header />

  <div class="m-4">
  <slot>
    
  </slot>

  </div>

  <Footer />
  <router-view></router-view>
 

</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
