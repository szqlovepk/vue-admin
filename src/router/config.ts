import { Layout } from "../views/components";
import Vue, { ComponentOptions, AsyncComponent } from "vue";
import { RedirectOption } from "vue-router";

type Component =
  | ComponentOptions<Vue>
  | typeof Vue
  | AsyncComponent
  | Promise<typeof import("*.vue")>;

export interface IRouterMeta {
  title: string;
  icon?: string;
  noCache?: boolean;
  roles?: any[];
  breadcrumb?: boolean;
}

export interface IBaseRouter {
  path: string;
  name?: string;
  children?: IRouter[];
  redirect?: RedirectOption;
  meta?: any;
  component?: Component;
}

export interface IRouter extends IBaseRouter {
  hidden?: boolean;
}

const routes: Array<IRouter> = [
  {
    path: "/",
    redirect: "/home",
    hidden: true,
  },
  {
    path: "/home",
    name: "home",
    component: Layout,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "",
        name: "index",
        hidden: true,
        component: () => import("../views/Home.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/table",
    name: "table",
    component: Layout,
    meta: {
      title: "表格",
    },
    children: [
      {
        path: "basic",
        name: "basic",
        component: () => import("../views/BasicTable.vue"),
        meta: {
          title: "基础表格",
        },
      },
    ],
  },
  {
    path: "/form",
    name: "form",
    component: Layout,
    meta: {
      title: "表单",
    },
    children: [
      {
        path: "basic",
        name: "basic",
        component: () => import("../views/About.vue"),
        meta: {
          title: "基础表单",
        },
      },
    ],
  },
  {
    path: "/animation",
    name: "animation",
    component: Layout,
    meta: {
      title: "动画",
    },
    children: [
      {
        path: "element",
        name: "element",
        component: () => import("../views/About.vue"),
        meta: {
          title: "element",
        },
      },
      {
        path: "animate",
        name: "animate",
        component: () => import("../views/About.vue"),
        meta: {
          title: "animate",
        },
      },
    ],
  },
  {
    path: "/error",
    name: "error",
    component: Layout,
    meta: {
      title: "错误页面",
    },
    children: [
      {
        path: "404",
        name: "404",
        component: () => import("../views/About.vue"),
        meta: {
          title: "404",
        },
      },
      {
        path: "401",
        name: "401",
        component: () => import("../views/About.vue"),
        meta: {
          title: "401",
        },
      },
    ],
  },
  {
    path: "/lodash",
    name: "lodash",
    component: Layout,
    meta: {
      title: "Lodash",
    },
    children: [
      {
        path: "debounceAndThrottle",
        name: "debounceAndThrottle",
        component: () => import("../views/About.vue"),
        meta: {
          title: "防抖&节流",
        },
      },
    ],
  },
];

export default routes;
