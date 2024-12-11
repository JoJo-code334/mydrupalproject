<template>
    <div class="background">
      <div id="app">
        <header>
          <h1>HTML & CSS Песочница</h1>
        </header>
        <div class="editor-container">
          <div class="editor-pane">
            <h3>HTML</h3>
            <div ref="htmlEditor" class="editor"></div>
          </div>
          <div class="editor-pane">
            <h3>CSS</h3>
            <div ref="cssEditor" class="editor"></div>
          </div>
        </div>
        <button @click="updateOutput">Обновить результат</button>
        <iframe ref="outputFrame" class="output-pane"></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { EditorState } from '@codemirror/state';
  import { EditorView, keymap } from '@codemirror/view';
  import { history, historyKeymap } from '@codemirror/commands';
  import { lineNumbers, highlightActiveLineGutter } from '@codemirror/gutter';
  import { indentWithTab } from '@codemirror/commands';
  import { html } from '@codemirror/lang-html';
  import { css as cssLang } from '@codemirror/lang-css';
  import { defaultHighlightStyle } from '@codemirror/highlight';
  
 
  const customTheme = EditorView.theme({
    '&': {
      color: '#000000', 
      backgroundColor: '#ffffff', 
      height: '100%',
      width: '100%',
      overflow: 'auto', 
    },
    '.cm-content': {
      caretColor: '#000000', 
    },
    '&.cm-focused .cm-selectionBackground, ::selection': {
      backgroundColor: '#d3d3d3', 
    },
    '.cm-gutters': {
      backgroundColor: '#f5f5f5', 
      color: '#000000', 
      border: 'none',
    },
    '.cm-scrollbar': {
      '&:vertical': {
        width: '8px',
      },
      '&:horizontal': {
        height: '8px',
      },
    },
    /* Настройка полос прокрутки */
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#c1c1c1',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#f1f1f1',
    },
  }, { dark: false });
  
  const htmlEditor = ref(null);
  const cssEditor = ref(null);
  const outputFrame = ref(null);
  
  let htmlView, cssView;
  
  onMounted(() => {
    // Общие расширения для обоих редакторов
    const commonExtensions = [
      lineNumbers(),
      highlightActiveLineGutter(),
      history(),
      keymap.of([...historyKeymap, indentWithTab]),
      defaultHighlightStyle.fallback,
      customTheme, // Применение кастомной темы
    ];
  
    // Инициализация HTML редактора
    htmlView = new EditorView({
      state: EditorState.create({
        doc: `<div class="container">
    <h1>Привет, мир!</h1>
    <p>Это простой пример на HTML.</p>
    <button onclick="alert('Нажато.')">Нажми меня</button>
  </div>`,
        extensions: [
          ...commonExtensions,
          html(),
        ],
      }),
      parent: htmlEditor.value
    });
  
    // Инициализация CSS редактора
    cssView = new EditorView({
      state: EditorState.create({
        doc: `.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  h1 {
    color: #ff69b4;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #45a049;
  }`,
        extensions: [
          ...commonExtensions,
          cssLang(),
        ],
      }),
      parent: cssEditor.value
    });
  });
  
  
  const updateOutput = () => {
    const htmlContent = htmlView.state.doc.toString();
    const cssContent = cssView.state.doc.toString();
  
    const outputDocument = outputFrame.value.contentDocument;
    outputDocument.open();
    
    outputDocument.write(`
      <html>
        <head>
          <style>
            body {
              background-color: #ffffff; /* Белый фон для окна вывода */
              margin: 0;
              padding: 0;
            }
            ${cssContent}
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `);
    outputDocument.close();
  };
  </script>
  
  <style scoped>
  .background {
    width: 100%;
    height: 100vh;
    padding-top: 60px; 
    background: radial-gradient(circle at 10% 10%, rgba(135, 206, 250, 0.8), transparent 70%),
      radial-gradient(circle at 30% 40%, rgba(144, 238, 144, 0.8), transparent 70%),
      radial-gradient(circle at 70% 60%, rgba(255, 182, 193, 0.8), transparent 70%),
      radial-gradient(circle at 50% 50%, rgba(255, 165, 0, 0.8), transparent 70%);
    background-size: 200% 200%;
    animation: lavaLamp 20s ease infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: auto; 
  }
  
  @keyframes lavaLamp {
    0% {
      background-position: 0% 0%, 30% 50%, 70% 50%, 50% 50%;
    }
    25% {
      background-position: 10% 10%, 50% 30%, 30% 70%, 70% 70%;
    }
    50% {
      background-position: 20% 20%, 70% 50%, 50% 30%, 30% 50%;
    }
    75% {
      background-position: 10% 30%, 50% 70%, 70% 30%, 50% 30%;
    }
    100% {
      background-position: 0% 0%, 30% 50%, 50% 70%, 70% 50%;
    }
  }
  
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%; 
    max-width: 1200px; 
  }
  
  header {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  
  header h1 {
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .editor-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    justify-content: center;
  }
  
  .editor-pane {
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
  }
  
  .editor-pane h3 {
    margin-bottom: 10px;
    color: #fff; 
  }
  
  .editor {
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 300px; 
    overflow: auto; 
  }
  
  .output-pane {
    width: 100%;
    height: 400px;
    border: 2px solid #ccc;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #ffffff; 
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    background: transparent; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2); 
    border-radius: 10px;
  }
  
  </style>
  