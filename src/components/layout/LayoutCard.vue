<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  imageName: String,
  imageAlt: String,
  link: String
})
</script>

<template>
  <section class="card">
    <div class="image-container">
      <img :src="`./images/${props.imageName}`" :alt="props.imageAlt">
    </div>
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
  align-items: center
  gap: 20px

.card-content
  width: 50%
  border: 6px solid #ed9fcf
  border-radius: 10px
  background-color: #000
  color: #fff
  padding: 10px 20px

img
  height: 50px

a
  font-size: 1.2em

a:before
  content: ">"
  padding-right: 5px

.image-container
  width: 40px
</style>