// import { testJs, testPromise, testStatic } from './test'

type Error = 'jsError' | 'promiseError' | 'staticError'
type Target = 'stability' | 'experience' | 'business' // 稳定性, 性能和体验, 业务

interface MonitorOptions {
  url?: string // websocket路径
  target?: Target[]
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
    // this.test()
  }

  /**
   * 错误监听
   */
  private initErrorListener() {
    window.addEventListener(
      'error',
      (event) => {
        event.stopImmediatePropagation()
        console.log('error', event)
      },
      true
    )
    window.addEventListener(
      'unhandledrejection',
      (error) => {
        console.log(error)
      },
      true
    )
  }

  // public test() {
  //   setTimeout(() => {
  //     Promise.all([testJs(), testPromise(), testStatic()]).then(() => {
  //       console.log('test')
  //     })
  //   })
  // }
}
