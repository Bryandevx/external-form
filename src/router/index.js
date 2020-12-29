import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Verify from "../views/Verify.vue";
import Citas from "../views/Citas.vue";
import {globalUser} from '@/main.js'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    //trabajando esta ruta para
    //pruebas en middlewares
    path: "/verify",
    name: "verify",
    component: Verify,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/citas",
    name: "citas",
    component: Citas,
    props: true,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(`Global user --> ${globalUser.userData}`)
  if (to.meta.requiresAuth) {
    if (!globalUser.userData) {
      next({
        name: "home",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
