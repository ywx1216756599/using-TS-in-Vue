<template>
  <div class="echarts">
    <div
      :style="{ width: chartWidth, height: chartHeight }"
      class="no-data"
      v-if="noData"
    >
      <span>画图展无数据</span>
    </div>
    <div ref="line" :style="{ width: chartWidth, height: chartHeight }"></div>
  </div>
</template>

<script>
import './../css/index.css'
import OptionLine from './echarts-line'
import echartsMixin from './../Defalut/mixin'
export default {
  name: 'XLine',
  mixins: [echartsMixin],
  mounted() {
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
      this.myChart = this.$echarts.init(this.$refs.line, theme)
      //设置OptionBar对象
      const line = new OptionLine(this.chartData, this.settings, this.extend)
      //开始画图
      this.myChart.setOption(line.option)
    }
  },
}
</script>

<style lang='scss'>
.echarts{
  height: 100%;
}
</style>
