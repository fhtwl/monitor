import Monitor from '../index'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const monitor = new Monitor({})
console.log(monitor)

console.log('xx')
window.onload = () => {
  console.log('onload')
}
