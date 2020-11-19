//导入父类
import defaultConfig from './../Defalut/index'

export default class OptionLine extends defaultConfig {
  constructor({ rows = [], columns = [], header = columns[0] }, settings = {}, extend = {}) {
    super()
    if (rows.length === 0 || columns.length === 0 || !header) {
      this.option = {}
    } else {
      const keyArr = columns.filter(item => item !== header)
      this.option = this.defaultConfig
      this.option.xAxis.data = rows.map(item => item[header])
      this.option.series = keyArr.map(item => {
        return {
          name: item,
          type: 'line',
          data: rows.map(list => list[item]),
        }
      })
      this.mySettings(this.option, settings)
      this.option = this.setNewStyle(extend, this.option)
    }
  }
  mySettings = (option, settings) => {
    if (settings.legendName) {
      const { legendName } = settings
      this.setOtherName(option, legendName)
    }
    if (settings.stack) {
      const { stack } = settings
      this.setStack(option, stack)
    }
    if (settings.label) {
      const { label } = settings
      this.setLabel(option, label)
    }
    if (settings.myAxis) {
      let axis = settings.switchAxis ? settings.switchAxis.axis : 'xAxis'
      const { myAxis } = settings
      this.setMyAxis(option, myAxis, axis)
    }
    if (settings.xAxisType) {
      this.setXAxisType(option, settings)
    }
    if (settings.area) {
      this.setArea(option, settings)
    }
    if (settings.smooth) {
      this.setSmooth(option, settings)
    }
  }
  setOtherName = (option, legendName) => {
    option.legend.formatter = (name) => {
      if (legendName[name]) return legendName[name]
      return name
    }
    option.tooltip.formatter = (val) => {
      let axisName = val[0].axisValue, list = ''
      val.forEach(item => {
        if (legendName[item.seriesName]) {
          list = list + `
        <div>
          <div style="background-color:${item.color};
          display: inline-block;
          width:10px;
          height:10px;
          border-radius:10px;
          margin-right:5px"></div>
          ${legendName[item.seriesName]}: ${item.data}
        </div>`
        } else {
          list = list + `
        <div>
          <div style="background-color:${item.color};
          display: inline-block;
          width:10px;
          height:10px;
          border-radius:10px;
          margin-right:5px"></div>
          ${item.seriesName}: ${item.data}
        </div>`
        }
      })
      return `
      <div>${axisName}</div>
      ${list}
      `
    }
  }
  setStack(option, stack) {
    const stackKeyArr = Object.keys(stack)
    stackKeyArr.forEach(item => {
      option.series.forEach(list => {
        for (let key in stack[item]) {
          if (list.name === stack[item][key]) {
            list.stack = item
          }
        }
      })
    })
  }
  setLabel(option, label) {
    option.series.forEach(item => {
      item.label = this.setNewStyle(label, this.label)
    })
  }
  setMyAxis(option, myAxis, axis) {
    let showAxis = 'xAxis'
    if (axis == showAxis) {
      showAxis = 'yAxis'
    }
    if (myAxis.axisType) {
      option[showAxis] = myAxis.axisType.map(item => {
        switch (item) {
          case 'K':
            return {
              type: 'value',
              axisLabel: {
                formatter: value => `${value / 1000}K`
              }
            }
          case '%':
            return {
              type: 'value',
              axisLabel: {
                formatter: value => `${value * 100}%`
              }
            }
          case 'normal':
            return {
              type: 'value',
              axisLabel: {
                formatter: value => value
              }
            }
          default:
            alert('请输入正确的axisType值')
            return {
              axisLabel: {
                formatter: value => value
              }
            }
        }
      })
    } else {
      option[showAxis] = [{ type: 'value' }, { type: 'value' }]
    }
    if (myAxis.axisName) {
      const { axisName } = myAxis
      option[showAxis] = this.setNewStyle(axisName.map(item => ({ name: item })), option[showAxis])
    }
    if (!myAxis.axisSite) {
      return
    }
    const { axisSite } = myAxis
    let axisSiteArr = Object.keys(axisSite)
    axisSiteArr.forEach(item => {
      if (item === 'right') {
        option.series.forEach(list => {
          axisSite[item].forEach(key => {
            if (list.name === key) {
              list[`${showAxis}Index`] = 1
            }
          })
        })
      }
    })
    console.log(option)
  }
  setXAxisType = (option, { xAxisType }) => {
    if (Object.prototype.toString.call(option.xAxis) === '[object Array]') {
      option.xAxis.forEach(item => {
        item.type = xAxisType
      })
    } else {
      option.xAxis.type = xAxisType
    }
  }
  setArea = (option, { area }) => {
    if (area.areaStyle) {
      option.series = option.series.map(item => this.setNewStyle({
        areaStyle: area.areaStyle,
        stack: item.stack ? item.stack : '总量'
      }, item))
    }
  }
  setSmooth = (option, { smooth }) => {
    option.series.forEach(item => item.smooth = smooth)
  }
}