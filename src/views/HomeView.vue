<template>
  <section class="hero">
    <div class="hero_context">
      <!-- <h1>Horoscope</h1> -->
      <p>
        <i>"{{ store.dailyphraseData.daily }}"</i>
      </p>
    </div>
  </section>
  <section class="hero_signos">
    <div class="signos">
      <a href="/aries" class="imagen_container"><div class="aries imagen_container"></div></a>
      <a href="/taurus" class="imagen_container"><div class="tauro imagen_container"></div></a>
      <div class="geminis imagen_container"></div>
      <div class="cancer imagen_container"></div>
      <div class="leo imagen_container"></div>
      <div class="virgo imagen_container"></div>
      <div class="libra imagen_container"></div>
      <div class="escorpio imagen_container"></div>
      <div class="sagitario imagen_container"></div>
      <div class="capricornio imagen_container"></div>
      <div class="acuario imagen_container"></div>
      <div class="piscis imagen_container"></div>
    </div>
  </section>
</template>

<script setup>
import {useHoroscopeStore} from '../stores/horoscope.js';
const store = useHoroscopeStore();
</script>

<style lang="scss" scoped>
$signs: aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario,
  capricornio, acuario, piscis;

@mixin imagenFondo($imagen) {
  background: url($imagen + '.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

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
    p {
      text-align: center;
      font-size: 1.7em;
      color: aliceblue;
    }
  }
}

.hero_signos {
  .signos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    > div {
      height: 100%;
    }

    .imagen_container {
      height: 600px;
      width: 100%;
    }

    > a{
      @each $signo in $signs {
        .#{$signo} {
          @include imagenFondo($signo);
        }
      }
    }
  }
}

@media (width < 900px) {
  .hero_signos {
    .signos {
      grid-template-columns: 1fr;
    }
  }
}

@media (900px < width < 1400px) {
  .hero_signos {
    .signos {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
