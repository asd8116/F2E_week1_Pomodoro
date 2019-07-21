import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/todolist",
      name: "todolist",
      component: () => import("./views/TodoList.vue")
    },
    {
      path: "/analytics",
      name: "analytics",
      component: () => import("./views/Analytics.vue")
    },
    {
      path: "/ringtones",
      name: "ringtones",
      component: () => import("./views/RingTones.vue")
    }
  ]
});
