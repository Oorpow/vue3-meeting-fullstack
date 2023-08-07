import type { RouteRecordRaw } from "vue-router";

/** 静态路由 */
export const constantRoutes: RouteRecordRaw[] = [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/Login/index.vue"),
	},
	{
		path: "/register",
		name: "register",
		component: () => import("@/views/Register/index.vue"),
	},
	{
		path: "/",
		name: "home",
		component: () => import("@/views/HomeView.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () => import("@/views/AboutView.vue"),
	},
];
