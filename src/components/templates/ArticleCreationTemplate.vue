<script setup lang="ts">
  import { ref } from 'vue'

  import router from '@/router.ts'
  import { Article, useArticleStore } from '@/stores/article.ts'

  const articleStore = useArticleStore()

  const formElement = ref<HTMLFormElement | null>(null)
  const imageUrl = ref<string | null>(null)

  const postArticle = (event: SubmitEvent) => {
    const target = event.target as HTMLFormElement

    articleStore.addArticle({
      title: target.elements.title.value,
      author: target.elements.author.value,
      date: new Date(Date.now()).toISOString().split('T')[0],
      content: target.elements.content.value.split("\n").filter(paragraph => paragraph !== ""),
      image: target.elements.url.value,
    } as Article)

    router.push({name: 'ArticlePage', params: {id: articleStore.articles.length}})
  }
</script>

<template>
  <form class="flex flex-col gap-4 mx-auto w-full max-w-[768px] p-4" @submit.prevent="postArticle" :ref="formElement">
    <h1 tabindex="0" class="self-center text-3xl font-black dark:text-white">Créez votre article ici</h1>
    <p tabindex="0" class="text-gray-900 dark:text-neutral-100">
      Exprimez-vous, partagez vos idées et découvrez des perspectives variées en participant à nos discussions.
      Cette page dédiée aux posts vous offre l&rsquo;opportunité d&rsquo;engager des conversations enrichissantes avec notre communauté diversifiée.
      N&rsquo;hésitez pas à partager vos expériences, poser des questions, ou simplement échanger des idées.
      Assurons ensemble un environnement respectueux et constructif. Commencez dès maintenant à contribuer à notre communauté florissante&nbsp;!
    </p>

    <div>
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
      <input
        class="bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Par exemple, Comment j’ai créé une usine à clics en Vue.js en 1 journée"
        type="text"
        id="title"
        name="title"
        aria-label="Titre de l’article"
        required />
    </div>

    <div>
      <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Auteur</label>
      <input
        class="bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Par exemple, Jeff Bezos"
        type="text"
        id="author"
        name="author"
        aria-label="Auteur de l’article"
        required />
    </div>

    <div class="flex flex-col-reverse lg:flex-row-reverse gap-4">
      <div class="col-span-2 flex flex-col text-gray-900 dark:text-neutral-100">
        <h2 class="font-bold">Note aux utilisateurs</h2>
        <p tabindex="0" class="font-light italic">
          Merci d&rsquo;utiliser cette plateforme de manière responsable lors du téléchargement d&rsquo;images.
          Tout contenu téléchargé doit respecter les lois en vigueur et ne pas enfreindre les droits d&rsquo;auteur.
          Nous nous réservons le droit de supprimer tout contenu inapproprié ou offensant.
          En téléchargeant une image, vous confirmez détenir les droits nécessaires ou l&rsquo;autorisation pour sa publication.
          Tout manquement à ces conditions pourrait entraîner la suspension de votre compte.
          Merci de votre compréhension et de votre coopération.
        </p>
      </div>

      <div class="flex flex-col gap-1">
        <div class="relative overflow-hidden flex flex-col justify-center items-center mx-auto w-1/2 lg:w-full aspect-[1/1] bg-gray-300 border-2 border-dashed border-gray-800 rounded-2xl">
          <img class="absolute w-1/2" src="/icons/icon_photo.svg" alt="" />
          <img class="absolute object-cover h-full" :src="imageUrl" alt="" />
        </div>

        <div class="flex flex-col gap-1 items-center">
          <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lien de l’illustration</label>
          <input
            class="bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://www..."
            type="text"
            id="url"
            name="url"
            aria-label="Bannière de l’article"
            required
            v-model="imageUrl" />
        </div>
      </div>
    </div>

    <div class="flex flex-col grow">
      <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contenu</label>
      <textarea
        class="w-full min-h-32 bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Exprimez vos idées ! Même sans talent, on peut engranger un max de clics avec une accroche qui claque…"
        id="content"
        name="content"
        minlength="10"
        aria-label="Contenu de l’article"
        required />
    </div>

    <button class="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-label="Publier l’article">
      Publier
    </button>
  </form>
</template>
