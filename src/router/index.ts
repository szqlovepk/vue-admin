import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./config";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  scrollBehavior() {
    // 由于外部容器固定了高度 实际上滚动的只有el-main容器的内容 故用js自己处理局部滚动到顶部
    document.getElementsByClassName("el-main")[0].scrollTop = 0;
    // 页面始终滚动到顶部
    return { x: 0, y: 0 };
  },
});

export default router;
