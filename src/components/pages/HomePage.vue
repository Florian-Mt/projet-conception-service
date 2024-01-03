<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import HomepageTemplate from '@/components/templates/HomepageTemplate.vue'
  import NotFoundTemplate from '@/components/templates/NotFoundTemplate.vue'
  import { ARTICLES_PER_PAGE } from '@/constants'
  import { useArticleStore } from '@/stores/article'

  const articleStore = useArticleStore()

  const route = useRoute()
  const articles = computed(() => articleStore.articles)
  const currentPage = computed(() => Number(route.params.pageNumber || 1))
  const pagesCount = computed(() => Math.ceil(articles.value.length / ARTICLES_PER_PAGE))

  const currentArticles = computed(() => {
    return articles.value.slice((currentPage.value - 1) * ARTICLES_PER_PAGE, currentPage.value * ARTICLES_PER_PAGE)
  })

  const currentArticlesWithIds = computed(() => {
    return currentArticles.value.map((article, i) => {
      return {
        id: articles.value.length - ((currentPage.value - 1) * ARTICLES_PER_PAGE + i),
        article,
      }
    })
  })
</script>

<template>
  <HomepageTemplate v-if="currentPage <= pagesCount" :currentPage="currentPage" :pagesCount="pagesCount" :currentArticles="currentArticlesWithIds" />
  <NotFoundTemplate v-else />
</template>
