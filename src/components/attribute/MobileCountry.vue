<template>
  <MazPhoneNumberInput
    v-model="RegisterUser.mobile"
    show-code-on-list
    color="info"
    :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
    :ignored-countries="['AC']"
    @update="results = $event"
    :success="results?.isValid"
    required

  />




</template>

<script setup>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import { onMounted, onUpdated, ref } from "vue";
import { useRegisterUser } from "@/stores/RegisterUserStore";

const RegisterUser = useRegisterUser();

const results = ref();




</script>

<style>

</style>
