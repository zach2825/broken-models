import { eventBus } from '@/main';
import ApiTestView from '@/views/ApiTestView.vue';
import FormView from '@/views/FormView.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/form',
        name: 'form',
        component: FormView,
    },
    {
        path: '/api-test',
        name: 'api-test',
        component: ApiTestView,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    const hasEvent = eventBus.all.get('beforeRouteLeave')

    if (hasEvent?.length) {
        eventBus.emit('beforeRouteLeave', next)
    } else {
        next()
    }
})

export default router
