/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
// import Home from '../Components/Home/Home.vue'
// import Skills from '../Components/Skills/Skills.vue'
// import About from '../Components/About/About.vue'
// Composables
import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'

// const routes = [{
//     path: '/',
//     component: Home 
// },{
//     path: '/Skills',
//     component: Skills
// },{
//     path: '/About',
//     component: About
// }
// ]
// const router = createRouter([{
//     history: createWebHistory(),
//     routes: routes
// }])
const app = createApp(App)

registerPlugins(app)
//app.use(router)
app.mount('#app')
