<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!--<RouterLink to="/about">A propos</RouterLink>-->
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped lang="sass">
nav
  display: flex
  justify-content: center
  gap: 20px

nav a
  padding: 5px 10px 5px 10px
</style>
