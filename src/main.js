import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routing'
//import storeData from './data/index.js'



createApp(App)
//.use(storeData)
.use(router)
.mount('#app')
