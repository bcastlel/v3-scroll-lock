import { createApp } from 'vue';
import V3ScrollLock from 'v3-scroll-lock';
import App from './App.vue';

createApp(App).use(V3ScrollLock, { reserveScrollBarGap: true })
  .mount('#app');
