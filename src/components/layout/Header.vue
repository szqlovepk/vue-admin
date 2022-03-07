<template>
  <el-header class="dashboard__header">
    <img class="dashboard__logo" src="@/assets/logo.png" />
    <el-dropdown @command="handleCmd">
      <el-avatar :size="30" :src="avatar" />
      <el-dropdown-menu slot="dropdown" trigger="click">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Header",
})
export default class Header extends Vue {
  private avatar =
    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

  handleCmd(command: string) {
    if (command === "home") this.$router.push("/home");
    else if (command === "logout") {
      // 注销
      this.$router.push(
        `/login?redirect=${encodeURIComponent(this.$route.fullPath)}`
      );
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard__header {
  padding: 0 10px;
  background: #4e8de7;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dashboard__logo {
  width: 60px;
  height: 60px;
}
</style>
