<template>
  <div class="echarts">
    <div
      :style="{ width: chartWidth, height: chartHeight }"
      class="no-data"
      v-if="noData"
    >
      <span>画图展无数据</span>
    </div>
    <div
      ref="bar"
      :style="{ width: chartWidth, height: chartHeight }"
    ></div>
  </div>
</template>

<script>
import './../css/index.css'
import OptionBar from './echarts-bar'
import echartsMixin from './../Defalut/mixin'
export default {
  name: 'XBar',
  mixins: [echartsMixin],
  mounted() {
    //调用初始化画图函数
    console.log(this.chartHeight)
    this.initChart()
  },
  methods: {
    //初始化画图
    initChart() {
      let theme = ''
      if (this.settings.theme) {
        theme = this.settings.theme
      }
      //设置画图对象
      this.myChart = this.$echarts.init(this.$refs.bar, theme)
      //设置OptionBar对象
      const bar = new OptionBar(this.chartData, this.settings, this.extend, this.series)
      //开始画图
      this.myChart.setOption(bar.option)
    },
  }
}
</script>

<style lang='scss'>
.echarts{
  height: 100%;
}
</style>
