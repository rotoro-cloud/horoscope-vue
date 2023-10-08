<template>
  <section class="hero">
    <div class="hero_context">
      <!-- <h1>Horoscope</h1> -->
      <p>
        <i
          >"{{store.dailyphraseData.daily}}"</i
        >
      </p>
    </div>
  </section>
</template>

<script setup>
import {useHoroscopeStore} from '../stores/horoscope.js';
const store = useHoroscopeStore();
</script>

<style lang="css" scoped>
.hero {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url('/home.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .hero_context {
    margin: 0 auto;
    width: 90%;
    display: grid;
    grid-template-rows: max-content max-content;
    gap: 3rem;

    /* & h1 {
      text-align: center;
      font-size: 5rem;
      color: aliceblue;
    } */
    & p {
      text-align: center;
      font-size: 1.7em;
      color: aliceblue;
    }
  }
}
</style>
