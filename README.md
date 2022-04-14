# vue-admin

## a solution for vue middle or background system(vue 中后台系统解决方案)

### [预览地址](https://szqlovepk.github.io/vue-admin-dist/)&#x1F601;&#x1F601;

### 前言 🔥🔥🔥🔥🔥🔥

> vue 作为国内前端最常用的 js 框架之一，在处理复杂交互的单页应用中对国内码农很友好，文档比较详细。对于中后台管理系统企业开发比较常用，所以利用空余时间集成了一个常用版本出来(没有 vue 基础的同学可以先学习 [vue](https://cn.vuejs.org/) 的基础知识)，可 clone 至本地进行业务快速开发

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
https://github.com/szqlovepk/project-photos/blob/master/imgs/vue-admin/%E6%9D%83%E9%99%90%E6%BC%94%E7%A4%BA%E6%8C%87%E4%BB%A4.png

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

### 安装运行

1.下载或克隆项目源码

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

### 结尾

该项目会不定时更新，该模板目前为 vue2.x 版本，后续会添加更多的模块，并推出 vue3 版本，增加 cli 脚手架下载
欢迎和感谢大家 PR~~👏👏
若有问题，可加微信与我进行交流（szq10_04) 😁 😁

如果对你有帮助，给个 star 哟~~❤️❤️❤️❤️
