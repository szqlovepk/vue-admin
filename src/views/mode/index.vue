<template>
  <div>
    <p>
      参考vue-cli<a
        href="https://cli.vuejs.org/zh/guide/mode-and-env.html"
        target="_blank"
        >模式和环境变量</a
      >进行配置，vue-admin中演示实际开发中常用到自定义环境变量区分本地开发dev环境，qa环境，预发pre环境和线上生产prod环境
    </p>
    <p>process.env.NODE_ENV：{{ nodeEnv }}</p>
    <p>process.env.VUE_APP_ENV：{{ vueAppEnv }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "ModeEnv",
})
export default class ModeEnv extends Vue {
  get nodeEnv() {
    return process.env.NODE_ENV;
  }
  get vueAppEnv() {
    return process.env.VUE_APP_ENV;
  }
}
</script>

<style></style>
