<template>
  <div>{{store.numerologyData}}</div>
</template>

<script setup>
import { onMounted } from 'vue';
import {useHoroscopeStore} from '../stores/horoscope.js';
import { useRoute } from 'vue-router';
const store = useHoroscopeStore();
const route=useRoute()
/* console.log(route.params.id); */

onMounted(()=>{
  store.getNumerology(route.params.id)
})


</script>

<style lang="scss" scoped></style>
