<template>
  <el-container direction="vertical">
    <Header />
    <el-container>
      <el-aside width="250px">
        <Menu />
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            :to="{ path: route.path }"
            v-for="route in matchedRoutes"
            :key="route.path"
            >{{ route.meta.title }}</el-breadcrumb-item
          >
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
@Component({
  name: "DashBoard",
  components: { Header, Menu },
})
export default class DashBoard extends Vue {
  private mounted() {
    console.log(this.$route);
  }

  private get matchedRoutes() {
    return this.$route.matched.filter((v, i) => i > 0);
  }
}
</script>

<style lang="less" scoped></style>
