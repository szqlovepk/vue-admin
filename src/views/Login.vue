<template>
  <div class="login__container">
    <div class="login__form">
      <h3>vue-admin</h3>
      <el-form ref="form" :model="form" :rules="rules" hide-required-asterisk>
        <el-form-item prop="username">
          <el-input v-model="form.username">
            <i slot="prefix" class="el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password">
            <i slot="prefix" class="el-icon-key"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      <p>账号: admin &nbsp;&nbsp;密码: 随便填</p>
      <p>账号: visitor &nbsp;&nbsp;密码: 随便填</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from "vue-property-decorator";
@Component({
  name: "Login",
})
export default class Login extends Vue {
  @Ref("form") formRef: any;

  private form = {
    username: "",
    password: "",
  };

  private rules = {
    username: [{ required: true, message: "请输入账号", trigger: "change" }],
    password: [{ required: true, message: "请输入密码", trigger: "change" }],
  };

  onSubmit() {
    this.formRef.validate((valid: boolean) => {
      if (valid) {
        const { username } = this.form;
        if (username === "admin") {
          this.$message.success("admin");
          this.$router.push("/");
        } else if (username === "visitor") {
          this.$router.push("/");
          this.$message.success("visitor");
        } else {
          this.$message.warning("请检查账号密码！");
        }
      } else {
        return false;
      }
    });
  }
}
</script>

<style lang="less" scoped>
.login__container {
  .login__form {
    max-width: 500px;
    padding: 20px;
    text-align: center;
    margin: 0 auto;
    margin-top: 100px;
  }
}
</style>
