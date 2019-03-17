import Vue from 'vue'
import App from './App'

import store from './store'

import './style/index.css'
// import './style/weui.css'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
