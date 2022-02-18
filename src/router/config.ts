import { Layout } from "@/components";
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
  breadcrumb?: boolean; // (默认 true)如果设置为false，该路由则不会在breadcrumb面包屑中显示
  breadcrumbTo?: boolean; // (默认 true)该路由对应的面包屑是否可以点击
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
    redirect: "/table/basic",
    meta: {
      title: "表格",
    },
    children: [
      {
        path: "basic",
        name: "basic",
        component: () => import("../views/table/BasicTable.vue"),
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
    redirect: "/form/basicForm",
    meta: {
      title: "表单",
    },
    children: [
      {
        path: "basicForm",
        name: "basicForm",
        component: () => import("../views/form/BasicForm.vue"),
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
    redirect: "/animation/element",
    meta: {
      title: "动画",
    },
    children: [
      {
        path: "element",
        name: "element",
        component: () => import("../views/animation/Element.vue"),
        meta: {
          title: "element",
        },
      },
      {
        path: "animate",
        name: "animate",
        component: () => import("../views/animation/Animate.vue"),
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
        component: () => import("../views/error/NotFoundPage.vue"),
        meta: {
          title: "404",
          breadcrumbAll: false,
        },
      },
      {
        path: "403",
        name: "403",
        component: () => import("../views/error/ForbiddenPage.vue"),
        meta: {
          title: "403",
          breadcrumbAll: false,
        },
      },
      {
        path: "500",
        name: "500",
        component: () => import("../views/error/InternalServerErrorPage.vue"),
        meta: {
          title: "500",
          breadcrumbAll: false,
        },
      },
    ],
  },
  {
    path: "/lodash",
    name: "lodash",
    component: Layout,
    redirect: "/lodash/debounceAndThrottle",
    meta: {
      title: "Lodash",
    },
    children: [
      {
        path: "debounceAndThrottle",
        name: "debounceAndThrottle",
        component: () => import("../views/lodash/DebounceAndThrottle.vue"),
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
    redirect: "/router/sub1",
    meta: {
      title: "路由-左侧菜单-面包屑",
    },
    children: [
      {
        path: "sub1",
        name: "sub1",
        component: () => import("../views/router/Sub1.vue"),
        redirect: "/router/sub1/sub2",
        meta: {
          title: "sub1",
        },
        children: [
          {
            path: "sub2",
            name: "sub2",
            component: () => import("../views/router/Sub2.vue"),
            redirect: "/router/sub1/sub2/sub3",
            meta: {
              title: "sub2",
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
  {
    path: "*",
    redirect: "/error/404",
    hidden: true,
  },
];

export default routes;
