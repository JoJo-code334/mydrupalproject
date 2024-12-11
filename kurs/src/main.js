import { createApp } from 'vue'

import App from '@/App.vue'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import { createPinia } from "pinia"
import Aura from '@primevue/themes/aura';               
import 'primeicons/primeicons.css';

import 'thememirror'
import router from '@/router.js'
import './assets/main.css'

const app = createApp(App)

app.use(PrimeVue, {

    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'false',
            cssLayer: false
        }
    }
 });
const pinia = createPinia()
app.use(pinia)
app.use(router);
app.component('Button', Button);
app.mount('#app');