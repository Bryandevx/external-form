import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import Verify from "../views/Verify.vue";
import Citas from "../views/Citas.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "login",
		component: Login,
	},

	{
		path: "/register",
		name: "register",
		component: Register,

		props: true,
		meta: { login: true },
		beforeEnter: (to, from, next) => {
			const auth = to.params.auth;

			if (!auth.authenticated) {
				next();
			} else {
				next("/");
			}
		},
	},

	{
		path: "/verify",
		name: "verify",
		component: Verify,

		props: true,
		meta: { login: true },
		beforeEnter: (to, from, next) => {
			const auth = to.params.auth;

			if (!auth.confirmed) {
				next();
			} else {
				next("/");
			}
		},
	},

	{
		path: "/citas",
		name: "citas",
		component: Citas,

		props: true,
		meta: { login: true },
		beforeEnter: (to, from, next) => {
			const auth = to.params.auth;

			if (auth.authenticated && auth.confirmed) {
				next();
			} else {
				next("/");
			}
		},
	},

	{
		path: "*",
		name: "notFound",
		component: NotFound,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.login) {
		const auth = to.params.auth;

		if (auth && auth.logged) {
			next();
		} else {
			next("/");
		}
	} else {
		next();
	}
});

export default router;
