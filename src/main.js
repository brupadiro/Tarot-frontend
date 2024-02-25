// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Asegúrate de que la ruta sea correcta
import './assets/style.css';

import 'vuetify/dist/vuetify.css'


createApp(App).use(router).use(store).mount('#app')