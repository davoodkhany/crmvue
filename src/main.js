import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'



import { router } from './router/index'

// Mobile number
import 'maz-ui/css/main.css'
// Mobile number

import './assets/main.css'
import './assets/fonts/js/all.js'




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')