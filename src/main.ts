import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import Index from './components/Index.vue'
import Results from './components/Results.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/results', component: Results }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp({})

app.use(router)
app.mount('#app')
