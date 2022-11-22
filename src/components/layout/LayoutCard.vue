<script setup lang="ts">
import router from '@/router'

const props = defineProps({
  title: String,
  description: String,
  emoji: String,
  link: String
})
</script>

<template>
  <section class="card">
    <h2 class="accent">{{ props.title }} <span>{{ props. emoji }}</span></h2>
    <p>{{ props.description }}</p>
    <router-link :to="`${props.link}`">
      <button class="accent-btn">
        Découvrir
      </button>
    </router-link>
  </section>
</template>

<style scoped lang="sass">
.card
  background-color: #241f30
  max-width: 375px
  width: 100%
  border-radius: 10px
  padding: 20px 27px

  h2
    font-weight: bold
    font-size: 1.2em

  p
    margin: 5px auto 10px auto
</style>