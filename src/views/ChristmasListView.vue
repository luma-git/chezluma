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
  <main>
    <LayoutTitle :title="christmas.title" :subtitle="christmas.subtitle" :emoji="christmas.emoji"  />

    <div class="filter">
      <button @click="reloadItems" :class="allItems ? 'filter-btn active' : 'filter-btn'">Tout les souhaits</button>
      <button v-for="(filter, index) in christmas.filters.onPrice" :key="index" @click="filterOnPrice(filter)" :class="filter.isActive ? 'filter-btn active' : 'filter-btn'">Moins de {{ filter.filter }} €</button>
      <button v-for="(filter, index) in christmas.filters.onPreference" :key="index" @click="filterOnPreference(filter)" :class="filter.isActive ? 'filter-btn active' : 'filter-btn'">
        <span v-for="(n, index) in filter.filter" :key="index">🧡</span>
      </button>
    </div>

    <p class="items-counter">{{ items.length }} souhait{{ items.length > 1 ? 's' : '' }}</p>

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
  margin: auto
  display: flex
  flex-wrap: wrap
  gap: 15px

.filter-btn
  background-color: #0e1b26
  padding: 3px 5px
  cursor: pointer
  font-family: 'Ubuntu', sans-serif
  border: none
  border-radius: 5px
  color: #8293a1

.filter
  display: flex
  flex-wrap: wrap
  gap: 10px
  justify-content: center

.active
  background-color: #18045c

.items-counter
  text-align: center
  padding: 10px
</style>
