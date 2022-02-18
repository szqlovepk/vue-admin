<template>
  <div class="box">
    <div class="text">sub1-1</div>
    <router-view style="margin-top: 20px" />
  </div>
</template>

<style lang="less" scoped>
.box {
  padding: 20px;
  background: green;
  .text {
    color: white;
  }
}
</style>
