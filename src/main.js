import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// pinia store
import { createPinia } from "pinia";
const pinia = createPinia();
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
createApp(App).use(pinia).use(router).use(bootstrap).mount("#app");
