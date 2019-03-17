import Vue from 'vue'
import App from './App'

import store from './store'

// import Fly from 'flyio'

import './style/index.css'
// import './style/weui.css'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store
// Vue.prototype.$fly = new Fly()

const app = new Vue(App)
app.$mount()
