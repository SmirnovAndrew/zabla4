import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/h5/gridstack-dd-native';


createApp(App)
    .use(router)
    .mount('#app')
