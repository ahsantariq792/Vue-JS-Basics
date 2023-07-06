import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/HomePage.vue'
import ProfilePage from './components/ProfilePage.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name: 'Profile',
        path: '/profile',
        component: ProfilePage
    }
]

const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router;