<script setup lang="ts">
  import { ref } from 'vue'

  const isMenuOpen = ref(false)
</script>

<template>
  <header>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link :to="{name: 'HomePage'}">
        <span class="block py-2 px-3 text-gray-800 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Accueil</span>
      </router-link>

      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" :aria-expanded="isMenuOpen" @click="isMenuOpen = !isMenuOpen">
        <span class="sr-only">Ouvrir le menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" role="presentation" :aria-hidden="!isMenuOpen" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" :class="{'hidden': !isMenuOpen}" id="navbar-default">
        <ul class="font-medium flex flex-col items-end p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link :to="{name: 'ArticleCreationPage'}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Créer un article
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
