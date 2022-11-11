<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  imageName: String,
  imageAlt: String
})
</script>

<template>
  <div class="content">
    <div class="image-container">
      <img :src="`./src/assets/images/${props.imageName}`" :alt="props.imageAlt" />
    </div>
    <div class="title">
      <h1>{{ props.title }}</h1>
      <p v-if="props.subtitle">{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped lang="sass">
.content
  display: flex
  gap: 20px
  align-items: center

.title
  border: 6px solid #ed9fcf
  border-radius: 10px
  background-color: #000
  color: #fff
  width: 100%
  padding: 10px 20px

img
  height: 50px

.image-container
  width: 40px
</style>