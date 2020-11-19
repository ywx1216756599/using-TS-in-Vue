// 导入组件，组件必须声明 name
import EchartsGauge from './EchartsGauge.vue'

// 为组件添加 install 方法，用于按需引入
EchartsGauge.install = function (Vue) {
    Vue.component(EchartsGauge.name, EchartsGauge)
}

export default EchartsGauge