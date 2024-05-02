import { createRouter, createWebHistory } from "vue-router"; 
import {  checkIfLoggedIn }   from '../mixins/mixins' // importeerd de functie checkIfLoggedIn 


import homepage from '@/components/hoofdpage.vue';
//import overZicht from '@/components/overzicht.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: homepage,
        meta: { requiresAuth: true }
    },

    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/components/profile.vue'), //lazy loading
        meta: { requiresAuth: true }
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login.vue'), //lazy loading
        

    },

    {
        path: '/overzicht',
        name: 'opdrachtenOverzicht',
        component: () => import('@/components/overzicht.vue'), //Lazy Loading  
        meta: { requiresAuth: true }    
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/components/register.vue'), //Lazy Loading  
        meta: { requiresAuth: true }
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})



router.beforeEach((to, from, next) => { // Voor elke keer dat er op een router word geklikt controlleert het of de user is ingelogd. 
    const isAuthenticated = checkIfLoggedIn(); // de functie die checkt of er een gebruiker is ingelogd en geeft boolen retour
  
    if (to.matched.some(record => record.meta.requiresAuth)) {
      
      if (!isAuthenticated) {
        // Ales er geen users is ingelogd gaat het weer naar de login page
        next('/login');
      } else {
        // Als er een user is ingelogd dan gaat het door.
        next();
      }
    } else {
    
      next();
    }
  });

export default router