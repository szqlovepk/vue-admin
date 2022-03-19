<template>
  <div class="element__container">
    <el-row>
      <el-col :span="14">
        <h3>鼠标点击查看效果</h3>
        <h3>fade 淡入淡出</h3>
        <div style="display: flex; flex-wrap: wrap">
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
        <div style="display: flex; flex-wrap: wrap">
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
      </el-col>

      <el-col :span="10">
        <h3>example:</h3>
        <div class="example__container background">
          <transition name="el-zoom-in-top">
            <div class="modal" v-show="modalVisible">
              <div class="center">
                我是弹层<i class="el-icon-error" @click="close" />
              </div>
            </div>
          </transition>

          <el-button class="btn" @click="open">打开弹层</el-button>
        </div>
      </el-col>
    </el-row>
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
  private modalVisible = false;

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

  private open() {
    this.modalVisible = true;
  }
  private close() {
    this.modalVisible = false;
  }
}
</script>

<style lang="less" scoped>
.element__container {
  .transition-box {
    cursor: pointer;
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
  .example__container {
    position: relative;
    width: 366px;
    height: 659px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    .modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: cyan;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      justify-content: center;
    }
  }
}
</style>
