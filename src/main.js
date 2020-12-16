import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

createApp(App)
  .component('base-modal', BaseModal)
  .mount('#app');
