<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  emoji: String,
  link: String
})
</script>

<template>
  <section class="card">
    <span>{{ props. emoji }}</span>
    <div class="card-content">
      <h2>{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <RouterLink :to="`/${props.link}`">Découvrir</RouterLink>
    </div>
  </section>
</template>

<style scoped lang="sass">
.card
  display: flex
  background-color: #0e1b26
  max-width: 400px
  width: 100%
  border-radius: 10px
  padding: 10px
  gap: 10px

  span
    font-size: 2em

.card-content
  display: flex
  flex-direction: column
</style>