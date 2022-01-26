<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { appList } from "@/api";

@Component({
  name: "Home",
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private mounted() {
    appList({ page: 1, pageSize: 100 }).then((res) => {
      console.log(res);
    });
  }
}
</script>
