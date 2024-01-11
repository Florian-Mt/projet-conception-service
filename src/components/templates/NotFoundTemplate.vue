<template>
  <main class="flex flex-col gap-8 justify-center items-center">
    <h1 class="text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Erreur 404
    </h1>

    <p class="text-2xl font-bold leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
      Cette page n’existe pas.
    </p>

    <router-link :to="{name: 'HomePage'}" class="inline-flex items-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Retourner à la page d’accueil
    </router-link>
  </main>
</template>
