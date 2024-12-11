<template>
    <main class="w-full min-h-screen overflow-hidden relative">
      <Header />
      <router-view />
    </main>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue';
  </script>
  
  <style scoped>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  </style>
  