<template>
  <div>
    <h3>fade 淡入淡出</h3>
    <div style="display: flex">
      <transition name="el-fade-in-linear">
        <div @click="trans('show1')" v-show="show1" class="transition-box">
          .el-fade-in-linear
        </div>
      </transition>
      <transition name="el-fade-in">
        <div @click="trans('show2')" v-show="show2" class="transition-box">
          .el-fade-in
        </div>
      </transition>
    </div>

    <h3>zoom 缩放</h3>
    <div style="display: flex">
      <transition name="el-zoom-in-center">
        <div @click="trans('show3')" v-show="show3" class="transition-box">
          .el-zoom-in-center
        </div>
      </transition>
      <transition name="el-zoom-in-top">
        <div @click="trans('show4')" v-show="show4" class="transition-box">
          .el-zoom-in-top
        </div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div @click="trans('show5')" v-show="show5" class="transition-box">
          .el-zoom-in-bottom
        </div>
      </transition>
    </div>

    <h3>collapse 展开折叠</h3>
    <el-collapse-transition>
      <div v-show="show6" @click="trans('show6')">
        <div class="transition-box">el-collapse-transition</div>
        <div class="transition-box">el-collapse-transition</div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Element",
})
export default class Element extends Vue {
  private show1 = false;
  private show2 = false;
  private show3 = false;
  private show4 = false;
  private show5 = false;
  private show6 = false;

  private mounted() {
    this.show1 = true;
    this.show2 = true;
    this.show3 = true;
    this.show4 = true;
    this.show5 = true;
    this.show6 = true;
  }

  private trans(field: string) {
    this[field] = false;
    setTimeout(() => {
      this[field] = true;
    }, 200);
  }
}
</script>

<style lang="less" scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
