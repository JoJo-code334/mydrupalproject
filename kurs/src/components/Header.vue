<template>
    <header class="header">
      <div class="logo-title">
        <img src="@/assets/logo.png" alt="Python Logo" class="logo" />
        <h1 class="title">Обучающая система по изучению вёрстки лендинг сайтов</h1>
      </div>
      <nav class="navigation">
        <div class="nav-list">
          <Button
            label="Главная"
            @click="navigateTo('/')"
            variant="text"
            :class="isActive('/') ? 'active-button' : ''"
          ></Button>
          <Button
            label="Тесты"
            @click="navigateTo('/tests')"
            variant="text"
            :class="isActive('/tests') ? 'active-button' : ''"
          ></Button>
          <Button
            label="Песочница"
            @click="navigateTo('/sandbox')"
            variant="text"
            :class="isActive('/sandbox') ? 'active-button' : ''"
          ></Button>
          <Button
            label="Обучение"
            @click="navigateTo('/learning')"
            variant="text"
            :class="isActive('/learning') ? 'active-button' : ''"
          ></Button>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import Button from "primevue/button";
  import { useRouter, useRoute } from "vue-router";
  
  const router = useRouter();
  const route = useRoute();
  
  const navigateTo = (path) => {
    router.push(path);
  };
  
  const isActive = (path) => {
    return route.path === path;
  };
  </script>
  
  <style scoped>
  
  

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; 
  background: rgba(93, 196, 222, 1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo-title {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.title {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
}

.nav-list ::v-deep .p-button {
  background: transparent;
  color: #fff;
  font-weight: bold;
  border: none;
  transition: background 0.3s, color 0.3s;
}

.nav-list ::v-deep .p-button:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.active-button {
  border-bottom: 2px solid #fff;
}

/* Адаптивность */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .navigation {
    width: 100%;
    margin-top: 10px;
  }

  .nav-list {
    width: 100%;
    justify-content: space-around;
  }

  .title {
    font-size: 18px;
  }

  .logo {
    width: 35px;
    height: 35px;
  }
}
</style>