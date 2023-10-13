<template>
  <section class="main">
    <h1>Daily Horoscope</h1>
    <p>{{ store.horoscopeData.date }}</p>
    <p>
      {{ store.horoscopeData.horoscope }}
    </p>
  </section>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {useHoroscopeStore} from '../stores/horoscope.js';
import {onMounted} from 'vue';
const store = useHoroscopeStore();
const route = useRoute();

onMounted(() => {
  const sign=route.query.sign.toLowerCase()
  const day=route.query.day.toLowerCase()
  store.getHoroscope(sign, day);
});
</script>

<style lang="css" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-content: center;
}
</style>
