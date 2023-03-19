<template>
  <Header />
  <slot>
    
  </slot>

  <Footer />
  <router-view></router-view>
 

</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
