<template>
  <main class="hero">
    <div class="hero_sign">
      <h1 class="name">
        {{ store.signData.name }}
      </h1>
      <p class="date">{{ store.signData.date_range }}</p>
      <div class="about">
        <p>
          {{ store.signData.about }}
        </p>
      </div>
      <div class="btn-attributes">
        <button
          v-for="(button, index) in buttonsNames"
          :key="index"
          :class="{button_selected: isSelected === index}"
          @click="() => handleShow(index, button)">
          {{ button }}
        </button>
      </div>

      <div class="characteristics">
        <div class="attributes" v-if="showAttributes === 'attributes'">
          <h1>Attributes</h1>
          <div class="strengths">
            <p>{{ store.signData.strengths }}</p>
          </div>
          <div class="weaknesses">
            <p>{{ store.signData.weaknesses }}</p>
          </div>
          <div class="compatibility">
            <h1>Compatibility</h1>
            <p>{{ store.signData.compatibility }}</p>
          </div>
        </div>
        <div class="health" v-if="showAttributes === 'health'">
          <p>{{ store.signData.health }}</p>
        </div>
        <div class="love" v-if="showAttributes === 'love'">
          <p>{{ store.signData.love }}</p>
        </div>
        <div class="nature" v-if="showAttributes === 'nature'">
          <p>{{ store.signData.nature }}</p>
        </div>
        <div class="relationship" v-if="showAttributes === 'relationship'">
          <p>{{ store.signData.relationship }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
/* Extraemos el parametro de la url */
import {useRoute} from 'vue-router';
import {useSignStore} from '../stores/sign.js';
import {onMounted, ref} from 'vue';

const route = useRoute();
const store = useSignStore();

const isLoading = ref(true);
const showAttributes = ref('');
let isSelected = ref(null);
const buttonsNames = ['Health', 'Love', 'Nature', 'Relationship', 'Attributes'];

const handleShow = (index, value) => {
  isSelected.value = index;
  showAttributes.value = value.toLowerCase();
};

onMounted(() => {
  store.getSign(route.params.sing);
  isLoading.value = false;
});
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

.hero {
  min-height: 100vh;
  @include imagenFondo('signFondo.jpg');
  display: flex;
  align-items: center;
  justify-content: center;
  .hero_sign {
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem 0rem;
    display: grid;
    gap: 1.5rem;
    color: aliceblue;
    .name {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      font-size: 3.5rem;
    }
    .date {
      text-align: center;
      font-size: 1.2rem;
    }
    .about {
      p {
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
    .btn-attributes {
      display: grid;
      grid-auto-flow: column;
      gap: 1.2rem;
      button {
        color: aliceblue;
        background-color: transparent;
        border: none;
        border: 1px solid aliceblue;
        padding: 1rem;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s;
        font-size: 1rem;
        font-weight: bold;
      }
      button:hover {
        background-color: aliceblue;
        color: black;
      }
      .button_selected {
        background-color: aliceblue;
        color: black;
      }
    }
    .characteristics {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      p{
        line-height: 1.7rem;
      }
      .attributes{
        display: grid;
        .compatibility{
          margin-top: 20px;
        }
        
      }
    }
  }
}

@media (width < 760px) {
  p,h1{
    text-align: center;
  }
  .hero {
    .hero_sign {
      .btn-attributes {
        grid-auto-flow: row;
      }
    }
  }
}
</style>
