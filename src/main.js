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

const app = createApp(App)
  .component('base-modal', BaseModal)
  .use(router);

// Prevents router animatin first time (When page start)
// Default behaviour is because vue switches from / to specified route causing animation to iccur
router.isReady().then(() => {
  app.mount('#app');
});
