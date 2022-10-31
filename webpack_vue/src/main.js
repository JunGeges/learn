import { sum } from './js/math.js'
const { format } = require('./js/format')
import './js/element'

import { createApp } from 'vue'

console.log(sum(100, 200))
console.log(format())

const app = createApp({
  template: "<h2>你好啊</h2>"
}).mount("#app")