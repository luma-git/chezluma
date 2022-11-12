<script setup lang="ts">
import { useContent } from '@/stores/useContentStore'
import LayoutCard from '@/components/layout/LayoutCard.vue'
import LayoutTitle from '@/components/layout/LayoutTitle.vue'

const home = useContent().home
const cards = home.cards
</script>

<template>
  <LayoutTitle :title="home.title" :subtitle="home.subtitle" :image-name="home.image.name" :image-alt="home.image.alt"  />
  <div class="cards">
    <LayoutCard
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :description="card.description"
      :image-name="card.image.name"
      :image-alt="card.image.alt"
      :link="card.link"
    />
  </div>
</template>

<style scoped lang="sass">
.cards
  margin-top: 5px
</style>
