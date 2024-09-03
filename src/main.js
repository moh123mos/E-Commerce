import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";

createApp(App).use(pinia).use(router).use(bootstrap).mount("#app");
