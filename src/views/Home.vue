<template>
  <div class="home__container">
    <el-row class="card__first">
      <el-col :span="24">
        <el-card class="box-card">
          <Bar width="100%" height="500px" title="柱状图" />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="card__second">
        <el-card class="box-card">
          <Pie width="100%" height="300px" title="饼图" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="card__second">
        <el-card class="box-card">
          <ELine width="100%" height="300px" title="折线图" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { appList, pageMenus } from "@/api";
import { Bar, Pie, ELine } from "@/components";

@Component({
  name: "Home",
  components: {
    HelloWorld,
    Bar,
    Pie,
    ELine,
  },
})
export default class Home extends Vue {
  private mounted() {
    pageMenus().then((res) => {
      console.log(res);
    });
    appList({ page: 1, pageSize: 100 }).then((res) => {
      console.log(res);
    });
  }
}
</script>

<style lang="less" scoped>
.home__container {
  .card__first {
    margin-bottom: 10px;
  }
  .card__second {
    margin-bottom: 10px;
  }
}
</style>
