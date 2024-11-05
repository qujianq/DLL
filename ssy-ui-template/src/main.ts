import { createPinia } from 'pinia'
import SSYUI from 'ssy-ui-vite'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'ssy-ui-vite/style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(SSYUI)
app.mount('#app')
