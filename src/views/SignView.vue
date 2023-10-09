<template>
  <div>
    <h1>Sign {{ store.signData }}</h1>
  </div>
</template>

<script setup>
/* Extraemos el parametro de la url */
import {useRoute} from 'vue-router';
import {useHoroscopeStore} from '../stores/horoscope.js';
import {onMounted} from 'vue';
const route = useRoute();
/* console.log(route.params); */
const store = useHoroscopeStore();

onMounted(() => {
  store.getSign(route.params.sing);
});
</script>

<style lang="scss" scoped></style>
