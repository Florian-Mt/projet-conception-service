<template>
  <main class="flex flex-col gap-8 justify-center items-center">
    <h1 class="text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Erreur 404
    </h1>

    <p class="text-2xl font-bold leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
      Cette page n’existe pas.
    </p>

    <router-link to="{name: 'HomePage'}">
      <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Retourner à la page d’accueil
      </a>
    </router-link>
  </main>
</template>
