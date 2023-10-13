<template>
  <main class="hero">
    <div class="hero_sign">
      <h1 class="name">
        {{ store.signData.name }}
        <span class="date">{{ store.signData.date_range }}</span>
      </h1>
      <div class="about">
        <p>
          {{ store.signData.about }}
        </p>
        <p>
          {{ store.signData.symbol }}
        </p>
        <p>
          {{ store.signData.ruling_planet }}
        </p>
      </div>
      <div class="gender">
        <div class="man">{{ store.signData.man }}</div>
        <div class="woman">{{ store.signData.woman }}</div>
      </div>
      <div class="compatibility">
        <h2>{{ store.signData.compatibility }}</h2>
      </div>
      <div class="element">
        <p>
          {{ store.signData.element }}
        </p>
      </div>

      <div class="health">
        <p>{{ store.signData.health }}</p>
      </div>
      <div class="love">
        <p>{{ store.signData.love }}</p>
      </div>
      <div class="nature">
        <p>{{ store.signData.nature }}</p>
      </div>
      <div class="relationship">
        <p>{{ store.signData.relationship }}</p>
      </div>
      <div class="atributtes">
        <div class="strengths">
          <p>{{ store.signData.strengths }}</p>
        </div>
        <div class="weaknesses">
          <p>{{ store.signData.weaknesses }}</p>
        </div>
      </div>
    </div>
  </main>
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

<style lang="scss" scoped>
.hero{
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0rem;
  .hero_sign{
    display: grid;
    gap: 2rem;
  }
}
</style>
