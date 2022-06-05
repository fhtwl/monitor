import Monitor from '../index'
import { createApp } from 'vue'
import App from './App.vue'

import { testPromise, testJs } from './errorTest'
createApp(App).mount('#app')

const monitor = new Monitor({})
console.log(monitor)
window.onload = () => {
  console.log('onload')
  monitor.test()
  Promise.all([testPromise(), testJs()])
}
