import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue'
import store from './components/store/index'

const app = createApp(App);

app.use(router);

app.use(store);

app.mount('#app')
