<script setup lang="ts">
import { useChristmas } from '@/stores/useChristmasStore'

const props = defineProps({
  title: String,
  description: String,
  price: Number,
  link: String,
  image: String,
  preference: Number
})

const christmas = useChristmas().christmas
</script>

<template>
  <section class="card">
    <div class="image-container" :style="`background-image: url('${props.image}')`"></div>
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <p class="price">Prix : {{ props.price }} €</p>
    <div class="preference">
      <p>Préférence : <span v-for="(n, index) in props.preference" :key="index">🧡</span></p>
    </div>
    <a :href="props.link" target="_blank">Voir le souhait</a>
  </section>
</template>

<style scoped lang="sass">
.card
  border-radius: 10px
  background-color: #0e1b26
  max-width: 370px
  width: 100%
  padding: 10px

.image-container
  margin-bottom: 5px
  height: 250px
  background-size: cover
  background-position: center
</style>