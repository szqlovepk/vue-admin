<template>
  <div v-if="!menu.hidden" class="SubMenu__container">
    <el-submenu
      :index="resolvePath()"
      v-if="
        menu.children &&
        menu.children.length > 0 &&
        menu.children.some((v) => !v.hidden)
      "
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
    <router-link :to="{ name: menu.name }" v-else>
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
    if (this.basePath) return this.basePath + "/" + this.menu.path;
    else return this.basePath + this.menu.path;
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
