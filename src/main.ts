import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./index.less";
import * as echarts from "echarts";
import Cookies from "js-cookie";
// import locale from "element-ui/lib/locale/lang/en";

// 国际化设置
// Vue.use(ElementUI, { locale });
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.prototype.$Cookies = Cookies;
Vue.config.productionTip = false;

Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  },
});

Vue.directive("auth", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vnode) {
    console.log("el:", el);
    console.log("binding:", binding);
    console.log("vnode:", vnode);
  },
});

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default vm;
