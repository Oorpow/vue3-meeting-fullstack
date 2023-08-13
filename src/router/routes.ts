import type { RouteRecordRaw } from "vue-router";

/** 静态路由 */
export const constantRoutes: RouteRecordRaw[] = [
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/Login/index.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("@/views/Register/index.vue"),
	},
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/HomeView.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/AboutView.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@/views/Error/404.vue"),
	},
];
