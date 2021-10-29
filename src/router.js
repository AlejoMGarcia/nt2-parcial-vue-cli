import Vue from 'vue'
import VueRouter from 'vue-router'

import Gastos from './components/Gastos.vue'
import Respuestas from './components/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/gastos' },
        { path: '/gastos', component: Gastos },
        { path: '/respuestas', component: Respuestas },
    ]
})