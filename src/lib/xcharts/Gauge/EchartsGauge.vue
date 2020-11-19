<template>
  <div class="echarts">
    <div
      :style="{ width: chartWidth, height: chartHeight }"
      class="no-data"
      v-if="noData"
    >
      <span>画图展无数据</span>
    </div>
    <div ref="gauge" :style="{ width: chartWidth, height: chartHeight }"></div>
  </div>
</template>

<script>
import './../css/index.css'
import OptionGauge from './echarts-gauge'
import echartsMixin from './../Defalut/mixin'
export default {
  name: 'XGauge',
  mixins: [echartsMixin],
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      let theme = ''
      if (this.settings.theme) {
        theme = this.settings.theme
      }
      //设置画图对象
      this.myChart = this.$echarts.init(this.$refs.gauge, theme)
      const gauge = new OptionGauge(this.chartData, this.settings, this.extend, this.series)
      this.myChart.setOption(gauge.option)
    },
  }
}
</script>

<style>
</style>