<template>
  <div class="scatter-chart" ref="scatter">
    <x-scatter
      :extend="extend"
      :settings="settings"
      :series="series"
      :chartWidth="chartWidth"
      :chartHeight="chartHeight"
      :chartData="chartData"
    ></x-scatter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  Extend,
  Settings,
  Series,
  ChartData,
} from "./../interface/scatter-chart";
@Component({
  name: "ScatterChart",
})
export default class ScatterChart extends Vue {
  public chartWidth: string;
  public chartHeight: string;
  public extend: Extend;
  public settings: Settings;
  public series: Series;
  public chartData: ChartData;

  created() {
    this.chartWidth = "100%";
    this.chartHeight = "100%";
    this.extend = {
      backgroundColor: "transparent",
      legend: {
        show: false,
      },
      color: ["#427DFF", "#E65C61", "#003bbe", "#a6191f"],
      title: {
        show: true,
        text: "冷\n却\n水\n设\n备\n分\n布\n图",
        textStyle: {
          width: 10,
        },
      },
      grid: {
        height: "70%",
        top: "10%",
      },
      tooltip: {
        trigger: "item",
      },
      xAxis: {
        name: "水槽",
        splitLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: {
        name: " ",
        splitNumber: 2,
        max(value) {
          return value.max + value.max / 5;
        },
        splitLine: { show: false },
        axisTick: { show: false },
      },
    };
    this.settings = {
      theme: "dark",
      seriesType: ["scatter", "scatter", "effectScatter", "effectScatter"],
    };
    this.series = [
      { symbolSize: 10 },
      { symbolSize: 10 },
      { symbolSize: 20, rippleEffect: { period: 2, scale: 5 } },
      { symbolSize: 20, rippleEffect: { period: 2, scale: 5 } },
    ];
    this.chartData = {
        columns: ['time', 'water', 'speed', 'overWater', 'overSpeed'],
        rows: [
          { time: '1', water: '200', speed: '400' },
          { time: '2', overWater: '500', speed: '410' },
          { time: '3', water: '210', speed: '420' },
          { time: '4', water: '230', speed: '410' },
          { time: '5', water: '210', speed: '410' },
          { time: '6', water: '210', speed: '430' },
          { time: '7', water: '220', speed: '420' },
          { time: '8', water: '200', speed: '410' },
          { time: '9', water: '210', speed: '430' },
          { time: '10', water: '220', overSpeed: '620' },
          { time: '11', water: '200', speed: '430' },
          { time: '12', water: '230', speed: '400' },
          { time: '13', water: '200', speed: '410' },
          { time: '14', water: '220', speed: '420' },
          { time: '15', water: '200', overSpeed: '630' },
          { time: '16', water: '240', speed: '400' },
          { time: '17', water: '210', speed: '420' },
          { time: '18', water: '200', speed: '400' },
        ],
      }
  }

  mounted() {
    window.onresize = () => {
      console.log(2)
      this.$refs.scatter.width = window.innerWidth - 200 + "px";
      console.log(this.$refs.scatter.offsetWidth);
      this.chartWidth = this.$refs.scatter.setoffWidth;
    };
  }
}
</script>

<style lang="scss">
.scatter-chart {
  height: 100%;
  padding: 5px 20px;
  box-sizing: border-box;
  border: 1px solid rgb(79, 217, 236);
  box-shadow: 0px 0px 50px rgba(79, 217, 236, 0.5) inset;
}
</style>