import Vue from "vue";
import VueRouter from "vue-router";
import FirstDemo from "../views/FirstDemo.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/firstDemo",
    name: "firstDemo",
    component: FirstDemo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
