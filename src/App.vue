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
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="sass">
nav
  display: flex
  justify-content: right
  gap: 20px

nav a
  padding: 5px 10px 5px 10px
  font-size: 1.3em
  display: flex
  gap: 5px
  align-items: center

nav a:hover
  color: #d285de
</style>
