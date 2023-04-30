import { createApp } from 'vue'
import App from './Main.vue'
import {router} from "@/Routes/router";
import {createPinia} from 'pinia'

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');

