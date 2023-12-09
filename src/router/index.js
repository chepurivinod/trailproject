import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/HomePage.vue';
import Users from '../components/Users.vue';
import Employes from '../components/Employes.vue';
import NotFound from '../components/notFound/NotFound.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/Employes',
        name: 'Employes',
        component: Employes
    },
    // not found
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
  
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;