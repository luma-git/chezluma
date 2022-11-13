<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useContent } from '@/stores/useContentStore'

const content = useContent()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><img src="../public/images/dog.png" alt="Retour à l'accueil" /><span>Home</span></RouterLink>
        <!--<RouterLink to="/about">A propos</RouterLink>-->
      </nav>
    </div>
  </header>
  <main>
    <h1>{{ content.app.title }}</h1>
    <RouterView />
  </main>
</template>

<style scoped lang="sass">
nav
  display: flex
  justify-content: center
  gap: 20px

nav a
  padding: 5px 10px 5px 10px
  font-size: 1.3em
  display: flex
  gap: 5px
  align-items: center

  img
    height: 27px

h1
  text-align: center
  font-size: 5em
  text-transform: uppercase
  font-style: italic
  background: -webkit-linear-gradient(-90deg, rgba(233,0,255,1) 0%, rgba(79,0,255,1) 50%, rgba(0,25,84,1) 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  line-height: 0.6
  margin: 20px auto 30px auto
</style>
