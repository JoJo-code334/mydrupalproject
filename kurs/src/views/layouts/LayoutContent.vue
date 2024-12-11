<template>
    <div class="content">
      <router-view />
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 1;
    padding: 0px 0px 0px; /* Добавляем верхний отступ, чтобы учесть фиксированную шапку */
  }
  
  .content > * {
    animation: fadeIn 0.5s ease;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .content {
      padding: 100px 10px 10px; /* Увеличенный отступ для фиксированной шапки */
    }
  }
  </style>
  