<template>
  <div>
    <el-menu :default-openeds="defaultOpen" :default-active="activeMenu">
      <SubMenu v-for="menu in routes" :key="menu.path" :menu="menu" />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SubMenu from "./SubMenu.vue";
// import routes from "../../../router/config";
import routes from "@/router/config";
@Component({
  name: "Menu",
  components: { SubMenu },
})
export default class Menu extends Vue {
  private defaultOpen = [];
  private routes = routes;

  private get activeMenu() {
    return this.$route.path;
  }
}
</script>

<style></style>
