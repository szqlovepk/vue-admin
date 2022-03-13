<template>
  <el-header class="dashboard__header">
    <img class="dashboard__logo" src="@/assets/logo.png" />
    <el-dropdown @command="handleCmd">
      <div class="dashboard__info">
        <span class="name">你好 {{ username }}</span>
        <el-avatar :size="30" :src="avatar" />
      </div>

      <el-dropdown-menu slot="dropdown" trigger="click">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import authModule from "@/store/modules/auth";
@Component({
  name: "Header",
})
export default class Header extends Vue {
  private avatar = "https://joeschmoe.io/api/v1/random";

  get username() {
    return this.$Cookies.get("vue_admin_token");
  }

  handleCmd(command: string) {
    if (command === "home") this.$router.push("/home");
    else if (command === "logout") {
      // 注销
      authModule.clearAuth();
      this.$Cookies.remove("vue_admin_token");
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
.dashboard__info {
  display: flex;
  align-items: center;
  .name {
    color: white;
    margin-right: 10px;
  }
}
</style>
