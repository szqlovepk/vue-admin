import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./index.less";
import * as echarts from "echarts";
import Cookies from "js-cookie";
import myPlugin from '@/plugins';
// import locale from "element-ui/lib/locale/lang/en";

// 国际化设置
// Vue.use(ElementUI, { locale });
Vue.use(ElementUI);
Vue.use(myPlugin);
Vue.prototype.$echarts = echarts;
Vue.prototype.$Cookies = Cookies;
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default vm;
