import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppContacts from './pages/AppContacts.vue';
import ProjectIndex from './pages/projects/Index.vue';
import ProjectShow from './pages/projects/Show.vue';
import NotFound from './pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AppContacts
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: ProjectIndex
    },
    {
      path: '/projects/:slug',
      name: 'projects.show',
      props: true,
      component: ProjectShow
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
});

export { router };