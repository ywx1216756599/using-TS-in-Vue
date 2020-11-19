//导入父类
import defaultConfig from './../Defalut/index'

export default class Gauge extends defaultConfig {
  constructor({ rows = [], columns = [], header = columns[0] }, settings = {}, extend = {}, series = {}) {
    super()
    this.option = this.defaultConfig
    this.option.series = rows.map(item => {
      return {
        type: 'gauge',
        name: item[header],
        detail: { formatter: '{value}' },
        data: [{
          value: parseFloat(item['value']),
          name: item['type']
        }]
      }
    })
    this.mySettings(this.option, settings)
    // series配置项
    this.option.series = this.option.series.map(item => this.setNewStyle(series, item))
    this.option = this.setNewStyle(extend, this.option)

  }
  mySettings = (option, settings) => {
    this.defaultOption(option)
    this.hiddenXY(option)
    this.deleteType(option)
    if (settings.gaugeAngle) {
      this.setGaugeAngle(option, settings)
    }
    if (settings.valueRange) {
      this.setValueRange(option, settings)
    }
    if (settings.gaugeTitle) {
      this.setGaugeTitle(option, settings)
    }
    if (settings.gaugeDetail) {
      this.setGaugeDetail(option, settings)
    }
  }
  defaultOption(option) {
    const legendOption = {
      show: false
    }
    const tooltipOption = {
      trigger: 'item'
    }
    option.legend = this.setNewStyle(legendOption, option.legend)
    option.tooltip = this.setNewStyle(tooltipOption, option.tooltip)
  }
  //删除特殊值
  deleteType(option) {
    delete option.xAxis
    delete option.yAxis
    delete option.dataZoom
  }
  setGaugeAngle(option, { gaugeAngle }) {
    option.series.forEach(item => {
      item.startAngle = gaugeAngle[0]
      item.endAngle = gaugeAngle[1]
    })
  }
  setValueRange = (option, { valueRange }) => {
    option.series.forEach(item => {
      item.min = valueRange[0]
      item.max = valueRange[1]
    })
  }
  setGaugeTitle = (option, { gaugeTitle }) => {
    option.series.forEach(item => {
      item.title = gaugeTitle
    })
  }
  setGaugeDetail = (option, { gaugeDetail }) => {
    option.series.forEach(item => {
      item.detail = gaugeDetail
    })
  }
}