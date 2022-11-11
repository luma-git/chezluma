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
      <p>Préférence :</p>
      <div>
        <img v-for="(n, index) in props.preference" :src="`./src/assets/images/${christmas.preferenceImage}`" alt="" :key="index" />
      </div>
    </div>
    <a :href="props.link" target="_blank">Me faire plaisir</a>
  </section>
</template>

<style scoped lang="sass">
.card
  max-width: 300px
  width: 100%
  border: 6px solid #ed9fcf
  border-radius: 10px
  background-color: #000
  color: #fff
  padding: 10px 20px

  .price, .preference
    font-size: 1.1em

  .preference img
    width: 18px

  .preference
    display: flex
    gap: 5px

  .preference p + div
    display: flex
    align-items: center
    gap: 2px

.image-container
  border: #fff 2px solid
  border-radius: 5px
  margin-bottom: 5px
  height: 180px
  background-size: cover
  background-position: center

a
  font-size: 1.2em

a:before
  content: ">"
  padding-right: 5px
</style>