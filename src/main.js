import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import About from './pages/About.vue';
import Users from './pages/Users.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/users' },
    { path: '/about', component: About },
    { path: '/users', component: Users },
  ],
});

createApp(App)
  .component('base-modal', BaseModal)
  .use(router)
  .mount('#app');
