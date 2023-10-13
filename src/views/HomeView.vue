<template>
  <section class="hero">
    <div class="hero_context">
      <h1>Daily Horoscope</h1>
      <p>
        <i>"{{ store.dailyphraseData.daily }}"</i>
      </p>
      <div class="daily">
        <form @submit.prevent="handleSubmit">
          <select v-model="daily.sign" :style="{borderColor: error}" @change="onChangeError">
            <option value="" selected>Choose the sign</option>
            <option v-for="item in signs" :value="item">
              {{ item.charAt(0).toLocaleUpperCase() + '' + item.slice(1) }}
            </option>
          </select>
          <div class="cta">
            <button>Click</button>
          </div>
        </form>
      </div>
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
        <!-- <div class="cta"> -->

        <div class="cta">
          <a v-for="item in numeros.length" :href="'/numerology/' + item">{{
            item
          }}</a>
        </div>

        <!-- </div> -->
      </div>
      <div class="imagen"></div>
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
</template>

<script setup>
import {ref} from 'vue';
import {useHoroscopeStore} from '../stores/horoscope.js';
import {useRouter} from 'vue-router';

const store = useHoroscopeStore();
const router = useRouter();
let error = ref("white");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let signs = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces',
];
/* La api solo funciona si es con el valor today */
const daily = ref({
  sign: '',
  day: 'today',
});

const onChangeError=()=>{
  error.value=""
}

const handleSubmit = () => {
  console.log(daily.value);
  if (daily.value.sign === '') {
    return (error.value = 'red');
  }
  router.push({
    path: '/daily',
    query: daily.value,
  });
};
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
    gap: 1.3rem;

    h1 {
      text-align: center;
      font-size: 5rem;
      color: aliceblue;
    }
    p {
      text-align: center;
      font-size: 1.2rem;
      color: aliceblue;
    }

    .daily {
      text-align: center;
      padding: 1.5rem;
      select {
        padding: 0.6rem;
        border-radius: 20px;
        border: 1px solid aliceblue;
        color: aliceblue;
        background-color: transparent;
        margin: 0rem 0.3rem;
        cursor: pointer;
        transition: all 0.3s;
        option {
          color: black;
        }
      }
      select:hover {
        background-color: aliceblue;
        color: black;
      }
      button {
        width: 10%;
        background-color: transparent;
        border: 1px solid aliceblue;
        padding: 0.6rem;
        margin: 0.7rem 0.3rem;
        color: aliceblue;
        border-radius: 50px;
        transition: all 0.3s;
        cursor: pointer;
      }
      button:hover {
        background-color: aliceblue;
        color: black;
      }
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
        width: 100%;
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
