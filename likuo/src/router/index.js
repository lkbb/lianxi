import Vue from "vue";
import VueRouter from "vue-router";
import Address from "../view/address.vue";
import Index from "../view/index.vue";
//引入
import { getToken } from "@/util/index";

import { goLogin } from "@/api/index";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: '/index'
    },
    {
      path:'/index',
      component:Index,
      // children:[
        
      // ]
    },
    {
      path:'/address',
      component:Address
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (getToken()) {
    next();
  } else {
    goLogin();
    next();
  }
});

// router.afterEach((to, next) => {});

export default router;
