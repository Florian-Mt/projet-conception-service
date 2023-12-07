<script setup lang="ts">
  import Header from '@/components/molecules/Header.vue'
  import Footer from '@/components/molecules/Footer.vue'
</script>

<template>
  <Header />
  <router-view :key="$route.fullPath"></router-view>
  <Footer />
</template>
