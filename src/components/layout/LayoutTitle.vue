<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  emoji: String
})
</script>

<template>
  <div class="title">
    <span>{{ props.emoji }}</span>
    <h1 class="accent">{{ props.title }}</h1>
    <p v-if="props.subtitle">{{ props.subtitle }}</p>
  </div>
</template>

<style scoped lang="sass">
.title
  display: flex
  flex-direction: column
  text-align: center
  margin-bottom: 50px

  span
    font-size: 4em
</style>