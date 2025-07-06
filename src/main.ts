import { registerPlugins } from '@/plugins';
import router from "@/routers/router";
import App from '@/App.vue';
import { createApp } from 'vue';
import "@/assets/css/cerceis.css";

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.mount('#app');
