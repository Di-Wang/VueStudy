import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
import Master from '@/components/master'
import Java from '@/components/pages/Java'
import Web from '@/components/pages/web'

Vue.use(Router)
  //history.back();
export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    }, {
      path: "/course",
      name: "course",
      component: Course,
      //默认进来重定向到java页面
      redirect: "/course/java",
      children: [
        {
          path: "java",
          name: "java",
          component: Java
        }, {
          path: "web",
          name: "web",
          component: Web
        }
      ]
    }, {
      path: "/master/:count/:type",
      name: "master",
      component: Master
    }
  ]
});
