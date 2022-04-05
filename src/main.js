import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Project from './components/Project.vue'

import App from './App.vue'
import './index.css'

const routes = [
    { path: '/home', component: Home, name: 'Home' },
    { path: '/project', component: Project, name: 'Project' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
