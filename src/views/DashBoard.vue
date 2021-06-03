<template>
  <div>
    <el-card>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import dayjs from "dayjs";
@Component({
  name: "DashBoard",
})
export default class DashBoard extends Vue {
  private tableData: Array<any> = [];

  private mounted() {
    let datas = [];
    for (let i = 0; i < 400; i++) {
      datas.push({
        date: dayjs().format("YYYY-MM-DD"),
        name: `姓名${i}`,
        address: `地址${i}`,
      });
    }
    this.tableData = datas;
  }

  private handleSizeChange(val: number) {
    console.log(`每页 ${val} 条`);
  }

  private handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
  }
}
</script>

<style></style>
