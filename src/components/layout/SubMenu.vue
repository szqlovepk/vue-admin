<template>
  <div v-if="!menu.hidden" class="SubMenu__container">
    <el-submenu
      :index="resolvePath()"
      v-if="menu.children && menu.children.filter((v) => !v.hidden).length > 0"
    >
      <template slot="title">
        {{ getMenuTitle(menu) }}
        <!-- {{ resolvePath() }} -->
      </template>
      <SubMenu
        v-for="subMenu in menu.children"
        :key="subMenu.path"
        :menu="subMenu"
        :basePath="resolvePath()"
      />
    </el-submenu>
    <router-link :to="{ path: resolvePath() }" v-else>
      <el-menu-item :index="resolvePath()">
        {{ getMenuTitle(menu) }}
        <!-- {{ resolvePath() }} -->
      </el-menu-item>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IBaseRouter } from "@/router/config";
import path from "path";
@Component({
  name: "SubMenu",
})
export default class SubMenu extends Vue {
  @Prop() menu!: any;
  @Prop({ default: "" }) basePath!: string;

  private getMenuTitle(menu: IBaseRouter) {
    return menu?.meta?.title;
  }

  private resolvePath() {
    // 如果子路由正好等于一个并且有重定向配置 就会默认将重定向的路由作为根路由显示在侧边栏中
    if (this.menu.redirect && this.menu?.children?.length === 1)
      return this.menu.redirect;
    else if (this.basePath) {
      return path.resolve(this.basePath, this.menu.path);
    } else return this.menu.path;
  }
}
</script>

<style lang="less" scoped>
.SubMenu__container {
  a {
    text-decoration: none;
  }
}
</style>
