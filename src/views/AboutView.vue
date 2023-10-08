<template>
  <div>
    <h1>{{ store.dailyphraseData }}</h1>
    <h2>{{ store.numerologyData }}</h2>
    <h2>{{ store.compatibilityData[0].header }}</h2>
  </div>
</template>

<script setup>
import {useHoroscopeStore} from '../stores/horoscope.js';
const store= useHoroscopeStore();
store.getNumerology()

store.getCompatibility("Libra","Aries")

</script>

<style lang="scss" scoped></style>
