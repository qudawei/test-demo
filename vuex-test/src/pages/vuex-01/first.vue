<!--
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2022-02-17 15:45:49
 * @LastEditors: David Qu
 * @LastEditTime: 2022-02-21 16:43:16
-->
<template>
    <div>
        <div class="lll">
            first page
            <span class="lll">2222</span>
        </div>
        <button @click="add()">+</button>
        <span>{{$store.state.count}}</span>
    </div>
</template>
<script>
    export default{
        mounted(){
        },
        methods:{
            add(){
                // this.$store.commit('increment')
                this.$store.state.count += 1; 
            }
        }
    }
</script>
<style scoped>
    .lll{
        color: red;
    }
    div span .lll{
        color: yellow;
    }
</style>