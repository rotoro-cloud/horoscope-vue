<template>
  <main class="hero_numero">
    <div class="hero_content">
      <h1>{{ store.numerologyData.number}}</h1>
      <p>{{ store.numerologyData.desc}}</p>
    </div>
  </main>
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

<style lang="scss" scoped>

@mixin imagenFondo($imagen) {
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url($imagen);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.hero_numero{
  min-height: 100vh;
  width: 100%;
  @include imagenFondo("../../public/numerologyFondo.jpg");
  display: flex;
  justify-content: center;
  align-items: center;

  .hero_content{
    width: 90%;
    display: grid;
    place-items: center;
    gap: 3rem;
    color: aliceblue;

    h1{
      font-size: 6rem;
    }

    p{
      text-align: center;
      font-size: 2rem;
    }

  }

}
</style>
