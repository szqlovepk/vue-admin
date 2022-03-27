<template>
  <div class="home__container">
    <p class="updateTime">更新于{{ updateTime }}</p>
    <el-row :gutter="30">
      <el-col :span="8">
        <el-card class="card">
          <span>销量：</span>
          <countTo
            :startVal="0"
            :endVal="nums.sales"
            :duration="1000"
          ></countTo>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card">
          <span>人数：</span>
          <countTo
            :startVal="0"
            :endVal="nums.people"
            :duration="1000"
          ></countTo>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card">
          <span>收益：</span>
          <countTo
            :startVal="0"
            :endVal="nums.amount"
            :duration="1000"
          ></countTo>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="card">
      <el-col :span="24">
        <div @click="$router.push('/home/bar/100%/80%')">
          <el-card>
            <Bar width="100%" height="500px" title="柱状图" />
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="card">
        <div @click="$router.push('/home/pie/100%/80%')">
          <el-card>
            <Pie width="100%" height="300px" title="饼图" />
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="card">
        <div @click="$router.push('/home/line/100%/80%')">
          <el-card>
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
import countTo from "vue-count-to";
import { format } from "timeago.js";

@Component({
  name: "Home",
  components: {
    Bar,
    Pie,
    ELine,
    countTo,
  },
})
export default class Home extends Vue {
  private nums = {
    sales: 0,
    people: 0,
    amount: 0,
  };
  private updateTime = "";

  private mounted() {
    setTimeout(() => {
      this.nums = {
        sales: 13000,
        people: 20000,
        amount: 108000,
      };
      this.updateTime = format("2022-03-27 20:33:00", "zh_CN");
    }, 1000);
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
  .card {
    margin-bottom: 10px;
    cursor: pointer;
  }
  .updateTime {
    font-size: 12px;
    color: #606266;
  }
}
</style>
