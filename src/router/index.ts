import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Test from "../views/test.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/test",
      name: "Test",
      component: Test,
    }, //是否有app 可删
  ],
});

export default router;
