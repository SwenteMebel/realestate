import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routing'


createApp(App)
.use(router)
.mount('#app')
