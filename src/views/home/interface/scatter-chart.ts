export interface Extend {
  backgroundColor: string,
  legend: {
    show: boolean
  },
  color: string[],
  title: {
    show: boolean,
    text: string,
    textStyle: {
      width: number | string
    }
  },
  grid: {
    height: number | string,
    top: number | string
  },
  tooltip: {
    trigger: string
  },
  xAxis: {
    name: string,
    splitLine: { show: boolean },
    axisTick: { show: boolean }
  },
  yAxis: {
    name: string,
    splitNumber: number,
    max: (value: any) => void
    splitLine: { show: boolean },
    axisTick: { show: boolean },
  },
}

export interface Settings {
  theme: string,
  seriesType: string[],
}

export type Series = object[] | object

export interface ChartData {
  columns: string[],
  rows: object[],
}