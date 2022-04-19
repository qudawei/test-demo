<!--
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2022-02-17 15:45:49
 * @LastEditors: David Qu
 * @LastEditTime: 2022-02-22 16:29:13
-->
<template>
    <div>
        <div>
            second page
            <ul>
                <li v-for="(item) in tempArr" :key="item.id">
                    <input type="text" >
                    {{item}}
                </li>
            </ul>
            <button @click="clickMe">reverse</button>
            {{JSON.stringify(tempArr)}}
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                tempArr:[{num: 1, id: 1}, {num: 3, id: 2}, {num: 5, id: 3}, {num: 7, id: 4}],
                data1:'1'
            }
        },
        mounted(){
        },
        watch:{
            data1:{
                handler(newval, oldval){
                    console.log('newval', newval);
                    console.log('oldval', oldval);
                },
                immediate:true
            },
        },
        created(){
            this.data1 = 2
            console.log('我是created');
        },
        methods:{
            add(){
                // this.$store.commit('increment')
                this.$store.state.count += 1; 
            },
            clickMe(){
                this.tempArr.reverse();
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