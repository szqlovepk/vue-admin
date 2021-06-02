import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./config";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

export default router;
