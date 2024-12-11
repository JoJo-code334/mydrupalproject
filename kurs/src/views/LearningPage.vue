<template>
    <div class="background">
        <div class="playground-container">
            <div class="materials">
                <div class="navigator">
                    <Menu :model="items" />
                </div>
                <transition name="fade" mode="out-in" @after-enter="highlightCode">
                    <Card v-if="currentSection" :key="currentSection.id" class="content-card">
                        <template #title>{{ currentSection.title }}</template>
                        <template #content>
                            <div v-html="currentSection.content"></div>
                        </template>
                    </Card>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import Menu from "primevue/menu";
import Card from "primevue/card";
import Prism from "prismjs";


const highlightCode = () => {
    Prism.highlightAll();
};

// Меню с темами
const items = ref([
    {
        label: "Меню",
        items: [
            { label: "1. Введение в HTML и структуру документа", command: () => setCurrentSection("introduction-html") },
            { label: "2. Работа с текстом и форматирование", command: () => setCurrentSection("text-formatting") },
            { label: "3. Списки (упорядоченные и неупорядоченные)", command: () => setCurrentSection("lists") },
            { label: "4. Работа с изображениями и ссылками", command: () => setCurrentSection("images-links") },
            { label: "5. Таблицы", command: () => setCurrentSection("tables") },
            { label: "6. Введение в CSS: основы стилизации", command: () => setCurrentSection("introduction-css") },
            { label: "7. Позиционирование и модель коробки (Box Model)", command: () => setCurrentSection("box-model") },
            { label: "8. Работа с цветами, фонами и границами", command: () => setCurrentSection("colors-backgrounds-borders") },
            { label: "9. Макет и дисплей", command: () => setCurrentSection("layout-display") },
            { label: "10. Формы и взаимодействие с пользователем", command: () => setCurrentSection("forms-user-interaction") },
        ],
    },
]);
    
    // Все секции лекций
    const sections = ref([
    {
    id: "introduction-html",
    title: "1. Введение в HTML и структуру документа",
    content: `
    <h3>Часть 1: Что такое HTML?</h3>
    <p>HTML (HyperText Markup Language) — это язык разметки, используемый для создания структуры веб-страниц. В отличие от языков программирования, HTML не использует логических или вычислительных операций; вместо этого он определяет, как элементы должны быть расположены на странице и какую роль они играют в структуре контента.</p>
    <h3>Часть 2: Документ HTML</h3>
    <p>Структурно, HTML-документ начинается с определения типа документа и включает в себя множество элементов, которые описывают различные части страницы. Типовой HTML-документ включает следующие части:</p>
    <ol>
    <li><p><strong><code>&lt;!DOCTYPE html&gt;</code></strong>: Это объявление типа документа. Хотя в HTML5 оно не обязательно, его использование рекомендовано для обеспечения стандартной обработки браузером.</p></li>
    <li><p><strong><code>&lt;html&gt;</code></strong>: Корневой элемент HTML-документа. Этот тег охватывает все содержимое страницы.</p></li>
    <li><p><strong><code>&lt;head&gt;</code></strong>: Содержит метаинформацию о документе, такую как заголовок страницы, кодировки, стили и скрипты. Элементы внутри <code>&lt;head&gt;</code> обычно не отображаются напрямую в контентной части страницы.</p></li>
    <li><p><strong><code>&lt;title&gt;</code></strong>: Определяет заголовок документа, который отображается на вкладке браузера.</p></li>
    <li><p><strong><code>&lt;meta&gt;</code></strong>: Элементы, которые обычно используются для указания кодировки символов (например, UTF-8), авторства, описания и ключевых слов для поисковых систем.</p></li>
    <li><p><strong><code>&lt;body&gt;</code></strong>: Содержит весь видимый контент страницы, такой как текст, изображения, ссылки и таблицы.</p></li>
    </ol>
    <h3>Часть 3: Семантические теги</h3>
    <p>Семантические теги — это элементы HTML, которые носят смысловое значение и помогают поисковым системам и разработчикам лучше понять структуру страницы. Рассмотрим несколько примеров:</p>
    <ul>
    <li><p><strong><code>&lt;header&gt;</code></strong>: Используется для определения верхней части страницы или секции, обычно содержит логотип, название и навигацию.</p></li>
    <li><p><strong><code>&lt;nav&gt;</code></strong>: Специально предназначен для размещения блока навигации.</p></li>
    <li><p><strong><code>&lt;main&gt;</code></strong>: Содержит основной контент страниц, уникальный для данной страницы.</p></li>
    <li><p><strong><code>&lt;section&gt;</code></strong>: Раздел общего контента, который может объединять несколько тематически связанных элементов.</p></li>
    <li><p><strong><code>&lt;article&gt;</code></strong>: Независимый кусок контента, например, блог-пост или новостная статья.</p></li>
    <li><p><strong><code>&lt;footer&gt;</code></strong>: В нижней части страницы или секции и содержит вспомогательную информацию, такую как контакты, авторские права.</p></li>
    </ul>
    <h3>Простой пример HTML-документа</h3>
    <p>Вот простая HTML-страница, чтобы лучше понять все вышеизложенные точки:</p>
    <pre><code class="language-html">&lt;!DOCTYPE html&gt;
    &lt;html lang="ru"&gt;
    &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Мой первый HTML-документ&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;header&gt;
    &lt;h1&gt;Добро пожаловать на мой сайт&lt;/h1&gt;
    &lt;nav&gt;
    &lt;ul&gt;
    &lt;li&gt;&lt;a href="#home"&gt;Главная&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#about"&gt;О нас&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#contact"&gt;Контакты&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
    &lt;section&gt;
    &lt;h2&gt;О нас&lt;/h2&gt;
    &lt;p&gt;Мы создаём замечательные веб-сайты, используя HTML и CSS.&lt;/p&gt;
    &lt;/section&gt;
    
    &lt;article&gt;
    &lt;h2&gt;Последние новости&lt;/h2&gt;
    &lt;p&gt;Наш сайт теперь можно просматривать на всех устройствах.&lt;/p&gt;
    &lt;/article&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
    &lt;p&gt;© 2023 Все права защищены.&lt;/p&gt;
    &lt;/footer&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    </code></pre>
    `,
    },
    {
        id: "text-formatting",
        title: "2. Работа с текстом и форматирование",
        content: `
        <h3>Часть 1: Основные текстовые элементы</h3>
        <p>В HTML существует множество элементов для работы с текстом. Основные из них включают заголовки, параграфы, выделение текста и многое другое.</p>
        
        <h3>Часть 2: Заголовки</h3>
        <p>Заголовки используются для обозначения разделов и подразделов контента. В HTML предусмотрено шесть уровней заголовков от <code>&lt;h1&gt;</code> до <code>&lt;h6&gt;</code>, где <code>&lt;h1&gt;</code> — самый важный.</p>
        <pre><code class="language-html">&lt;h1&gt;Это заголовок первого уровня&lt;/h1&gt;
&lt;h2&gt;Это заголовок второго уровня&lt;/h2&gt;</code></pre>
        
        <h3>Часть 3: Параграфы</h3>
        <p>Параграфы используются для группировки связанных предложений и структурирования текста.</p>
        <pre><code class="language-html">&lt;p&gt;Это пример параграфа текста.&lt;/p&gt;</code></pre>
        
        <h3>Часть 4: Выделение текста</h3>
        <p>HTML предоставляет различные теги для выделения текста:</p>
        <ul>
            <li><code>&lt;strong&gt;</code> — полужирное выделение</li>
            <li><code>&lt;em&gt;</code> — курсив</li>
            <li><code>&lt;u&gt;</code> — подчеркивание</li>
            <li><code>&lt;del&gt;</code> — зачеркнутый текст</li>
        </ul>
        <pre><code class="language-html">&lt;p&gt;Это &lt;strong&gt;жирный&lt;/strong&gt; текст и это &lt;em&gt;курсивный&lt;/em&gt; текст.&lt;/p&gt;</code></pre>
        
        <h3>Часть 5: Цитаты</h3>
        <p>Для цитирования используются теги <code>&lt;blockquote&gt;</code> для блочных цитат и <code>&lt;q&gt;</code> для встроенных цитат.</p>
        <pre><code class="language-html">&lt;blockquote&gt;
    Это блочная цитата.
&lt;/blockquote&gt;

<p>Он сказал, &lt;q&gt;Привет, мир!&lt;/q&gt;.</p></code></pre>
        
        <h3>Пример использования текстовых элементов</h3>
        <p>Ниже приведен пример страницы с использованием различных текстовых элементов:</p>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример текстового форматирования&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Заголовок Страницы&lt;/h1&gt;
    &lt;p&gt;Это первый параграф с &lt;strong&gt;жирным&lt;/strong&gt; и &lt;em&gt;курсивным&lt;/em&gt; текстом.&lt;/p&gt;
    &lt;blockquote&gt;
        Это блочная цитата.
    &lt;/blockquote&gt;
    &lt;p&gt;Он сказал, &lt;q&gt;Привет, мир!&lt;/q&gt;.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },
    {
        id: "lists",
        title: "3. Списки (упорядоченные и неупорядоченные)",
        content: `
        <h3>Часть 1: Неупорядоченные списки</h3>
        <p>Неупорядоченные списки используются для перечисления элементов без определенного порядка. В HTML для этого используется тег <code>&lt;ul&gt;</code> вместе с тегом <code>&lt;li&gt;</code> для каждого элемента списка.</p>
        <pre><code class="language-html">&lt;ul&gt;
    &lt;li&gt;Элемент 1&lt;/li&gt;
    &lt;li&gt;Элемент 2&lt;/li&gt;
    &lt;li&gt;Элемент 3&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        
        <h3>Часть 2: Упорядоченные списки</h3>
        <p>Упорядоченные списки используются, когда порядок элементов важен. Для этого в HTML используется тег <code>&lt;ol&gt;</code>.</p>
        <pre><code class="language-html">&lt;ol&gt;
    &lt;li&gt;Первый шаг&lt;/li&gt;
    &lt;li&gt;Второй шаг&lt;/li&gt;
    &lt;li&gt;Третий шаг&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        
        <h3>Часть 3: Вложенные списки</h3>
        <p>Списки могут быть вложенными, то есть один список может содержать другой список.</p>
        <pre><code class="language-html">&lt;ul&gt;
    &lt;li&gt;Элемент 1
        &lt;ul&gt;
            &lt;li&gt;Вложенный элемент 1&lt;/li&gt;
            &lt;li&gt;Вложенный элемент 2&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Элемент 2&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        
        <h3>Пример использования списков</h3>
        <p>Ниже приведен пример страницы с различными типами списков:</p>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример списков&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Неупорядоченный список&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;Яблоко&lt;/li&gt;
        &lt;li&gt;Банан&lt;/li&gt;
        &lt;li&gt;Вишня&lt;/li&gt;
    &lt;/ul&gt;
    
    &lt;h2&gt;Упорядоченный список&lt;/h2&gt;
    &lt;ol&gt;
        &lt;li&gt;Сделать домашнее задание&lt;/li&gt;
        &lt;li&gt;Сходить в магазин&lt;/li&gt;
        &lt;li&gt;Подготовиться к встрече&lt;/li&gt;
    &lt;/ol&gt;
    
    &lt;h2&gt;Вложенные списки&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;Фрукты
            &lt;ul&gt;
                &lt;li&gt;Яблоки&lt;/li&gt;
                &lt;li&gt;Бананы&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;Овощи
            &lt;ul&gt;
                &lt;li&gt;Морква&lt;/li&gt;
                &lt;li&gt;Картофель&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },
    {
        id: "images-links",
        title: "4. Работа с изображениями и ссылками",
        content: `
        <h3>Часть 1: Изображения</h3>
        <p>Для добавления изображений в HTML используется тег <code>&lt;img&gt;</code>. Этот тег является пустым и требует атрибутов <code>src</code> и <code>alt</code>.</p>
        <pre><code class="language-html">&lt;img src="path/to/image.jpg" alt="Описание изображения"&gt;</code></pre>
        
        <h3>Атрибуты изображения</h3>
        <ul>
            <li><code>src</code> — путь к изображению</li>
            <li><code>alt</code> — альтернативный текст для описания изображения</li>
            <li><code>width</code> и <code>height</code> — размеры изображения</li>
            <li><code>title</code> — всплывающая подсказка при наведении курсора</li>
        </ul>
        <pre><code class="language-html">&lt;img src="logo.png" alt="Логотип компании" width="200" height="100" title="Наша компания"&gt;</code></pre>
        
        <h3>Часть 2: Ссылки</h3>
        <p>Ссылки используются для перехода на другие страницы или ресурсы. В HTML для этого используется тег <code>&lt;a&gt;</code> с атрибутом <code>href</code>.</p>
        <pre><code class="language-html">&lt;a href="https://www.example.com"&gt;Посетить Example&lt;/a&gt;</code></pre>
        
        <h3>Атрибуты ссылки</h3>
        <ul>
            <li><code>href</code> — адрес ссылки</li>
            <li><code>target</code> — определяет, где открыть ссылку (например, <code>_blank</code> для нового окна)</li>
            <li><code>rel</code> — определяет отношения между текущим документом и связанным ресурсом (например, <code>noopener noreferrer</code>)</li>
        </ul>
        <pre><code class="language-html">&lt;a href="https://www.example.com" target="_blank" rel="noopener noreferrer"&gt;Открыть в новом окне&lt;/a&gt;</code></pre>
        
        <h3>Часть 3: Изображения в качестве ссылок</h3>
        <p>Можно использовать изображения в качестве кликабельных ссылок, обернув тег <code>&lt;img&gt;</code> внутри тега <code>&lt;a&gt;</code>.</p>
        <pre><code class="language-html">&lt;a href="https://www.example.com"&gt;
    &lt;img src="logo.png" alt="Example"&gt;
&lt;/a&gt;</code></pre>
        
        <h3>Пример использования изображений и ссылок</h3>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример изображений и ссылок&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Добавление изображения&lt;/h2&gt;
    &lt;img src="flowers.jpg" alt="Красивые цветы" width="300"&gt;
    
    &lt;h2&gt;Создание ссылки&lt;/h2&gt;
    &lt;a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer"&gt;Перейти на Wikipedia&lt;/a&gt;
    
    &lt;h2&gt;Изображение как ссылка&lt;/h2&gt;
    &lt;a href="https://www.google.com" target="_blank" rel="noopener noreferrer"&gt;
        &lt;img src="google-logo.png" alt="Google" width="200"&gt;
    &lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },
    {
        id: "tables",
        title: "5. Таблицы",
        content: `
        <h3>Часть 1: Введение в таблицы</h3>
        <p>Таблицы используются для представления данных в структурированном формате. В HTML для создания таблиц используется тег <code>&lt;table&gt;</code>.</p>
        
        <h3>Часть 2: Основные элементы таблицы</h3>
        <ul>
            <li><code>&lt;table&gt;</code> — контейнер для таблицы</li>
            <li><code>&lt;tr&gt;</code> — строка таблицы</li>
            <li><code>&lt;th&gt;</code> — заголовочная ячейка (обычно выделяется жирным и по центру)</li>
            <li><code>&lt;td&gt;</code> — обычная ячейка таблицы</li>
            <li><code>&lt;caption&gt;</code> — заголовок таблицы</li>
        </ul>
        
        <h3>Часть 3: Создание простой таблицы</h3>
        <pre><code class="language-html">&lt;table border="1"&gt;
    &lt;caption&gt;Список сотрудников&lt;/caption&gt;
    &lt;tr&gt;
        &lt;th&gt;Имя&lt;/th&gt;
        &lt;th&gt;Должность&lt;/th&gt;
        &lt;th&gt;Возраст&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Иван Иванов&lt;/td&gt;
        &lt;td&gt;Менеджер&lt;/td&gt;
        &lt;td&gt;30&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Мария Петрова&lt;/td&gt;
        &lt;td&gt;Разработчик&lt;/td&gt;
        &lt;td&gt;27&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        
        <h3>Часть 4: Объединение ячеек</h3>
        <p>Иногда необходимо объединять ячейки по горизонтали или вертикали с помощью атрибутов <code>colspan</code> и <code>rowspan</code>.</p>
        <pre><code class="language-html">&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th colspan="2"&gt;Контактная информация&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Телефон&lt;/td&gt;
        &lt;td&gt;+7 (123) 456-78-90&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        
        <h3>Часть 5: Стилизация таблиц</h3>
        <p>Для улучшения внешнего вида таблиц можно использовать CSS, добавляя классы или инлайновые стили.</p>
        <pre><code class="language-html">&lt;table border="1" style="width: 100%; border-collapse: collapse;"&gt;
    &lt;tr style="background-color: #f2f2f2;"&gt;
        &lt;th&gt;Имя&lt;/th&gt;
        &lt;th&gt;Должность&lt;/th&gt;
        &lt;th&gt;Возраст&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Иван Иванов&lt;/td&gt;
        &lt;td&gt;Менеджер&lt;/td&gt;
        &lt;td&gt;30&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
        
        <h3>Пример полной таблицы</h3>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример таблицы&lt;/title&gt;
    &lt;style&gt;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
            text-align: left;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Список продуктов&lt;/h2&gt;
    &lt;table&gt;
        &lt;tr&gt;
            &lt;th&gt;Продукт&lt;/th&gt;
            &lt;th&gt;Категория&lt;/th&gt;
            &lt;th&gt;Цена&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Молоко&lt;/td&gt;
            &lt;td&gt;Молочные продукты&lt;/td&gt;
            &lt;td&gt;50 руб.&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Хлеб&lt;/td&gt;
            &lt;td&gt;Хлебобулочные изделия&lt;/td&gt;
            &lt;td&gt;30 руб.&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },
    {
        id: "introduction-css",
        title: "6. Введение в CSS: основы стилизации",
        content: `
        <h3>Часть 1: Что такое CSS?</h3>
        <p>CSS (Cascading Style Sheets) — это язык стилей, используемый для описания внешнего вида и форматирования HTML-документов. CSS позволяет отделить содержание страницы от ее представления, что упрощает поддержание и изменение дизайна сайта.</p>
        
        <h3>Часть 2: Способы подключения CSS к HTML</h3>
        <ul>
            <li><strong>Встроенные стили (Inline CSS)</strong> — использование атрибута <code>style</code> непосредственно в HTML-элементах.</li>
            <li><strong>Внутренние стили (Internal CSS)</strong> — размещение CSS-кода внутри тега <code>&lt;style&gt;</code> в разделе <code>&lt;head&gt;</code>.</li>
            <li><strong>Внешние стили (External CSS)</strong> — подключение внешнего CSS-файла с помощью тега <code>&lt;link&gt;</code>.</li>
        </ul>
        
        <h4>Встроенные стили</h4>
        <pre><code class="language-html">&lt;p style="color: blue; font-size: 16px;"&gt;Этот текст синий и размером 16px.&lt;/p&gt;</code></pre>
        
        <h4>Внутренние стили</h4>
        <pre><code class="language-html">&lt;head&gt;
    &lt;style&gt;
        p {
            color: green;
            font-size: 18px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;p&gt;Этот текст зеленый и размером 18px.&lt;/p&gt;
&lt;/body&gt;</code></pre>
        
        <h4>Внешние стили</h4>
        <pre><code class="language-html">&lt;!-- В HTML-файле --&gt;
&lt;head&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;

&lt;!-- В файле styles.css --&gt;
p {
    color: red;
    font-size: 20px;
}</code></pre>
        
        <h3>Часть 3: Основы синтаксиса CSS</h3>
        <p>Каждое правило CSS состоит из селектора и набора деклараций. Селектор указывает, к каким элементам HTML будут применяться стили, а декларации определяют свойства и значения.</p>
        <pre><code class="language-css">селектор {
    свойство: значение;
}</code></pre>
        <p>Пример:</p>
        <pre><code class="language-css">h1 {
    color: purple;
    text-align: center;
}</code></pre>
        
        <h3>Часть 4: Селекторы CSS</h3>
        <ul>
            <li><strong>Типовые селекторы</strong> — выбирают все элементы определенного типа. Например, <code>p</code>, <code>h1</code>.</li>
            <li><strong>Селекторы классов</strong> — выбирают элементы с определенным классом, обозначенным точкой. Например, <code>.my-class</code>.</li>
            <li><strong>Селекторы идентификаторов</strong> — выбирают элемент с определенным id, обозначенным решеткой. Например, <code>#my-id</code>.</li>
            <li><strong>Комбинированные селекторы</strong> — комбинируют несколько селекторов. Например, <code>div.my-class</code>.</li>
        </ul>
        <pre><code class="language-css">/* Типовой селектор */
h2 {
    color: navy;
}

/* Селектор класса */
.highlight {
    background-color: yellow;
}

/* Селектор идентификатора */
#main-title {
    font-size: 24px;
}</code></pre>
        
        <h3>Часть 5: Применение стилей</h3>
        <p>Ниже приведен пример использования различных способов подключения и применения стилей:</p>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример CSS&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt; &lt;!-- Внешний CSS --&gt;
    &lt;style&gt;
        /* Внутренний CSS */
        .internal-style {
            color: teal;
            font-weight: bold;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1 id="main-title"&gt;Главный Заголовок&lt;/h1&gt; &lt;!-- Стилизация через ID --&gt;
    &lt;p class="highlight"&gt;Этот абзац выделен классом "highlight".&lt;/p&gt; &lt;!-- Стилизация через класс --&gt;
    &lt;p style="color: orange;"&gt;Этот абзац имеет встроенный стиль.&lt;/p&gt; &lt;!-- Встроенный стиль --&gt;
    &lt;p class="internal-style"&gt;Этот абзац использует внутренний стиль.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },
    {
        id: "box-model",
        title: "7. Позиционирование и модель коробки (Box Model)",
        content: `
        <h3>Часть 1: Что такое модель коробки?</h3>
        <p>Модель коробки (Box Model) в CSS определяет, как элементы HTML отображаются на странице, включая содержание, отступы (padding), границы (border) и внешние отступы (margin).</p>
        
        <h3>Часть 2: Составляющие Box Model</h3>
        <ul>
            <li><strong>Content (Контент)</strong> — область, где отображается содержимое элемента, например, текст или изображение.</li>
            <li><strong>Padding (Внутренние отступы)</strong> — пространство между контентом и границей.</li>
            <li><strong>Border (Граница)</strong> — линия вокруг элемента, которая отделяет его от других элементов.</li>
            <li><strong>Margin (Внешние отступы)</strong> — пространство между границей элемента и соседними элементами.</li>
        </ul>
        <pre><code class="language-css">/* Пример Box Model */
.box {
    width: 200px; /* ширина контента */
    padding: 20px; /* внутренние отступы */
    border: 5px solid black; /* граница */
    margin: 30px; /* внешние отступы */
}</code></pre>
        
        <h3>Часть 3: Понимание ширины и высоты</h3>
        <p>По умолчанию свойства <code>width</code> и <code>height</code> определяют только размеры контента. Внутренние отступы и границы добавляются к этим размерам, что может привести к увеличению общего размера элемента. Чтобы включить padding и border в ширину и высоту элемента, используется свойство <code>box-sizing: border-box;</code>.</p>
        <pre><code class="language-css">.box {
    box-sizing: border-box;
    width: 200px; /* включает padding и border */
    padding: 20px;
    border: 5px solid black;
}</code></pre>
        
        <h3>Часть 4: Позиционирование элементов</h3>
        <p>CSS предоставляет несколько способов позиционирования элементов:</p>
        <ul>
            <li><strong>Static</strong> — стандартное позиционирование по потоку документа.</li>
            <li><strong>Relative</strong> — относительное позиционирование относительно стандартного места.</li>
            <li><strong>Absolute</strong> — абсолютное позиционирование относительно ближайшего позиционированного предка.</li>
            <li><strong>Fixed</strong> — фиксированное позиционирование относительно области просмотра.</li>
            <li><strong>Sticky</strong> — позиционирование переключается между относительным и фиксированным в зависимости от прокрутки.</li>
        </ul>
        <pre><code class="language-css">/* Примеры позиционирования */
.static {
    position: static;
}

.relative {
    position: relative;
    top: 10px;
    left: 20px;
}

.absolute {
    position: absolute;
    top: 50px;
    right: 30px;
}

.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
}

.sticky {
    position: sticky;
    top: 0;
}</code></pre>
        
        <h3>Часть 5: Пример использования Box Model и позиционирования</h3>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример Box Model&lt;/title&gt;
    &lt;style&gt;
        .container {
            width: 400px;
            padding: 20px;
            border: 2px solid #333;
            margin: 50px auto;
            box-sizing: border-box;
            position: relative;
        }
        .box {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            position: absolute;
            top: 10px;
            right: 10px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;p&gt;Это контейнер с моделью коробки.&lt;/p&gt;
        &lt;div class="box"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },
    {
        id: "colors-backgrounds-borders",
        title: "8. Работа с цветами, фонами и границами",
        content: `
        <h3>Часть 1: Цвета в CSS</h3>
        <p>Цвета в CSS могут задаваться различными способами: по названиям, в шестнадцатеричном формате, RGB, RGBA, HSL и другими.</p>
        <ul>
            <li>Название цвета: <code>red</code>, <code>blue</code>, <code>green</code></li>
            <li>Шестнадцатеричный: <code>#FF0000</code> (красный), <code>#00FF00</code> (зеленый)</li>
            <li>RGB: <code>rgb(255, 0, 0)</code></li>
            <li>RGBA (с прозрачностью): <code>rgba(255, 0, 0, 0.5)</code></li>
            <li>HSL: <code>hsl(0, 100%, 50%)</code></li>
        </ul>
        <pre><code class="language-css">/* Примеры цветов */
h1 {
    color: #3498db; /* синий */
}

p {
    color: rgb(231, 76, 60); /* красный */
}

div {
    background-color: rgba(46, 204, 113, 0.7); /* зеленый с прозрачностью */
}</code></pre>
        
        <h3>Часть 2: Фоны</h3>
        <p>Свойства фонового оформления позволяют задавать цвет, изображение, позицию и повторение фона.</p>
        <ul>
            <li><code>background-color</code> — цвет фона</li>
            <li><code>background-image</code> — изображение фона</li>
            <li><code>background-repeat</code> — повторение изображения</li>
            <li><code>background-position</code> — позиция изображения</li>
            <li><code>background-size</code> — размер изображения</li>
            <li><code>background-attachment</code> — прокрутка фона вместе со страницей или фиксирована</li>
        </ul>
        <pre><code class="language-css">/* Пример фона */
.section {
    background-color: #f0f0f0;
    background-image: url('background.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
}</code></pre>
        
        <h3>Часть 3: Границы</h3>
        <p>Свойства границы позволяют добавлять и настраивать границы вокруг элементов.</p>
        <ul>
            <li><code>border-width</code> — толщина границы</li>
            <li><code>border-style</code> — стиль границы (solid, dashed, dotted и т.д.)</li>
            <li><code>border-color</code> — цвет границы</li>
            <li><code>border-radius</code> — скругление углов границы</li>
        </ul>
        <pre><code class="language-css">/* Пример границы */
.box {
    border: 2px solid #2ecc71; /* зеленая сплошная граница */
    border-radius: 10px; /* скругленные углы */
}</code></pre>
        
        <h3>Часть 4: Тени</h3>
        <p>Свойства теней позволяют добавлять тени к элементам, улучшая их визуальное восприятие.</p>
        <ul>
            <li><code>box-shadow</code> — тень вокруг блока</li>
            <li><code>text-shadow</code> — тень для текста</li>
        </ul>
        <pre><code class="language-css">/* Пример тени */
.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
    text-shadow: 2px 2px 4px #aaa;
}</code></pre>
        
        <h3>Часть 5: Полный пример использования цветов, фонов и границ</h3>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример цветов, фонов и границ&lt;/title&gt;
    &lt;style&gt;
        body {
            background-color: #ecf0f1;
            font-family: Arial, sans-serif;
        }
        .header {
            background-color: #34495e;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            background-image: url('pattern.png');
            background-repeat: repeat;
            padding: 30px;
            margin: 20px;
            border: 3px dashed #e74c3c;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .footer {
            background-color: #2c3e50;
            color: #bdc3c7;
            padding: 10px;
            text-align: center;
            border-top: 2px solid #e74c3c;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="header"&gt;
        &lt;h1&gt;Добро пожаловать&lt;/h1&gt;
    &lt;/div&gt;
    
    &lt;div class="content"&gt;
        &lt;p&gt;Это пример блока с фоном, границей и тенью.&lt;/p&gt;
    &lt;/div&gt;
    
    &lt;div class="footer"&gt;
        &lt;p&gt;© 2023 Моя Компания&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },
    {
        id: "layout-display",
        title: "9. Макет и дисплей",
        content: `
        <h3>Часть 1: Свойство display</h3>
        <p>Свойство <code>display</code> определяет, как элемент будет отображаться в документе. Основные значения:</p>
        <ul>
            <li><code>block</code> — элемент блокового уровня (например, <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>)</li>
            <li><code>inline</code> — элемент встроенного уровня (например, <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>)</li>
            <li><code>inline-block</code> — сочетание характеристик блоковых и встроенных элементов</li>
            <li><code>none</code> — элемент не отображается</li>
            <li><code>flex</code> — элемент становится контейнером Flex</li>
            <li><code>grid</code> — элемент становится контейнером Grid</li>
        </ul>
        <pre><code class="language-css">/* Пример использования display */
.block-element {
    display: block;
}

.inline-element {
    display: inline;
}

.inline-block-element {
    display: inline-block;
}</code></pre>
        
        <h3>Часть 2: Flexbox</h3>
        <p>Flexbox — это модуль компоновки в CSS, который упрощает создание гибких и адаптивных макетов.</p>
        <h4>Контейнер Flex</h4>
        <pre><code class="language-css">.flex-container {
    display: flex;
    flex-direction: row; /* направление оси */
    justify-content: center; /* выравнивание по основной оси */
    align-items: center; /* выравнивание по поперечной оси */
}</code></pre>
        
        <h4>Основные свойства Flexbox</h4>
        <ul>
            <li><code>flex-direction</code> — направление оси (row, column)</li>
            <li><code>justify-content</code> — выравнивание по основной оси (flex-start, center, space-between и т.д.)</li>
            <li><code>align-items</code> — выравнивание по поперечной оси (flex-start, center, stretch и т.д.)</li>
            <li><code>flex-wrap</code> — перенос элементов (nowrap, wrap, wrap-reverse)</li>
        </ul>
        <pre><code class="language-css">.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
}</code></pre>
        
        <h4>Пример Flexbox</h4>
        <pre><code class="language-html">&lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;Элемент 1&lt;/div&gt;
    &lt;div class="flex-item"&gt;Элемент 2&lt;/div&gt;
    &lt;div class="flex-item"&gt;Элемент 3&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
.flex-container {
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    padding: 20px;
}
.flex-item {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    margin: 10px;
    flex: 1;
}
&lt;/style&gt;</code></pre>
        
        <h3>Часть 3: CSS Grid</h3>
        <p>CSS Grid — это двухмерная система компоновки, позволяющая создавать сложные макеты с минимальным количеством кода.</p>
        <h4>Создание контейнера Grid</h4>
        <pre><code class="language-css">.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* три колонки одинаковой ширины */
    grid-gap: 10px; /* промежуток между элементами */
}</code></pre>
        
        <h4>Основные свойства Grid</h4>
        <ul>
            <li><code>grid-template-columns</code> и <code>grid-template-rows</code> — определяют размеры колонок и строк</li>
            <li><code>grid-gap</code> — промежутки между элементами</li>
            <li><code>grid-template-areas</code> — именованные области сетки</li>
            <li><code>justify-items</code> и <code>align-items</code> — выравнивание элементов внутри ячеек</li>
        </ul>
        <pre><code class="language-css">.grid-container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto;
    grid-gap: 15px;
    grid-template-areas:
        "header header header"
        "sidebar content ads"
        "footer footer footer";
}</code></pre>
        
        <h4>Пример CSS Grid</h4>
        <pre><code class="language-html">&lt;div class="grid-container"&gt;
    &lt;div class="header"&gt;Header&lt;/div&gt;
    &lt;div class="sidebar"&gt;Sidebar&lt;/div&gt;
    &lt;div class="content"&gt;Content&lt;/div&gt;
    &lt;div class="ads"&gt;Ads&lt;/div&gt;
    &lt;div class="footer"&gt;Footer&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
.grid-container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar content ads"
        "footer footer footer";
    grid-gap: 10px;
}

.header {
    grid-area: header;
    background-color: #f1c40f;
}

.sidebar {
    grid-area: sidebar;
    background-color: #e67e22;
}

.content {
    grid-area: content;
    background-color: #1abc9c;
}

.ads {
    grid-area: ads;
    background-color: #9b59b6;
}

.footer {
    grid-area: footer;
    background-color: #34495e;
}
&lt;/style&gt;</code></pre>
        
        <h3>Часть 4: Пример комплексного макета</h3>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример макета с Flexbox и Grid&lt;/title&gt;
    &lt;style&gt;
        /* Flexbox пример */
        .flex-container {
            display: flex;
            justify-content: space-around;
            background-color: #f9f9f9;
            padding: 20px;
        }
        .flex-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            margin: 10px;
            flex: 1;
            text-align: center;
        }
        
        /* Grid пример */
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 20px;
            padding: 20px;
        }
        .grid-item {
            background-color: #2ecc71;
            color: white;
            padding: 20px;
            text-align: center;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Flexbox Раздел&lt;/h2&gt;
    &lt;div class="flex-container"&gt;
        &lt;div class="flex-item"&gt;Flex Элемент 1&lt;/div&gt;
        &lt;div class="flex-item"&gt;Flex Элемент 2&lt;/div&gt;
        &lt;div class="flex-item"&gt;Flex Элемент 3&lt;/div&gt;
    &lt;/div&gt;
    
    &lt;h2&gt;Grid Раздел&lt;/h2&gt;
    &lt;div class="grid-container"&gt;
        &lt;div class="grid-item"&gt;Grid Элемент 1&lt;/div&gt;
        &lt;div class="grid-item"&gt;Grid Элемент 2&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },
    {
        id: "forms-user-interaction",
        title: "10. Формы и взаимодействие с пользователем",
        content: `
        <h3>Часть 1: Введение в формы</h3>
        <p>Формы в HTML позволяют пользователям вводить и отправлять данные на сервер. Для создания формы используется тег <code>&lt;form&gt;</code>.</p>
        <pre><code class="language-html">&lt;form action="/submit" method="post"&gt;
    &lt;!-- Поля формы --&gt;
&lt;/form&gt;</code></pre>
        
        <h3>Часть 2: Основные элементы формы</h3>
        <ul>
            <li><code>&lt;input&gt;</code> — различные типы ввода данных</li>
            <li><code>&lt;textarea&gt;</code> — многострочное текстовое поле</li>
            <li><code>&lt;select&gt;</code> — выпадающий список</li>
            <li><code>&lt;button&gt;</code> — кнопки для отправки или сброса формы</li>
            <li><code>&lt;label&gt;</code> — метки для элементов формы</li>
        </ul>
        
        <h4>Элемент Input</h4>
        <p>Элемент <code>&lt;input&gt;</code> имеет множество атрибутов для различных типов ввода:</p>
        <ul>
            <li><code>type="text"</code> — однострочное текстовое поле</li>
            <li><code>type="password"</code> — поле для ввода пароля</li>
            <li><code>type="email"</code> — поле для ввода электронной почты</li>
            <li><code>type="number"</code> — поле для ввода числа</li>
            <li><code>type="radio"</code> — переключатели (radio buttons)</li>
            <li><code>type="checkbox"</code> — флажки (checkboxes)</li>
            <li><code>type="submit"</code> — кнопка отправки формы</li>
            <li><code>type="reset"</code> — кнопка сброса формы</li>
        </ul>
        <pre><code class="language-html">&lt;label for="username"&gt;Имя пользователя:&lt;/label&gt;
&lt;input type="text" id="username" name="username"&gt;

&lt;label for="password"&gt;Пароль:&lt;/label&gt;
&lt;input type="password" id="password" name="password"&gt;</code></pre>
        
        <h4>Элемент Textarea</h4>
        <pre><code class="language-html">&lt;label for="message"&gt;Сообщение:&lt;/label&gt;
&lt;textarea id="message" name="message" rows="4" cols="50"&gt;&lt;/textarea&gt;</code></pre>
        
        <h4>Элемент Select</h4>
        <pre><code class="language-html">&lt;label for="country"&gt;Страна:&lt;/label&gt;
&lt;select id="country" name="country"&gt;
    &lt;option value="ru"&gt;Россия&lt;/option&gt;
    &lt;option value="us"&gt;США&lt;/option&gt;
    &lt;option value="de"&gt;Германия&lt;/option&gt;
&lt;/select&gt;</code></pre>
        
        <h3>Часть 3: Метки и доступность</h3>
        <p>Использование тега <code>&lt;label&gt;</code> улучшает доступность формы, связывая метку с соответствующим элементом формы через атрибут <code>for</code>.</p>
        <pre><code class="language-html">&lt;label for="email"&gt;Электронная почта:&lt;/label&gt;
&lt;input type="email" id="email" name="email"&gt;</code></pre>
        
        <h3>Часть 4: Валидация форм</h3>
        <p>HTML5 предоставляет встроенные механизмы для валидации форм, используя атрибуты, такие как <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code> и другие.</p>
        <pre><code class="language-html">&lt;form action="/submit" method="post"&gt;
    &lt;label for="age"&gt;Возраст:&lt;/label&gt;
    &lt;input type="number" id="age" name="age" min="18" max="99" required&gt;
    
    &lt;label for="email"&gt;Электронная почта:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    
    &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;</code></pre>
        
        <h3>Часть 5: Обработка форм с помощью JavaScript</h3>
        <p>JavaScript позволяет обрабатывать события форм, такие как отправка, проверка данных и динамическое изменение содержимого.</p>
        <pre><code class="language-html">&lt;form id="myForm"&gt;
    &lt;label for="name"&gt;Имя:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;
    &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает стандартную отправку формы
    const name = document.getElementById('name').value;
    if(name.trim() === '') {
        alert('Пожалуйста, введите ваше имя.');
    } else {
        alert('Форма отправлена');
        // Здесь можно добавить логику отправки данных на сервер
    }
});
&lt;/script&gt;</code></pre>
        
        <h3>Пример полной формы с валидацией и обработкой</h3>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Пример формы&lt;/title&gt;
    &lt;style&gt;
        form {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        label {
            display: block;
            margin-bottom: 8px;
        }
        input, textarea, select {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            padding: 10px 15px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #2980b9;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;form id="contactForm"&gt;
        &lt;h2&gt;Контактная форма&lt;/h2&gt;
        
        &lt;label for="fullname"&gt;Полное имя:&lt;/label&gt;
        &lt;input type="text" id="fullname" name="fullname" required&gt;
        
        &lt;label for="email"&gt;Электронная почта:&lt;/label&gt;
        &lt;input type="email" id="email" name="email" required&gt;
        
        &lt;label for="message"&gt;Сообщение:&lt;/label&gt;
        &lt;textarea id="message" name="message" rows="5" required&gt;&lt;/textarea&gt;
        
        &lt;button type="submit"&gt;Отправить&lt;/button&gt;
    &lt;/form&gt;
    
    &lt;script&gt;
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if(fullname === '' || email === '' || message === '') {
                alert('Пожалуйста, заполните все поля.');
                return;
            }
            
            // Простая валидация email
            const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if(!emailPattern.test(email)) {
                alert('Пожалуйста, введите действительный email.');
                return;
            }
            
            alert('Спасибо за ваше сообщение, ' + fullname + '!');
            // Здесь можно отправить данные на сервер через AJAX
            this.reset(); // Сброс формы
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
        `,
    },

    ]);
    
    // Текущая отображаемая секция
const currentSection = ref(sections.value[0]); // По умолчанию первая секция

// Функция для смены текущей секции
const setCurrentSection = async (sectionId) => {
    const newSection = sections.value.find(sec => sec.id === sectionId);
    if (newSection) {
        currentSection.value = newSection;
        // Ждем обновления DOM
        await nextTick();
        // Дополнительно можно вызывать подсветку здесь, но она вызывается в хуке @after-enter
        // highlightCode();
    }
};

// Подсветка кода при изменении секции
watch(currentSection, async () => {
    // Используем nextTick, чтобы убедиться, что DOM обновлен
    await nextTick();
    // Подсветим код после обновления DOM
    highlightCode();
});

// Инициализация PrismJS после монтирования
onMounted(() => {
    highlightCode();
});
</script>

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
    animation: lavaLamp 20s ease infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
}


.playground-container {
    flex-grow: 1;
    overflow-y: auto; 
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    
    margin-left: 290px; 
}


.materials {
    display: flex;
    flex-direction: column;
    gap: 2rem; 
    padding-top: 2rem;
    padding-bottom: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}


.navigator {
    background: rgba(255, 255, 255, 0.8); /* Полупрозрачный белый фон */
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Только одна тень */
    position: fixed;
    top: 100px; /* Отступ от верхнего края */
    left: 20px;
    z-index: 800;
    width: 250px;
    
    /* Установка цвета текста на черный */
    color: #000;
}

/* Карточка контента */
.content-card {
    background: rgba(255, 255, 255, 0.8); 
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    width: 100%;
    margin-top: 20px;
    
   
    color: #000;
}

/* Адаптивность */
@media (max-width: 1200px) {
    .navigator {
        position: relative;
        width: 100%;
        margin-bottom: 20px;
    }
    
    
    .playground-container {
        margin-left: 0;
    }
}

/* Анимация фона */
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


.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}

/* Стили для кодовых блоков с PrismJS */
pre {
    background: #f5f2f0;
    padding: 1em;
    overflow: auto;
    border-radius: 5px;
}

/* Увеличение отступов внутри карточки */
.content-card > .p-card-title {
    margin-bottom: 1rem;
}
.content-card > .p-card-content {
    padding-top: 0.5rem;
}
</style>