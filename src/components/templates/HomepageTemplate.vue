<script setup lang="ts">
  import { Article } from '@/stores/articles'
  import Pagination from '@/components/molecules/Pagination.vue'
  import Card from '@/components/molecules/Card.vue'

  const {currentPage, pagesCount, currentArticles} = defineProps<{
    currentPage: number
    pagesCount: number
    currentArticles: Array<Article>
  }>()
</script>

<template>
  <main class="flex flex-col px-4 py-4 gap-4 justify-center items-center">
    <Pagination :currentPage="currentPage" :pagesCount="pagesCount" />

    <section class="flex flex-col md:grid md:grid-cols-2 gap-4 px-8 py-4 grow">
      <Card v-for="{id, article} in currentArticles" :key="id" :id="id" :article="article" />
    </section>

    <Pagination :currentPage="currentPage" :pagesCount="pagesCount" />
  </main>
</template>
