import { Layout } from "../views/components";
import Vue, { ComponentOptions, AsyncComponent } from "vue";
import { RedirectOption } from "vue-router";

type Component =
  | ComponentOptions<Vue>
  | typeof Vue
  | AsyncComponent
  | Promise<typeof import("*.vue")>;

interface IMeta {
  title?: string; // 设置该路由在侧边栏和面包屑中展示的名字 不设置时不展示
  icon?: string; // 设置该路由的图标 element-ui的icon
  breadcrumbAll?: boolean; //(默认 true)如果设置为false，则整个面包屑不会显示 此时可以自己在页面中写自定义的面包屑
  breadcrumb?: boolean; // (默认 true)如果设置为false，则不会在breadcrumb面包屑中显示
  breadcrumbTo?: boolean; // (默认 true)面包屑是否可以点击
  activeMenu?: string; // 指定要高亮的左侧边栏的菜单 在跳转菜单的子页面但是想高亮左侧边栏时非常有用
}

export interface IBaseRouter {
  path: string; // 路由
  name?: string; // 名称
  children?: IBaseRouter[]; // 子路由
  redirect?: RedirectOption; // 路由重定向
  meta?: IMeta;
  hidden?: boolean; // (默认 false)当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些子页面编辑页面/edit/1
  component?: Component; // 路由渲染的组件页面
}

const routes: Array<IBaseRouter> = [
  {
    path: "/",
    redirect: "/home",
    hidden: true,
  },
  {
    path: "/home",
    name: "home",
    component: Layout,
    redirect: "/home/index",
    meta: {
      title: "首页",
      breadcrumbTo: false,
    },
    children: [
      {
        path: "index",
        name: "index",
        hidden: true,
        component: () => import("../views/Home.vue"),
      },
    ],
  },
  {
    path: "/table",
    name: "table",
    component: Layout,
    meta: {
      title: "表格",
      breadcrumbTo: false,
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
      breadcrumbTo: false,
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
      breadcrumbTo: false,
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
      breadcrumbTo: false,
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
      breadcrumbTo: false,
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
  {
    path: "/router",
    name: "router",
    component: Layout,
    meta: {
      title: "路由-左侧菜单-面包屑",
      breadcrumbTo: false,
    },
    children: [
      {
        path: "sub1",
        name: "sub1",
        component: () => import("../views/router/Sub1.vue"),
        meta: {
          title: "sub1",
          breadcrumbTo: false,
        },
        children: [
          {
            path: "sub2",
            name: "sub2",
            component: () => import("../views/router/Sub2.vue"),
            meta: {
              title: "sub2",
              breadcrumbTo: false,
            },
            children: [
              {
                path: "sub3",
                name: "sub3",
                component: () => import("../views/router/Sub3.vue"),
                meta: {
                  title: "sub3",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
