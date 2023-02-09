import { eventBus } from '@/main';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/form',
        name: 'form',
        component: () => import('@/views/FormView.vue'),
    },
    {
        path: '/api-test',
        name: 'api-test',
        component: () => import('@/views/ApiTestView.vue'),
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
