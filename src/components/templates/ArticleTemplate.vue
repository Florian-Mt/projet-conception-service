<script setup lang="ts">
  import { Article } from '@/stores/articles'

  const {article} = defineProps<{
    article: Article
  }>()

  const reactions = [
    {
      message: 'You liked the article',
      icon: 'icon_like.png',
      alt: 'Pouce',
    },
    {
      message: 'You loved the article',
      icon: 'icon_heart.png',
      alt: 'Cœur',
    },
    {
      message: 'You laughed at the article',
      icon: 'icon_laugh.png',
      alt: 'Rire',
    },
    {
      message: 'You are chocked by the article',
      icon: 'icon_chocked.png',
      alt: 'Surprise',
    },
    {
      message: 'You are sad because of the article',
      icon: 'icon_sad.png',
      alt: 'Tristesse',
    },
    {
      message: 'You hated the article',
      icon: 'icon_angry.png',
      alt: 'Colère',
    },
  ]
</script>

<template>
  <nav>
    <router-link :to="{name: 'HomePage'}" class="ms-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-700 hover:text-gray-800 focus:underline dark:text-gray-200 dark:hover:text-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="rotate-180 w-3.5 h-3.5 me-2" role="presentation" aria-hidden="true" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
      Retour à la liste
    </router-link>
  </nav>

  <article class="mx-auto w-full max-w-[768px] p-4 md:p-6 lg:p-8 break-words">
    <header class="flex flex-col items-center dark:text-white">
      <img
        v-if="article.image"
        :src="article.image"
        class="w-full rounded-lg mb-4"
        alt=""
        aria-hidden="true" />

      <h1 tabindex="0" class="w-full text-3xl px-2 pb-2 dark:text-white">
        {{ article.title }}
      </h1>

      <p tabindex="0" class="w-full text-lg px-2 text-gray-700 dark:text-gray-200">
        {{ article.author }} – {{ new Date(Date.parse(article.date)).toLocaleDateString() }}
      </p>
    </header>

    <div class="mx-auto max-w-[768px] px-2 py-6 text-gray-800 dark:text-gray-100">
      <p tabindex="0" v-for="paragraph in article.content" class="mb-4">
        {{ paragraph }}
      </p>
    </div>

    <footer class="mx-auto flex gap-3 justify-center max-w-[768px]">
      <template v-for="reaction in reactions">
        <button :title="reaction.alt" @click="console.log(reaction.message)">
          <img :src="`/icons/${reaction.icon}`" alt="" class="w-8 h-8 rounded-full hover:shadow-xl hover:translate-y-[-25%] hover:scale-[1.25] transition" />
        </button>
      </template>
    </footer>
  </article>
</template>
