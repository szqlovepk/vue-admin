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
    name: "Home",
    redirect: "/dashboard",
    hidden: true,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Layout,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "",
        name: "index",
        hidden: true,
        component: () => import("../views/DashBoard.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/menuOne",
    name: "menuOne",
    component: Layout,
    meta: {
      title: "导航一",
    },
    children: [
      {
        path: "sonOne",
        name: "sonOne",
        component: () => import("../views/DashBoard.vue"),
        meta: {
          title: "子页面一",
        },
      },
      {
        path: "soneTwo",
        name: "soneTwo",
        component: () => import("../views/DashBoard.vue"),
        hidden: true,
        meta: {
          title: "子页面二",
        },
      },
    ],
  },
  {
    path: "/menuTwo",
    name: "menuTwo",
    component: Layout,
    meta: {
      title: "导航二",
    },
    children: [
      {
        path: "sonThree",
        name: "sonThree",
        component: () => import("../views/DashBoard.vue"),
        meta: {
          title: "子页面三",
        },
      },
      {
        path: "soneFour",
        name: "soneFour",
        component: () => import("../views/DashBoard.vue"),
        meta: {
          title: "子页面四",
        },
      },
    ],
  },
];

export default routes;
