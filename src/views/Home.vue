<template>
  <div class="home__container">
    <el-row class="card__first">
      <el-col :span="24">
        <div @click="$router.push('/home/bar/100%/80%')">
          <el-card class="box-card">
            <Bar width="100%" height="500px" title="柱状图" />
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="card__second">
        <div @click="$router.push('/home/pie/100%/80%')">
          <el-card class="box-card">
            <Pie width="100%" height="300px" title="饼图" />
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="card__second">
        <div @click="$router.push('/home/line/100%/80%')">
          <el-card class="box-card">
            <ELine width="100%" height="300px" title="折线图" />
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { appList, pageMenus, exportGoods } from "@/api"; // @ is an alias to /src
import { Bar, Pie, ELine } from "@/components";

@Component({
  name: "Home",
  components: {
    Bar,
    Pie,
    ELine,
  },
})
export default class Home extends Vue {
  private mounted() {
    // pageMenus({ appId: 107, versionId: 82 }).then((res) => {
    //   console.log(res);
    // });
    // appList({ page: 1, pageSize: 100 }).then((res) => {
    //   console.log(res);
    // });
    // const formData = new FormData();
    // formData.append("goodsId", "361283163160578,361274405355522");
    // exportGoods(formData)
    //   .then(
    //     (res) => {
    //       console.log("res:", res);
    //     },
    //     (rej) => {
    //       console.log("rej:", rej);
    //     }
    //   )
    //   .catch((e) => {
    //     console.log("catch:", e);
    //   });
  }
}
</script>

<style lang="less" scoped>
.home__container {
  .card__first {
    margin-bottom: 10px;
    cursor: pointer;
  }
  .card__second {
    margin-bottom: 10px;
    cursor: pointer;
  }
}
</style>
