<!--
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2022-02-17 15:30:32
 * @LastEditors: David Qu
 * @LastEditTime: 2022-02-21 19:39:04
-->
<template>
  <div id="app">
    <first />
    <second />
  </div>
</template>

<script>
import first from './pages/vuex-01/first.vue'
import second from './pages/vuex-01/second.vue'
export default {
  name: 'App',
  components:{
    first,
    second
  }
}
</script>

<style>
  .lll{
    color: lightblue;
  }
</style>