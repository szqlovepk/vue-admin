<template>
  <div v-if="!menu.hidden" class="SubMenu__container">
    <el-submenu
      :index="resolvePath()"
      v-if="menu.children && menu.children.filter((v) => !v.hidden).length > 0"
    >
      <template slot="title">
        {{ menu.meta.title }}
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
      <el-menu-item :index="menu.redirect ? menu.redirect : resolvePath()">
        {{ menu.meta.title }}
        <!-- {{ resolvePath() }} -->
      </el-menu-item>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "SubMenu",
})
export default class SubMenu extends Vue {
  @Prop() menu!: any;
  @Prop({ default: "" }) basePath!: string;

  private resolvePath() {
    if (this.menu.redirect) return this.menu.redirect;
    else if (this.basePath)
      return `${this.basePath}${this.menu.path ? "/" + this.menu.path : ""}`;
    else return this.menu.path;
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
