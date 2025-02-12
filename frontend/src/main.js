import './assets/scss/app.scss'
import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './services/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
