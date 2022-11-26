<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useChristmas } from '@/stores/useChristmasStore'
import LayoutTitle from '@/components/layout/LayoutTitle.vue'
import LayoutCardChristmas from '@/components/layout/LayoutCardChristmas.vue'
import type { Items } from '@/types/christmas'

const store = useChristmas()
const christmas = store.christmas

const items = ref<Items>([])

onMounted(() => {
  items.value = christmas.list
})

const allItems = ref(true)
function reloadItems() {
  items.value = christmas.list
  reinitializeFilters()
  allItems.value = true
}

function reinitializeFilters() {
  for (let i = 0; i < christmas.filters.onPrice.length; i++) {
    christmas.filters.onPrice[i].isActive = false
  }
  for (let i = 0; i < christmas.filters.onPreference.length; i++) {
    christmas.filters.onPreference[i].isActive = false
  }
}

function filterOnPrice(filter: { filter: number, isActive: boolean }) {
  items.value = []
  allItems.value = false
  reinitializeFilters()
  filter.isActive = true
  for (let i = 0; i < christmas.list.length; i++) {
    if (christmas.list[i].price < filter.filter) {
      items.value.push(christmas.list[i])
    }
  }
}

function filterOnPreference(filter: { filter: number, isActive: boolean }) {
  items.value = []
  allItems.value = false
  reinitializeFilters()
  filter.isActive = true
  for (let i = 0; i < christmas.list.length; i++) {
    if (christmas.list[i].preference === filter.filter) {
      items.value.push(christmas.list[i])
    }
  }
}
</script>

<template>
  <LayoutTitle :title="christmas.title" :subtitle="christmas.subtitle" :emoji="christmas.emoji"  />

  <div class="filter">
    <button @click="reloadItems" :class="allItems ? 'filter-btn active' : 'filter-btn'">Tous les souhaits</button>
    <button v-for="(filter, index) in christmas.filters.onPrice" :key="index" @click="filterOnPrice(filter)" :class="filter.isActive ? 'filter-btn active' : 'filter-btn'">Moins de {{ filter.filter }} €</button>
    <button v-for="(filter, index) in christmas.filters.onPreference" :key="index" @click="filterOnPreference(filter)" :class="filter.isActive ? 'filter-btn active' : 'filter-btn'">
      <span v-for="(n, index) in filter.filter" :key="index">💜</span>
    </button>
  </div>

  <p class="items-counter accent">{{ items.length }} souhait{{ items.length > 1 ? 's' : '' }}</p>

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
</template>

<style scoped lang="sass">
.filter-btn
  background-color: #000
  padding: 10px 15px
  cursor: pointer
  font-family: 'Ubuntu', sans-serif
  border: none
  border-radius: 30px
  color: #fff

.filter
  display: flex
  flex-wrap: wrap
  gap: 10px
  justify-content: center

.active
  background-image: linear-gradient(to right top, #260145, #460f57, #652169, #85347b)

.items-counter
  text-align: center
  padding: 10px
</style>
