<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useArticleStore } from '@/stores/article.ts'
  import ArticleTemplate from '@/components/templates/ArticleTemplate.vue'
  import NotFoundTemplate from '@/components/templates/NotFoundTemplate.vue'

  onMounted(() => {
    window.scrollTo(0, 0)
  })

  const route = useRoute()

  const articleStore = useArticleStore()
  const articleId = Number(route.params.id)
  const article = (0 < articleId && articleId <= articleStore.articles.length) ? articleStore.article(articleId) : null
</script>

<template>
  <ArticleTemplate v-if="article" :article="article" />
  <NotFoundTemplate v-else />
</template>
