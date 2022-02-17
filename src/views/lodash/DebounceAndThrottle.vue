<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card>
          <div slot="header">
            <span>正常</span>
          </div>
          <div>
            <el-input
              v-model="normalContent"
              placeholder="请输入内容"
            ></el-input>
            {{ normalContent }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card>
          <div slot="header">
            <span>防抖(800ms)</span>
          </div>
          <div>
            <el-input
              v-model="debounceContent"
              placeholder="请输入内容"
              @input="handleDebounce"
            ></el-input>
            {{ debouncedTxt }}
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card>
          <div slot="header">
            <span>节流(800ms)</span>
          </div>
          <el-input
            v-model="throttleContent"
            placeholder="请输入内容"
            @input="handleThrottle"
          ></el-input>
          {{ throttledTxt }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      debounceContent: "",
      debouncedTxt: "",
      throttleContent: "",
      normalContent: "",
      throttledTxt: "",
    };
  },
  methods: {
    handleDebounce: _.debounce(function (value) {
      this.debouncedTxt = value;
    }, 800),

    handleThrottle: _.throttle(function (value) {
      this.throttledTxt = value;
    }, 800),
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
