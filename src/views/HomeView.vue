<script setup lang="ts">
import { useContent } from '@/stores/useContentStore'
import LayoutCard from '@/components/layout/LayoutCard.vue'
import LayoutTitle from '@/components/layout/LayoutTitle.vue'

const home = useContent().home
const cards = home.cards
</script>

<template>
  <LayoutTitle :title="home.title" :subtitle="home.subtitle" :emoji="home.emoji" />
  <div class="cards">
    <LayoutCard
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :description="card.description"
      :emoji="card.emoji"
      :link="card.link"
    />
  </div>
</template>

<style scoped lang="sass">

</style>
