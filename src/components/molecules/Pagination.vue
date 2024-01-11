<script setup lang="ts">
  import { computed } from 'vue'
  import { PAGINATION_GUARDING_ITEMS } from '@/constants'

  const {currentPage, pagesCount} = defineProps<{
    currentPage: number
    pagesCount: number
  }>()

  const firstItem = computed(() => Math.max(1, currentPage - PAGINATION_GUARDING_ITEMS))
  const lastItem = computed(() => Math.min(pagesCount, currentPage + PAGINATION_GUARDING_ITEMS))
  const currentItems = computed(() => Array.from({length: lastItem.value - firstItem.value + 1}, (_, i: number) => firstItem.value + i))
</script>

<template>
  <nav class="flex items-center gap-4" aria-label="Naviguer dans les pages">
    <router-link v-if="firstItem > 1" :to="{name: 'HomePage'}">
      <span href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Première page</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 rtl:rotate-180" role="presentation" aria-hidden="true" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </span>
    </router-link>

    <span v-if="firstItem > 1">⋯</span>

    <ul class="flex items-center -space-x-px h-8 text-sm">
      <li :key="i" v-for="i in currentItems">
        <router-link :to="{name: 'HomePage', params: {pageNumber: i}}">
          <span class="sr-only">Page</span>
          <span v-if="i == currentPage" class="flex items-center justify-center px-3 h-8 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-800 dark:border-gray-700 dark:text-neutral-100 dark:hover:bg-blue-700 dark:hover:text-white" aria-current="page" :class="{'rounded-s-lg': i == firstItem, 'rounded-e-lg': i == lastItem}">
            {{ i }}
          </span>

          <span v-else class="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white" :class="{'rounded-s-lg': i == firstItem, 'rounded-e-lg': i == lastItem}">
            {{ i }}
          </span>
        </router-link>
      </li>
    </ul>

    <span v-if="lastItem < pagesCount">⋯</span>

    <router-link v-if="lastItem < pagesCount" :to="{name: 'HomePage', params: {pageNumber: pagesCount}}">
      <span class="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Dernière page</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 rtl:rotate-180" role="presentation" aria-hidden="true" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </span>
    </router-link>
  </nav>
</template>
