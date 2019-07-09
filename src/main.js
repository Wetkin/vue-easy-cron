import Vue from 'vue'
import App from './App.vue'
import easyCorn from './index.js'
Vue.use(easyCorn)

new Vue({
  el: '#app',
  render: h => h(App),
})
