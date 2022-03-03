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
        tooltip: {},
        series: [
          {
            name: "渠道来源",
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 234,
                name: "联盟广告",
              },
              {
                value: 1548,
                name: "搜索引擎",
              },
            ],
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
