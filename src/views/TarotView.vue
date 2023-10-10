<template>
    <div>
        <h1>Tarot {{ store.tarotCardsData }}</h1>
        <div v-for="item in store.tarotCardsData.res" :key="item.id">
            {{ item.image }}
            <img :src="item.image" alt="">
        </div>
        
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import {useHoroscopeStore} from '../stores/horoscope.js';

const store = useHoroscopeStore();

onMounted(()=>{
  store.getTarotCards()
})
</script>

<style lang="scss" scoped>

</style>