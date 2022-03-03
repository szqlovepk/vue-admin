<template>
  <div ref="echartsContainer" :style="{ width, height }"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true,
      default: "100%",
    },
    height: {
      type: String,
      required: true,
      default: "100%",
    },
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
        xAxis: {
          type: "category",
          data: ["A", "B", "C"],
        },
        yAxis: {
          type: "value",
        },
        tooltip: {},
        series: [
          {
            data: [120, 200, 150],
            type: "line",
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
