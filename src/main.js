import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { router } from './router/index'

// Mobile number
import 'maz-ui/css/main.css'
// Mobile number

import './assets/css/main.css'
import './assets/fontawesome/js/all.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)




app.mount('#app')