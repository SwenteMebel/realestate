import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routing'
//import storeData from './data/index.js'
import firebase from './FirebaseConfig'


createApp(App)
//.use(storeData)
.use(firebase)
.use(router)
.mount('#app')

