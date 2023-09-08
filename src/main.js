import { createApp } from 'vue'
import App from './App.vue'

let app = null;

const u = document.getElementById('unmountMe');
u.addEventListener("click", function () {
    app.unmount();
});

const m = document.getElementById('mountMe');
m.addEventListener("click", function () {
    app = createApp(App);
    app.mount('#app');
});
