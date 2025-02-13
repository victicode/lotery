import './assets/scss/app.scss'
import './assets/main.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/svg-eva-icons'

import App from './App.vue'
import router from './services/router'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  iconSet: quasarIconSet,
})

app.use(createPinia())
app.use(router)

app.mount('#app')
