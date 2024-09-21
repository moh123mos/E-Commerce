import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";
const pinia = createPinia();
createApp(App).use(pinia).use(router).use(bootstrap).mount("#app");
