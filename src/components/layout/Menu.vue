<template>
  <el-menu :default-active="activeMenu" style="height: 100%">
    <SubMenu v-for="menu in authRoutes" :key="menu.path" :menu="menu" />
  </el-menu>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SubMenu from "./SubMenu.vue";
import routes from "@/router/config";
import { filterAuthRoutes } from "@/utils";
@Component({
  name: "Menu",
  components: { SubMenu },
})
export default class Menu extends Vue {
  private get authRoutes() {
    const filteredAuthRoutes = filterAuthRoutes(routes);
    console.log("menuRoutes:", filteredAuthRoutes);
    return filteredAuthRoutes;
  }

  private get activeMenu() {
    console.log("route:", this.$route);
    const activeMenu = this.$route?.meta?.activeMenu || this.$route.path;
    return activeMenu;
  }
}
</script>

<style></style>
