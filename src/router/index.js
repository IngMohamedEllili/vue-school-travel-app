const { createRouter, createWebHistory } = require("vue-router");

const routes = [{
  path: '/', name: 'home', component: Home,
},
{
  path: '/about', name: 'about', component: About
}]
export const router = createRouter({
  history: createWebHistory(), routes
})