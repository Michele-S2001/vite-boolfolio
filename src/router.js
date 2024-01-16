import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectIndex from './pages/projects/Index.vue';
import ProjectShow from './pages/projects/Show.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: ProjectIndex
    },
    {
      path: '/projects/:slug',
      name: 'projects.show',
      component: ProjectShow
    }
  ]
});

export { router };