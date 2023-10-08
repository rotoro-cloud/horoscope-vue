<template>
  <header class="header">
    <nav class="nav">
      <RouterLink class="nav_link" to="/horoscope">Horoscope</RouterLink>
      <RouterLink class="nav_link" to="/tarot">Tarot Cards</RouterLink>
      <RouterLink class="nav_link" to="/sign">Sign</RouterLink>
      <RouterLink class="nav_link" to="/numerology">Numerology</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router';
</script>

<style lang="css" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 3rem;
    .nav_link {
      text-decoration: none;
      font-size: 1.4rem;
      color: rgb(255, 255, 255);
    }

    & .nav_link:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
