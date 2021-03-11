import { createWebHistory, createRouter } from "vue-router";
import MainPage from '../components/MainPage.vue';

export const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
