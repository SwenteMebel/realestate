import { createRouter, createWebHistory } from "vue-router"; 

import homepage from '@/components/hoofdpage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: homepage 
    },

    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/components/profile.vue')//lazy loading

    },

    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login.vue')//lazy loading

    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router