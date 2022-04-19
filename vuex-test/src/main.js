/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2022-02-17 15:30:32
 * @LastEditors: David Qu
 * @LastEditTime: 2022-02-21 16:21:31
 */
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
