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
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.draw();
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    draw() {
      this.chart = this.$echarts.init(this.$refs.echartsContainer);
      // 绘制图表
      this.chart.setOption({
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
    },
    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    resize() {
      this?.chart.resize();
    },
  },
};
</script>

<style lang="less" scoped></style>
