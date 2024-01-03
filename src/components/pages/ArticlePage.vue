<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useArticleStore } from '@/stores/article.ts'
  import ArticleTemplate from '@/components/templates/ArticleTemplate.vue'

  onMounted(() => {
    window.scrollTo(0, 0)
  })

  const route = useRoute()

  const articleStore = useArticleStore()
  const article = articleStore.article(Number(route.params.id))
</script>

<template>
  <ArticleTemplate :article="article" />
</template>
