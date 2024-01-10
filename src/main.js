import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
// import App from './App2.vue'
import App from './App3.vue'
import mitt from 'mitt'

const emitter = mitt();
emitter.on('*', (type, e) => console.log(`emitter event log ${type} `, e)); 

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
