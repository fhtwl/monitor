import { testJs, testPromise, testStatic } from './test'

type Error = 'jsError' | 'promiseError' | 'staticError'
type Target = 'stability' | 'experience' | 'business' // 稳定性, 性能和体验, 业务

interface MonitorOptions {
  url: string // websocket路径
  target: Target[]
}

export default class Monitor {
  private options: MonitorOptions
  constructor(options: MonitorOptions) {
    this.options = options

    this.init()
  }

  private init() {
    console.log('init')
    this.initErrorListener()
  }

  /**
   * 错误监听
   */
  private initErrorListener() {
    window.addEventListener('error', (error) => {
      console.log(error)
    })
    window.addEventListener('unhandledrejection', (error) => {
      console.log(error)
    })
  }

  public test() {
    Promise.all([testJs(), testPromise(), testStatic()])
  }
}
