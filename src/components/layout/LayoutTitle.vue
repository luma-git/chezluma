<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  emoji: String
})
</script>

<template>
  <div class="title">
    <img v-if="props.title === 'Chez Luma'" src="/f5key.gif" alt="Une touche de clavier F5 animée" />
    <span v-if="props.title !== 'Chez Luma'">{{ props.emoji }}</span>
    <h1 class="accent">{{ props.title }}</h1>
    <p v-if="props.subtitle">{{ props.subtitle }}</p>
  </div>
</template>

<style scoped lang="sass">
.title
  display: flex
  flex-direction: column
  text-align: center
  margin: auto auto 50px auto
  max-width: 700px
  width: 100%

  span
    font-size: 4em

  img
    max-width: 150px
    width: 100%
    margin: auto
</style>