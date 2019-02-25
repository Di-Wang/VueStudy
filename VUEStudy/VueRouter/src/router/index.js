import Vue from "vue"
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld";
import HellWD from "../components/HellWD";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: HelloWorld
    },
    {
      path: "/wd",
      component: HellWD
    }
  ]
});
