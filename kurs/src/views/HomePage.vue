<template>
  <div class="background">
    <h1 class="title">Добро пожаловать в нашу обучающую систему!</h1>
    <div class="content">
      <pre class="animated-text">
        <code
          :class="currentLanguageClass"
          v-html="highlightedText"
        ></code>
      </pre>
      <div class="text">
        <p>
          Изучайте верстку лендинговых сайтов с интерактивными уроками, тестами и
          песочницей для практики. Развивайте навыки создания современных и
          адаптивных веб-страниц.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import Prism from 'prismjs';
// Импортируйте необходимые языки для подсветки

// Импортируйте тему Prism (можно выбрать любую)
import 'prismjs/themes/prism.css';

// Список текстов для анимации
const texts = [
  'Добро пожаловать в нашу образовательную платформу!',
  `<div class="container">
  <h1>Привет, мир!</h1>
  <p>Это простой пример на HTML.</p>
  <button onclick="alert('Нажато.')">
    Нажми меня
    </button>
</div>`,
  `.container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}`,
  `const sum = (a, b) => a + b;
const greet = name => Привет, {name}!;
const log = msg => console.log(msg);

let result = sum(2, 3);
log(greet('Мир'));
log(Результат: {result});`
];

const highlightIndices = [1, 2, 3]; 

const displayedText = ref('');
const currentTextIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = 100; 
const deletingSpeed = 20; 
const pauseDuration = 2000; 

let timeout;

const type = () => {
  const currentText = texts[currentTextIndex.value];
  
  if (!isDeleting.value) {
    
    displayedText.value = currentText.substring(0, displayedText.value.length + 1);
    
    if (displayedText.value.length === currentText.length) {
     
      isDeleting.value = true;
      timeout = setTimeout(type, pauseDuration);
      return;
    }
  } else {
    
    displayedText.value = currentText.substring(0, displayedText.value.length - 1);
    
    if (displayedText.value.length === 0) {
      
      isDeleting.value = false;
      currentTextIndex.value = (currentTextIndex.value + 1) % texts.length;
    }
  }
  
  const speed = isDeleting.value ? deletingSpeed : typingSpeed;
  timeout = setTimeout(type, speed);
};


const highlightedText = computed(() => {
  const index = currentTextIndex.value;
  const text = displayedText.value;
  
  if (highlightIndices.includes(index) && text !== '') {
    
    let language = 'javascript';
    if (index === 1) language = 'html';
    else if (index === 2) language = 'css';
    
    
    return Prism.highlight(text, Prism.languages[language], language);
  }
  
 
  return escapeHtml(text);
});


const currentLanguageClass = computed(() => {
  const index = currentTextIndex.value;
  if (highlightIndices.includes(index)) {
    if (index === 1) return 'language-html';
    if (index === 2) return 'language-css';
    if (index === 3) return 'language-javascript';
  }
  return '';
});

// Функция для экранирования HTML-символов
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Инициация анимации при монтировании компонента
onMounted(() => {
  type();
});

// Очистка таймера при размонтировании компонента
onBeforeUnmount(() => {
  clearTimeout(timeout);
});
</script>

<!-- Scoped стили для компонента -->
<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  padding-top: 60px; 
  background: radial-gradient(circle at 10% 10%, rgba(135, 206, 250, 0.8), transparent 70%),
              radial-gradient(circle at 30% 40%, rgba(144, 238, 144, 0.8), transparent 70%),
              radial-gradient(circle at 70% 60%, rgba(255, 182, 193, 0.8), transparent 70%),
              radial-gradient(circle at 50% 50%, rgba(255, 165, 0, 0.8), transparent 70%);
  background-size: 100% 100%;
  animation: lavaLamp 10s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.title {
  font-size: 2.5rem;
  color: #333333;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 40px;
}

.content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  max-width: 1200px;
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap; 
}

.animated-text, .text {
  max-width: 400px;
  color: #333333;
  line-height: 1.6;
  font-size: 20px;
  white-space: pre-wrap; 
  word-wrap: break-word; 
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px; 
  padding: 20px; 
  flex: 1 1 400px; 
}

.animated-text {
  font-size: 16px;
}

pre {
  background: none;
  padding: 0;
  margin: 0;
  overflow: visible;
}

code {
  font-family: 'Source Code Pro', monospace;
  display: block;
}

.animated-text pre {
  background-color: transparent;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }
  
  .animated-text, .text {
    max-width: 100%;
    flex: none;
  }
}
</style>

<!-- Глобальные стили для анимации -->
<style>
@keyframes lavaLamp {
  0% {
    background-position: 10% 10%, 30% 40%, 70% 60%, 50% 50%;
  }
  25% {
    background-position: 30% 40%, 50% 30%, 50% 70%, 30% 30%;
  }
  50% {
    background-position: 70% 60%, 70% 50%, 20% 20%, 70% 30%;
  }
  75% {
    background-position: 50% 50%, 30% 70%, 10% 30%, 30% 70%;
  }
  100% {
    background-position: 10% 10%, 30% 40%, 70% 60%, 50% 50%;
  }
}
</style>
