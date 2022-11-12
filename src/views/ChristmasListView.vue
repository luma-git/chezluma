<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useChristmas } from '@/stores/useChristmasStore'
import LayoutTitle from '@/components/layout/LayoutTitle.vue'
import LayoutCardChristmas from '@/components/layout/LayoutCardChristmas.vue'

interface Item {
  title: string,
  description: string,
  price: number,
  preference: number,
  link: string,
  image: string
}

type Items = Item[]

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
    <LayoutTitle :title="christmas.title" :subtitle="christmas.subtitle" :image-name="christmas.image.name" :image-alt="christmas.image.alt"  />

    <div class="filter">
      <button @click="reloadItems" :class="allItems ? 'filter-btn active' : 'filter-btn'">Tout les souhaits</button>
      <button v-for="(filter, index) in christmas.filters.onPrice" :key="index" @click="filterOnPrice(filter)" :class="filter.isActive ? 'filter-btn active' : 'filter-btn'">Moins de {{ filter.filter }} €</button>
      <button v-for="(filter, index) in christmas.filters.onPreference" :key="index" @click="filterOnPreference(filter)" :class="filter.isActive ? 'filter-btn active' : 'filter-btn'">
          <img v-for="(n, index) in filter.filter" :src="`./src/assets/images/${christmas.preferenceImage}`" alt="" :key="index" />
      </button>
    </div>

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

.filter-btn
  background-color: #ed9fcf
  padding: 5px
  font-family: 'VT323', monospace
  font-size: 1.1em
  display: flex
  gap: 2px

  img
    width: 18px

.filter
  display: flex
  gap: 3px
  justify-content: space-between
  margin-top: 5px

.active
  background-color: #ed34a6
</style>
