<template>
  <div class="animate__container">
    <el-row>
      <el-col :span="14">
        <div style="display: flex; flex-wrap: wrap">
          <div
            v-for="key in animate"
            :key="key"
            :class="`${animateDoing === key && 'animate__animated'}
                   ${key}
                  ${
                    animateDoing === key && 'animate__infinite'
                  } transition-box`"
            @mouseenter="animateDoing = key"
            @mouseleave="animateDoing = ''"
          >
            {{ key }}
          </div>
        </div>
      </el-col>

      <el-col :span="10">
        <h3>example:</h3>
        <div class="example__container">
          <div
            :class="`modal animate__animated ${
              modalIsIn ? 'animate__slideInDown' : 'animate__slideOutUp'
            }`"
            v-show="modalVisible"
          >
            <div class="center">
              我是弹层<i class="el-icon-error" @click="close" />
            </div>
          </div>
          <el-button class="btn" @click="open">打开弹层</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import "animate.css";
@Component({
  name: "Element",
})
export default class Element extends Vue {
  private animate = [
    //https://animate.style/ 可继续扩充查看实例
    "animate__bounce",
    "animate__flash",
    "animate__pulse",
    "animate__rubberBand",
    "animate__shakeX",
    "animate__shakeY",
    "animate__headShake",
    "animate__swing",
    "animate__tada",
    "animate__wobble",
    "animate__jello",
    "animate__heartBeat",
    "animate__backInDown",
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInUp",
    "animate__backOutDown",
    "animate__backOutLeft",
    "animate__backOutRight",
    "animate__backOutUp",
    "animate__bounceIn",
    "animate__bounceInDown",
    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__bounceInUp",
  ];
  private animateDoing = "";
  private modalVisible = false;
  private modalIsIn = false;

  private open() {
    this.modalVisible = true;
    this.modalIsIn = true;
  }
  private close() {
    this.modalIsIn = false;
  }
}
</script>

<style lang="less" scoped>
.animate__container {
  /* Only this element will work */
  // .my-element {
  //   --animate-duration: 5s;
  //   --animate-delay: 5s;
  //   --animate-repeat: 4;
  // }
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
  .example__container {
    position: relative;
    width: 366px;
    height: 659px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    overflow: hidden;
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
