<template>
  <div class="home">
    <el-row type="flex" justify="space-around" class="data-show">
      <el-col :span="10">
        <more-important-data></more-important-data>
      </el-col>
      <el-col :span="13">
        <important-data></important-data>
      </el-col>
    </el-row>
    <el-row class="data-chart">
      <el-col :span="24">
        <scatter-chart></scatter-chart>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImportantData from "./components/ImportantData.vue";
import MoreImportantData from "./components/MoreImportantData.vue";
import ScatterChart from "./components/ScatterChart.vue";
@Component({
  name: "Home",
  components:{
    ImportantData,
    MoreImportantData,
    ScatterChart
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  height: 100%;
  .data-show {
    height: 68%;
  }
  .data-chart {
    margin: 1% 0px;
    height: 28%;
  }
  .el-col {
    height: 100%;
  }
}
</style>