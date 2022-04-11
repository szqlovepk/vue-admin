import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./config";
import Cookies from "js-cookie";
import authModule from "@/store/modules/auth";
// import Home from "../views/Home.vue";
import { hasAuth } from "@/utils";

Vue.use(VueRouter);

const createRouter = () =>
  new VueRouter({
    mode: "hash",
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

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher; // reset router
}

router.beforeEach(async (to, from, next) => {
  console.log("form:", from);
  console.log("to:", to);
  // set page title
  document.title = to?.meta?.title || "vue-admin";
  if (Cookies.get("vue_admin_token")) {
    // 已经登录的跳转login 重定向到首页
    if (to?.path === "/login") {
      next("/");
    } else {
      let auths = authModule.auths;
      if (!auths) {
        // store中无权限时则获取权限
        auths = await authModule.getAuth();
        console.log("auths:", auths);
      }
      // 权限校验  无权限403 forbidden
      if (hasAuth(to as any, auths)) {
        next();
      } else {
        next("/error/403");
      }
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
