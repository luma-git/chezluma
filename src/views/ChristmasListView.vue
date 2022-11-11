<script setup lang="ts">
import { useChristmas } from '@/stores/useChristmasStore'
import LayoutTitle from '@/components/layout/LayoutTitle.vue'
import LayoutCardChristmas from '@/components/layout/LayoutCardChristmas.vue'

const christmas = useChristmas().christmas
const items = christmas.list
</script>

<template>
  <main>
    <LayoutTitle :title="christmas.title" :subtitle="christmas.subtitle" :image-name="christmas.image.name" :image-alt="christmas.image.alt"  />
    <div class="cards">
      <LayoutCardChristmas
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :description="item.description"
          :price="item.price"
          :preference="item.preference"
          :link="item.link"
          :image="item.image"
      />
    </div>
  </main>
</template>

<style scoped lang="sass">
.cards
  margin-top: 5px
  display: flex
  gap: 5px
</style>
