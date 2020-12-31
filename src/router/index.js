import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import Verify from "../views/Verify.vue";
import Citas from "../views/Citas.vue";
import NotFound from "../views/NotFound.vue";
//import { globalUser } from "@/main.js";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "login",
		component: Login,
	},

	{
		path: "/about",
		name: "about",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},

	{
		path: "/register",
		name: "register",
		component: Register,
		props: true,
		meta: { requireLogged: true },

		beforeEnter: (to, from, next) => {
			let auth = to.params.auth;

			if (auth && !auth.authenticated) {
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
		// meta: { requireLogged: true },
		// beforeEnter: (to, from, next) => {
		// 	const auth = to.params.auth;

		// 	if (auth.confirmation) {
		// 		next();
		// 	} else {
		// 		next("/");
		// 	}
		// },
	},

	{
		path: "/citas",
		name: "citas",
		component: Citas,
		props: true,
		meta: { requiresAuth: true },
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
	if (to.meta.requireLogged) {
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

// router.beforeEach((to, from, next) => {
// 	//console.log(`Global user --> ${globalUser}`);
// 	if (to.meta.requiresAuth) {
// 		if (!globalUser.userType) {
// 			next({
// 				name: "home",
// 			});
// 		} else {
// 			next();
// 		}
// 	} else {
// 		next();
// 	}
// });

export default router;
