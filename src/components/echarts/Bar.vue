<template>
  <div ref="echartsContainer" :style="{ width, height }"></div>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    title: {
      type: String,
      required: false,
    },
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      const myChart = this.$echarts.init(this.$refs.echartsContainer);
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.title,
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      window.onresize = function () {
        myChart.resize({});
      };
    },
  },
};
</script>

<style lang="less" scoped></style>
