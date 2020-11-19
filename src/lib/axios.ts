import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'


export default class Interceptors {
  public instance: any
  public loading: any
  constructor() {
    this.instance = axios.create({
      baseURL: '',
      timeout: 10000,
      headers: {
        'Content-Type': "application/json;charset=utf-8"
      },
    })
    this.initInterceptors()
  }
  private startLoading(): void {
    this.loading = Loading.service({
      lock: true,
      text: '正在加载数据...',
      background: "rgba(0, 0, 0, 0.8)"
    })
  }
  private endLoading(): void { //使用Element loading-close 方法
    this.loading.close()
  }

  public initInterceptors() {
    this.instance.interceptors.request.use(
      (config: any): any => {
        //添加token
        const token = sessionStorage.getItem('token')
        if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.token = token //请求头加上token
        }
        this.startLoading()
        return config
      },
      (err: any): Promise<never> => {
        return Promise.reject(err)
      })

    this.instance.interceptors.response.use(
      (response: any): any => {
        //拦截响应，做统一处理 
        this.loading ? this.endLoading() : ''
        const { data } = response
        return data ? data : response
      },
      //接口错误状态处理，也就是说无响应时的处理
      (error: any): Promise<never> => {
        this.loading ? this.endLoading() : ''
        let {
          status
        } = error.response
        this.errorInfo(status)
        return Promise.reject(error.response.status) // 返回接口返回的错误信息
      })
  }

  private errorInfo(status: number): void {
    switch (status) {
      case 401:
        Message.error('请求超时,请重新登入!')
        break
      case 403:
        break
      case 404:
        Message.error('请求的资源不存在')
        break
      case 500:
        Message.error('服务器出现问题,请联系管理员')
        break
      default:
        Message.error('连接错误 ')
    }
  }
}