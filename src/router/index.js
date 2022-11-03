import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import Users from '../components/Users.vue';
import Iamges from '../components/Images.vue'


const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/images',
        name: 'Images',
        component: Iamges
    }
  
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;