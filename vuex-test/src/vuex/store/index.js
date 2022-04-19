/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2022-02-17 15:50:50
 * @LastEditors: David Qu
 * @LastEditTime: 2022-02-17 15:50:51
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
export default store