<script setup lang="ts">
  import { Article } from '@/stores/article.ts'

  const {id, article} = defineProps<{
    id: number
    article: Article
  }>()
</script>

<template>
  <div class="max-w-sm break-words bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <router-link :to="{name: 'ArticlePage', params: {id: id}}" :title="article.title">
      <span class="sr-only">{{ article.title }}</span>
      <img class="rounded-t-lg" :src="article.image" alt="" />
    </router-link>

    <div class="flex flex-col p-5">
      <h2 class="text-xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
        <router-link :to="{name: 'ArticlePage', params: {id: id}}">
          {{ article.title }}
        </router-link>
      </h2>
      <h3 tabindex="0" class="mb-3 font-semibold text-gray-500 dark:text-gray-400">
        {{ article.author }} – {{ new Date(Date.parse(article.date)).toLocaleDateString() }}
      </h3>

      <p tabindex="0" class="mb-4 font-normal text-gray-700 dark:text-gray-200">
        {{ article.content[0].slice(0, 150) }}…
      </p>
      <router-link class="self-end" :to="{name: 'ArticlePage', params: {id: id}}">
        <span class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          En lire plus
          <svg xmlns="http://www.w3.org/2000/svg" class="rtl:rotate-180 w-3.5 h-3.5 ms-2" role="presentation" aria-hidden="true" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </span>
      </router-link>
    </div>
  </div>
</template>
