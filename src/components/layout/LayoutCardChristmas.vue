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
  <section class="card">
    <a :href="props.link" target="_blank">
      <div class="image-container" :style="`background-image: url('${props.image}')`"></div>
      <h2>{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <p class="price">Prix : {{ props.price }} €</p>
      <div class="preference">
        <p>Préférence : <span v-for="(n, index) in props.preference" :key="index">💜</span></p>
      </div>
    </a>
  </section>
</template>

<style scoped lang="sass">
.image-container
  margin-bottom: 5px
  height: 250px
  background-size: cover
  background-position: center
  filter: opacity(80%)
</style>