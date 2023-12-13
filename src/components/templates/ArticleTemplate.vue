<script setup>
import {useArticleStore} from '@/stores/article.ts'
import {useRoute} from "vue-router";

const route = useRoute()

const articleStore = useArticleStore()
const article = articleStore.articles[route.params.id]
</script>

<template>

  <article class="dark:bg-gray-800 dark:border-gray-700">


    <div id="ArticleHeader" class="dark:text-white">
      <img v-if="article.image"
           :src="article.image"
           role="img"
           aria-hidden="true">

      <div  class="dark:text-white">
        <h1>{{ article.title }}</h1>
        <p>{{ article.author }} – {{ new Date(Date.parse(article.date)).toLocaleDateString() }}</p>
      </div>

    </div>

    <div id="ArticleBody" class="dark:text-white">
      {{ article.content[0] }}
    </div>

    <div id="ArticleFooter">
      <div></div>
      <div id="Reactions">
        <button onclick="console.log('You liked the article')">
          <img src="../../assets/icon_like.png" role="img" alt="thumb up to like content">
        </button>
        <button onclick="console.log('You loved the article')">
          <img src="../../assets/icon_heart.png" role="img" alt="heart to love content">
        </button>
        <button onclick="console.log('You laugth of the article')">
          <img src="../../assets/icon_laugh.png" role="img" alt="laugh to funny content">
        </button>
        <button onclick="console.log('You are chocked by the article')">
          <img src="../../assets/icon_chocked.png" role="img" alt="surprised by the content">
        </button>
        <button onclick="console.log('You are sad because of the article')">
          <img src="../../assets/icon_sad.png" role="img" alt="sad to sympathise with content">
        </button>
        <button onclick="console.log('You hated the article')">
          <img src="../../assets/icon_angry.png" role="img" alt="angry to hate content">
        </button>
      </div>
      <router-link :to="{name: 'HomePage'}">
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Retour
        </button>
      </router-link>
    </div>

  </article>

</template>


<style scoped>

article {
  height: 75vh;
  width: 75%;

  box-shadow: 0 0 5px grey;
  border-radius: 1vh;

  padding: 2vh;
  margin: 5vh 0;

  align-self: center;
}

#ArticleHeader {
  height: 33vh;

  display: flex;
  flex-wrap: nowrap;

  align-items: center;
}

#ArticleHeader img {
  height: inherit;
  width: 33%;

  margin-right: 2.5vh;

  border-radius: 1vh;
  box-shadow: inherit;

  object-fit: cover;
}

#ArticleHeader h1 {
  font-size: xxx-large;
  width: 100%;
}

#ArticleHeader sub {
  width: 100%;
}

#ArticleBody {
  margin: 5vh 0;
  height: 20vh;
}


#ArticleFooter {
  height: 5vh;

  display: flex;
  justify-content: space-between;

  position: static;
  bottom: 0;

  align-items: center;
}

#Reactions {
  width: 50vh;
  display: flex;
  justify-content: space-around;
}

#Reactions img {
  height: 5vh;
  border-radius: 100%;
}

#Reactions img:hover {
  height: 6vh;
  box-shadow: 0 0 15px crimson;
}

</style>

