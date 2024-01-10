<script setup lang="ts">
  import {Input} from "postcss";

  function onInput(e: Event) {
    let event = e as InputEvent
    let target = event.target as HTMLInputElement
    if (target == null) return
    let image = document.getElementById("image") as HTMLImageElement
    image.src = target.value
    image.onload = imageLoaded
    image.onerror = imageError
  }

  function imageLoaded() {
    let image = document.getElementById("image") as HTMLImageElement
    image.className = ""
  }

  function  imageError() {
    let image = document.getElementById("image") as HTMLImageElement
    image.className = "w-12"
    image.src = "`/icons/icon_photo.svg`"
  }

</script>

<template>

<form class="w-full mx-auto max-w-screen-xl p-4 flex flex-col gap-4 grow">
  <h1 class="self-center font-black text-3xl" tabindex="0"> Créer votre post ici</h1>

  <p tabindex="0">
    Exprimez-vous, partagez vos idées et découvrez des perspectives variées en participant à nos discussions.
    Cette page dédiée aux posts vous offre l'opportunité d'engager des conversations enrichissantes avec notre communauté diversifiée.
    N'hésitez pas à partager vos expériences, poser des questions, ou simplement échanger des idées.
    Assurons ensemble un environnement respectueux et constructif. Commencez dès maintenant à contribuer à notre communauté florissante !
  </p>

  <div>
    <h3> Title :</h3>
    <input type="text"
           name="title"
           class="border-2 border-black rounded-lg w-full p-1"
           aria-label="title"
           required>
  </div>

  <div>
    <h3> Author :</h3>
    <input type="text"
           name="author"
           class="border-2 border-black rounded-lg w-full p-1"
           aria-label="author"
           required>
  </div>

  <div class="flex flex-row-reverse justify-evenly items-center">
    <div class="w-1/2">
      <h5 class="font-bold">Note aux utilisateurs :</h5>
      <p class="font-light italic" tabindex="0">
        Merci d'utiliser cette plateforme de manière responsable lors de l'upload d'images.
        Tout contenu téléchargé doit respecter les lois en vigueur et ne pas enfreindre les droits d'auteur.
        Nous nous réservons le droit de supprimer tout contenu inapproprié ou offensant.
        En téléchargeant une image, vous confirmez détenir les droits nécessaires ou l'autorisation pour sa publication.
        Tout manquement à ces conditions pourrait entraîner la suspension de votre compte.
        Merci de votre compréhension et de votre coopération.
      </p>
    </div>

    <div class="w-1/6">

      <div class="w-full aspect-[1/1] bg-gray-300 border-black border-dashed border-2 rounded-2xl flex flex-col justify-center items-center">
        <img :src="`/icons/icon_photo.svg`" class="w-12" alt="" id="image">
      </div>

      <div class="flex flex-row items-center">
        <p class="w-3/12">Url :</p>
        <input @input="onInput"
               class="w-9/12 m-1 border-black border-2 rounded-lg px-1"
               aria-label="Article image">
      </div>
    </div>
  </div>

  <div class="flex flex-col grow">
    <h3> Content :</h3>
    <textarea name="content"
              class="border-2 border-black rounded-lg p-2 w-full grow"
              aria-label="Article content"
              required/>
  </div>

  <div class="flex flex-row justify-center gap-5">
    <input type="submit"
           value="Envoyer"
           name="submit"
           class="w-32 h-10 cursor-pointer rounded-2xl bg-blue-600 text-white"
           aria-label="Send the article">
  </div>
</form>

</template>