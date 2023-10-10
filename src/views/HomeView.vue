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
      <a href="/aries" class="imagen_container"
        ><div class="aries imagen_container"></div
      ></a>
      <a href="/taurus" class="imagen_container"
        ><div class="taurus imagen_container"></div
      ></a>
      <a href="/gemini" class="imagen_container">
        <div class="gemini imagen_container"></div>
      </a>
      <a href="/cancer" class="imagen_container">
        <div class="cancer imagen_container"></div>
      </a>
      <a href="/leo" class="imagen_container">
        <div class="leo imagen_container"></div>
      </a>
      <a href="/virgo" class="imagen_container">
        <div class="virgo imagen_container"></div>
      </a>
      <a href="/libra" class="imagen_container">
        <div class="libra imagen_container"></div>
      </a>
      <a href="/scorpio" class="imagen_container">
        <div class="scorpio imagen_container"></div>
      </a>
      <a href="/sagittarius" class="imagen_container">
        <div class="sagittarius imagen_container"></div>
      </a>
      <a href="/capricorn" class="imagen_container">
        <div class="capricorn imagen_container"></div>
      </a>
      <a href="/aquarius" class="imagen_container">
        <div class="aquarius imagen_container"></div>
      </a>
      <a href="/pisces" class="imagen_container">
        <div class="pisces imagen_container"></div>
      </a>
    </div>
  </section>

  <section class="numerology">
    <div class="numerology_hero">
      <div class="numerolgy_context">
        <h1>Numerology</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste
          odit perspiciatis! Earum consequuntur, molestias iusto officia fugiat
          at eum aliquam soluta expedita. Iste tenetur doloremque architecto et
          pariatur id!
        </p>
        <div class="cta">
          <a href="/numerology/1">1</a>
          <a href="/numerology/2">2</a>
          <a href="/numerology/3">3</a>
          <a href="/numerology/4">4</a>
          <a href="/numerology/5">5</a>
          <a href="/numerology/6">6</a>
          <a href="/numerology/7">7</a>
          <a href="/numerology/8">7</a>
          <a href="/numerology/9">9</a>
        </div>
      </div>
      <div class="imagen"></div>
    </div>
  </section>

  <section class="tarot">
    <div class="tarot_content">
      <h1>Tarot</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        expedita consectetur in sapiente tempore aut at nihil, nisi nulla
        cupiditate ipsum ex consequatur magni reiciendis, velit maxime nobis
        dolor aperiam.
      </p>
      <div class="cta_tarot">
        <a href="/tarot">Lanzar Cartas</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useHoroscopeStore} from '../stores/horoscope.js';
const store = useHoroscopeStore();
</script>

<style lang="scss" scoped>
$signs: aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius,
  capricorn, aquarius, pisces;

@mixin imagenFondoSigno($imagen) {
  background: url($imagen + '.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@mixin imagenFondoCta($imagen) {
  background: url($imagen);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@mixin imagenFondo($imagen) {
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url($imagen);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero {
  min-height: 100vh;
  width: 100%;
  @include imagenFondo('home.jpg');
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
      font-size: 2rem;
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

    > a {
      @each $signo in $signs {
        .#{$signo} {
          @include imagenFondoSigno($signo);
        }
      }
      .imagen_container:hover {
        transform: scaleY(20px);
      }
    }
  }
}

.numerology {
  @include imagenFondo('numerology.jpg');
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .numerology_hero {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    gap: 2rem;
    .numerolgy_context {
      display: grid;
      gap: 1.5rem;
      padding: 3rem;

      h1 {
        font-size: 3rem;
        color: aliceblue;
      }
      p {
        font-size: 1.3rem;
        color: aliceblue;
      }
      .cta {
        width: 80%;
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;

        a {
          width: 100%;
          text-align: center;
          padding: 1rem 1.7rem;
          border-radius: 50px;
          border: 1px solid aliceblue;
          background-color: transparent;
          cursor: pointer;
          color: aliceblue;
          text-decoration: none;
          transition: all 0.5s;
        }

        a:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }
  .imagen {
    -webkit-box-shadow: 3px 2px 50px 2px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: 3px 2px 50px 2px rgba(0, 0, 0, 0.46);
    box-shadow: 3px 2px 50px 2px rgba(0, 0, 0, 0.46);
    @include imagenFondoCta('numerology1.jpg');
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
}

.tarot {
  width: 100%;
  @include imagenFondo('tarot.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  .tarot_content {
    margin: 0 auto;
    width: 80%;
    display: grid;
    place-items: center;
    gap: 1.5rem;
    padding: 3rem;

    h1 {
      font-size: 3rem;
      color: aliceblue;
    }
    p {
      font-size: 1.3rem;
      color: aliceblue;
    }
    .cta_tarot {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      a {
        padding: 1rem 1.7rem;
        border-radius: 50px;
        text-decoration: none;
        border: 1px solid aliceblue;
        background-color: transparent;
        cursor: pointer;
        color: aliceblue;
        transition: all 0.5s;
      }

      a:hover {
        background-color: white;
        color: black;
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
  .numerology {
    .numerology_hero {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  .tarot {
    .tarot_content {
      text-align: center;
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
