import type { RouteRecordRaw } from "vue-router";

/** 静态路由 */
export const constantRoutes: RouteRecordRaw[] = [
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
