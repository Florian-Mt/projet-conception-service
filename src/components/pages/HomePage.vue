<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import HomepageTemplate from '@/components/templates/HomepageTemplate.vue'
  import NotFoundTemplate from '@/components/templates/NotFoundTemplate.vue'
  import { ARTICLES_PER_PAGE } from '@/constants'
  import { useArticleStore } from '@/stores/article'

  const articleStore = useArticleStore()
  const articles = articleStore.articles

  const route = useRoute()
  const currentPage = computed(() => Number(route.params.pageNumber || 1))
  const pagesCount = computed(() => Math.ceil(articles.length / ARTICLES_PER_PAGE))

  const currentArticles = computed(() => articles.slice((currentPage.value - 1) * ARTICLES_PER_PAGE, currentPage.value * ARTICLES_PER_PAGE))
</script>

<template>
  <HomepageTemplate v-if="currentPage <= pagesCount" :currentPage="currentPage" :pagesCount="pagesCount" :currentArticles="currentArticles" />
  <NotFoundTemplate v-else />
</template>
