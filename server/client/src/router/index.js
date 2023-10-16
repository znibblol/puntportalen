import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Beerbets from "../views/Beerbets.vue";
import CreateBeerbet from "../views/CreateBeerbet.vue";
import User from "../views/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/beerbets",
    name: "Beerbets",
    component: Beerbets,
  },
  {
    path: "/create-beerbet",
    name: "CreateBeerbet",
    component: CreateBeerbet,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
