<template>
  <div>
    <el-card>
      <el-form :inline="true" :model="form" label-width="auto">
        <el-row>
          <el-col :span="6">
            <el-form-item label="测试姓名">
              <el-input v-model="form.item1" placeholder="item1"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="item2">
              <el-input v-model="form.item2" placeholder="item2"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="item3">
              <el-input v-model="form.item3" placeholder="item3"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="item4">
              <el-input v-model="form.item4" placeholder="item4"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="item5">
              <el-input v-model="form.item5" placeholder="item5"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="item6">
              <el-input v-model="form.item6" placeholder="item6"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start">
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card style="margin-top: 20px">
      <el-table :data="pagedTableData">
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40, 50]"
        :current-page.sync="pageNo"
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
  private pageNo = 1;
  private pageSize = 10;
  private form = {};

  private get pagedTableData() {
    return this.tableData.filter(
      (v, i) =>
        i >= (this.pageNo - 1) * this.pageSize &&
        i <= this.pageNo * this.pageSize - 1
    );
  }

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
    this.pageSize = val;
    this.pageNo = 1;
  }

  private handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
    this.pageNo = val;
  }

  private onSubmit() {
    console.log(this.form);
  }
}
</script>

<style></style>
