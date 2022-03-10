import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./config";
import Cookies from "js-cookie";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes as any,
  scrollBehavior() {
    // 由于外部容器固定了高度 实际上滚动的只有el-main容器的内容 故用js自己处理局部滚动到顶部
    if (document.getElementsByClassName("el-main")?.[0]) {
      document.getElementsByClassName("el-main")[0].scrollTop = 0;
    }
    // 页面始终滚动到顶部
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log("to:", to);
  console.log("form:", from);
  // set page title
  document.title = to?.meta?.title || "vue-admin";

  if (Cookies.get("vue_admin_token")) {
    // 已经登录的跳转login 重定向到首页
    if (to?.path === "/login") {
      next();
    } else {
      next();
    }
  } else {
    if (to?.path === "/login") {
      next();
    } else {
      // 没有登录token 访问其他页面重定向到login页面
      next(`/login?redirect=${encodeURIComponent(to?.fullPath)}`);
    }
  }
});

export default router;
