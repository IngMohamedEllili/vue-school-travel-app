<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  <br />
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
</template>
