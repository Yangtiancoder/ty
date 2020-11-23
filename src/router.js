import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/predict',
        component: () =>import('@/views/Predict.vue')
    },
    {
        path: '/seq-transfer',
        component: () =>import('@/views/Seqtransfer.vue')
    },
    {
        path: '/search-result',
        component: ()=>import('@/views/SearchResult.vue')
    },
    {
        path: '/search',
        component: () => import('@/views/Search.vue')
    },
    {
        path: '/detail-results',
        component: () => import('@/views/DetailResults.vue')
    },
    {
        path: '/',
        component: () => import('@/views/Search.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router