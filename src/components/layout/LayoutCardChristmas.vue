<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  price: Number,
  link: String,
  image: String,
  preference: Number
})
</script>

<template>
  <a :href="props.link" target="_blank">
    <section class="card">
      <div class="image-container" :style="`background-image: url('${props.image}')`"></div>
      <h2>{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <p class="price">Prix : {{ props.price }} €</p>
      <div class="preference">
        <p>Préférence : <span v-for="(n, index) in props.preference" :key="index">💜</span></p>
      </div>
    </section>
  </a>
</template>

<style scoped lang="sass">
.card
  border-radius: 10px
  width: 370px
  background-color: #241f30
  padding: 20px
  filter: opacity(30%)
  transition: filter 0.3s

  h2
    font-weight: bold
    font-size: 1.2em

.image-container
  margin-bottom: 5px
  height: 250px
  background-size: cover
  background-position: center


.card:hover

    filter: opacity(90%)
</style>