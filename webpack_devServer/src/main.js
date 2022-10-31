import { sum } from './js/math.js'
const { format } = require('./js/format')
import './js/element'

import { createApp } from 'vue'
import app from './vue/App.vue'

console.log(sum(100, 200))
console.log(format())

createApp(app).mount("#app")