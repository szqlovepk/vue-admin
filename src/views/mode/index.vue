<template>
  <div>
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
