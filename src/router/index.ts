import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Streams",
    component: HomeView,
  },
  {
    path: "/schedule",
    name: "Schedule",
    // route level code-splitting
    // this generates a separate chunk (schedule.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Schedule" */ "../views/ScheduleView.vue"),
  },
  {
    path: "/insights",
    name: "insights",
    component: () => import("../views/InsightsView.vue"),
  },
  {
    path: "/support",
    name: "supoort",
    component: () => import("../views/SupportView.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/AccountView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
