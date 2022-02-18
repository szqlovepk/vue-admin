<template>
  <el-container direction="vertical" style="height: 100%">
    <Header />
    <el-container style="overflow: auto">
      <el-aside width="250px">
        <Menu />
      </el-aside>
      <el-main>
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          v-if="showBreadcrumb"
        >
          <template v-for="(route, index) in matchedRoutes">
            <el-breadcrumb-item
              v-if="
                (route.meta && route.meta.breadcrumbTo === false) ||
                index === matchedRoutes.length - 1
              "
              :key="route.path"
            >
              {{ route.meta.title }}
              <!-- {{ route.path }} -->
            </el-breadcrumb-item>
            <el-breadcrumb-item
              v-else
              :key="route.path"
              :to="{ path: route.path }"
            >
              {{ route.meta.title }}
              <!-- {{ route.path }} -->
            </el-breadcrumb-item>
          </template>
        </el-breadcrumb>
        <router-view style="margin-top: 20px" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "./Header.vue";
import Menu from "./Menu.vue";
// import { IBaseRouter } from "@/router/config";
@Component({
  name: "Layout",
  components: { Header, Menu },
})
export default class Layout extends Vue {
  private mounted() {
    console.log(this.$route);
  }

  private get showBreadcrumb() {
    return this.$route?.meta?.breadcrumbAll !== false;
  }

  // private getPath(route: IBaseRouter) {
  //   return route?.meta?.breadcrumbTo === false ? null : route?.path;
  // }

  private get matchedRoutes() {
    return this.$route.matched?.filter(
      (v) => v.meta?.title && v?.meta?.breadcrumb !== false
    );
  }
}
</script>

<style lang="less" scoped></style>
