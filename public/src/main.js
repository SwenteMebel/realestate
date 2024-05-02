import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routing' //regelt de routing in de app
import firebase from './store/FirebaseConfig' //connectie met de configuratie voor de firebase
import store from './store' //connectie met de store en vuex

createApp(App)
.use(store)
.use(firebase)
.use(router)
.mount('#app')

