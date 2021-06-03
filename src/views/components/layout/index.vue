<template>
  <el-container direction="vertical">
    <Header />
    <el-container>
      <el-aside width="250px">
        <Menu />
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
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
  private avatar =
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
}
</script>

<style lang="less" scoped></style>
