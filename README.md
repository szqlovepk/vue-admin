# vue-admin

## a solution for vue middle or background system(vue 中后台系统解决方案)

### [github 地址](https://github.com/szqlovepk/vue-admin)

### [预览地址](https://szqlovepk.github.io/vue-admin-dist/)&#x1F601;&#x1F601;

### 前言 🔥🔥🔥🔥🔥🔥

> vue 作为国内前端最常用的 js 框架之一，在处理复杂交互的单页应用中对国内码农很友好，文档比较详细。对于中后台管理系统企业开发比较常用，所以利用空余时间集成了一个常用版本出来(没有 vue 基础的同学可以先学习 [vue](https://cn.vuejs.org/) 的基础知识)，可 clone 至本地进行业务快速开发

### 安装运行

1.使用 vue2-admin-cli 脚手架工具下载或克隆项目源码 🔥🔥

```
npm install -g vue2-admin-cli // 安装vue2-admin-cli
# or
yarn global add vue2-admin-cli

vue2-admin-cli init <project_name> // 创建项目
or
git clone https://github.com/szqlovepk/vue-admin.git
```

2.yarn 安装依赖(国内建议增加淘宝镜像源，不然很慢，你懂的 😁)
`yarn`

3.启动项目
`yarn serve`

4.打包项目

```
build:qa // qa环境
build:pre // pre环境
build:prod // 线上生产环境
```

### 依赖模块

> 项目基于 [vue-cli4.x](https://cli.vuejs.org/zh/) 脚手架生成，主要还是列出新添加的依赖包和相关的文档

- [vue-router](https://router.vuejs.org/zh/) Vue.js 官方的路由管理器。
- [vuex](https://vuex.vuejs.org/zh/) Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
- [animate.css](https://animate.style/) 一款好用的 css 动画库
- [dayjs](https://dayjs.fenxianglu.cn/) 一个极简的 JavaScript 库，可以为现代浏览器解析、验证、操作和显示日期和时间
- [element-ui](https://element.eleme.io/#/zh-CN) Vue 2.0 的桌面端组件库

- [axios](http://www.axios-js.com/zh-cn/) 易用、简洁且高效的 http 库
- [lodash](https://www.lodashjs.com/) 一个一致性、模块化、高性能的 JavaScript 实用工具库。
- [echarts](https://echarts.apache.org/zh/index.html) 一个基于 JavaScript 的开源可视化图表库
- [js-cookie](https://github.com/js-cookie/js-cookie) 一个用于处理 cookie 的简单、轻量级 JavaScript API
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) vue-property-decorator 深度依赖了 vue-class-component 拓展出了很多操作符。正常开发的时候你只需要使用 vue-property-decorator 中提供的操作符即可
- [vuex-module-decorators](https://championswimmer.in/vuex-module-decorators/) vuex 模块装饰器
- [wangeditor](https://www.wangeditor.com/v4/) 一款 vue 常用的富文本组件，我用的时候是 4.x 的版本，最近看已经出新版本了
- [timeago.js](https://github.com/hustcc/timeago.js)，[vue-count-to](https://panjiachen.github.io/countTo/) 我用来做一些首页的日期和数字的展示效果

### 代码目录

```
vue-admin
├─ .browserslistrc
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ index.ts
│  │  ├─ modules
│  │  │  └─ home.ts
│  │  └─ request.ts
│  ├─ App.vue
│  ├─ assets
│  │  └─ logo.png
│  ├─ components
│  │  ├─ echarts
│  │  │  ├─ Bar.vue
│  │  │  ├─ Line.vue
│  │  │  └─ Pie.vue
│  │  ├─ Editor.vue
│  │  ├─ index.ts
│  │  └─ layout
│  │     ├─ Header.vue
│  │     ├─ index.vue
│  │     ├─ Menu.vue
│  │     └─ SubMenu.vue
│  ├─ constant
│  │  └─ url.ts
│  ├─ directives
│  │  └─ index.ts
│  ├─ index.less
│  ├─ main.ts
│  ├─ plugins
│  │  └─ index.ts
│  ├─ router
│  │  ├─ config.ts
│  │  └─ index.ts
│  ├─ shims-tsx.d.ts
│  ├─ shims-vue.d.ts
│  ├─ store
│  │  ├─ index.ts
│  │  └─ modules
│  │     └─ auth.ts
│  ├─ utils
│  │  └─ index.ts
│  └─ views
│     ├─ animation
│     │  ├─ Animate.vue
│     │  └─ Element.vue
│     ├─ auth
│     │  ├─ authDirective.vue
│     │  └─ authPage.vue
│     ├─ component
│     │  └─ EditorPage.vue
│     ├─ error
│     │  ├─ ForbiddenPage.vue
│     │  ├─ InternalServerErrorPage.vue
│     │  └─ NotFoundPage.vue
│     ├─ form
│     │  └─ BasicForm.vue
│     ├─ Home.vue
│     ├─ icon
│     │  └─ IconFont.vue
│     ├─ lodash
│     │  └─ DebounceAndThrottle.vue
│     ├─ Login.vue
│     ├─ mode
│     │  └─ index.vue
│     ├─ router
│     │  ├─ Sub1-1-1.vue
│     │  ├─ Sub1-1-2.vue
│     │  ├─ Sub1-1.vue
│     │  ├─ Sub1-2.vue
│     │  ├─ Sub1.vue
│     │  └─ Sub2.vue
│     └─ table
│        └─ BasicTable.vue
├─ tsconfig.json
├─ vue.config.js
└─ yarn.lock

```

### 路由-侧边栏-面包屑-权限

一个后台应用的关键骨架当然少不了路由，侧边菜单栏，面包屑和权限，这些都在 vue-admin 中实现了一套配置化管理，只需你按照约定的规则进行配置这些都将动态生成。🙌🙌

##### 配置项

```
interface IBaseRouter {
  path: string; // 路由
  name?: string; // 名称
  children?: IBaseRouter[]; // 子路由
  redirect?: RedirectOption; // 路由重定向
  meta?: IMeta;
  hidden?: boolean; // (默认 false)当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些子页面编辑页面/edit/1
  component?: Component; // 路由渲染的组件页面
  props?: boolean; // 当 props 设置为 true 时，route.params 将被设置为组件的 props。
}
```

```
interface IMeta {
  title?: string; // 设置该路由在侧边栏和面包屑中展示的名字 不设置时不展示
  icon?: string; // 设置该路由在左侧菜单展示的图标 element-ui的icon
  breadcrumbAll?: boolean; //(默认 true)如果设置为false，则整个面包屑不会显示 此时可以自己在页面中写自定义的面包屑
  breadcrumb?: boolean; // (默认 true)如果设置为false，该路由则不会在breadcrumb面包屑中显示
  breadcrumbTo?: boolean; // (默认 true)该路由对应的面包屑是否可以点击
  activeMenu?: string; // 指定要高亮的左侧边栏的菜单 在跳转菜单的子页面但是想高亮左侧边栏时非常有用
  auth?: string; // 权限点唯一标识key 不配置时默认都可见 配置时权限接口返回的数组中需包含该key才会展示
}
```

### 权限

- 菜单路由权限配置，菜单无权限时左侧边栏不会展示，页面无权限时会拦截至 403 页面

```
{
        path: "authPage",
        name: "authPage",
        component: () => import("../views/auth/authPage.vue"),
        meta: {
          title: "权限演示菜单",
          auth: "authPage",  //配置权限点key
        },
      },
```

- 组件权限采用 v-auth 指令并配置权限点 key

```
<input v-focus v-auth:authDirective />
```

### 请求拦截器

vue-admin 中已为您添加基于 axios 封装的请求拦截器配置 💖💖

- ##### 请求成功数据获取，异常数据捕获并 message 提示，401 拦截至登录界面
- ##### 全局 loading，默认请求时开启，请求完成时关闭，可配置关闭

```
export const appList = (params: any): Promise<any> =>
  request.get("/app", { params, loading: true }); // 不需要默认的全局loading效果可配置loading为false关闭 loading默认为true

```

- ##### 统一下载 blob 文件配置，您不需要单独处理下载 blob 文件流，只需要在请求接口配置中加入 responseType: "blob"；如果您想获取接口返回数据，直接在 promise.then(res => {}, rej=> {})中获取处理即可

```

export const exportGoods = (data: any) =>
  request.post("/export", data, {
    responseType: "blob",
  });
```

### 模式和环境变量

vue-admin 已默认添加常用的 development，qa，pre，prod 四种环境区分，您可根据实际业务需求增加或修改。

##### 环境变量

- NODE_ENV：当你运行 vue-cli-service build 命令时，无论你要部署到哪个环境，应该始终把 NODE_ENV 设置为 "production" 来获取可用于部署的应用程序
- VUE_APP_ENV：用于区分环境的变量，常用于区分不同环境下的服务端 api 域名

```
.env.prod

NODE_ENV = "production"
VUE_APP_ENV = 'prod'
```

```
src/consatnt/url.ts

export default {
  dev: {
    home: "http://localhost:7009",
  },
  qa: {
    home: "http://vue-admin.qa.com",
  },
  pre: {
    home: "http://vue-admin.pre.com",
  },
  prod: {
    home: "http://vue-admin.prod.com",
  },
};

```

### 功能模块

##### 登录

登录注入 token 在 cookie 中，有效期为一天
![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/%E7%99%BB%E5%BD%95.gif)

##### 首页

完备的首页布局，栅格式响应布局方案，echarts 图表使用
![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/%E9%A6%96%E9%A1%B5.gif)

##### 图标

引入阿里图标库，支持样式编辑，特别好用 ✨✨
![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/%E5%9B%BE%E6%A0%87.gif)

##### 模式和环境变量

企业项目实际使用场景区分 qa，pre，prod 环境，可根据实际情况添加修改
![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.png)

##### 权限

集成了菜单路由权限和组件指令权限
![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/auth.gif)

##### 表格

![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/%E5%9F%BA%E7%A1%80%E8%A1%A8%E6%A0%BC.png)

##### 表单

![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/%E5%9F%BA%E7%A1%80%E8%A1%A8%E5%8D%95.png)

##### 动画

element 动画和 animate.css 动画演示，突然想起来以前做移动端 h5 的时候有弹层滑入滑出的需求，所以撸了一下示例 😁😁

- element
  ![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/element.gif)
- animate.css
  ![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/animate.gif)

##### 错误页面

- 404-路由错误
  ![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/404.png)
- 403-访问权限
  ![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/403.png)
- 500-服务异常
  ![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/500.png)

##### lodash

这里我只演示了比较常用的防抖和节流的用法，很多小伙伴搞不清楚防抖和节流的区别，通过这个示例帮助一下了解 👋
![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/lodash.gif)

##### 路由嵌套

![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/sub1-1-2.png)

##### 组件

用富文本组件演示一下如何自定义封装一个表单组件
![image](https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/editor.gif)

##### 注销

注销时清空权限和 cookie 中的 token

### 结尾

该项目会不定时更新，该模板目前为 vue2.x 版本，后续会添加更多的模块，并推出 vue3 版本
欢迎和感谢大家 PR~~👏👏
若有问题，可加微信与我进行交流（szq10_04) 😁 😁

如果对你有帮助，给个 star 哟~~❤️❤️❤️❤️
