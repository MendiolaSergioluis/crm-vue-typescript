import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// Importa plugins
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'

// Crea la Aplicación
const app = createApp(App)

// Plugins
app.use(router)
app.use(plugin, defaultConfig)

// Corre el proyecto
app.mount('#app')
