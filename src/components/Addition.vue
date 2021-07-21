<template>
    <div>
      <h3>当前最新的count值为：{{this.$store.state.count}}</h3>
      <h3>当前的Getter返回的值：{{this.$store.getters.showNum}}</h3>
      <button @click="btnHandler1">+1</button>
      <button @click="btnHandler2">+3</button>
      <button @click="btnHandler3">延迟一秒加+1</button>
    </div>
</template>

<style lang="less" scoped>

</style>

<script>
export default {
    data(){
        return{};
    },
    methods:{
        btnHandler1(){
            this.$store.commit('add');
        },
        btnHandler2(){
            this.$store.commit('addN',3);
        },
        btnHandler3(){
            //这里的dispatch函数，专门用来触发action
           this.$store.dispatch('addAsync');
        }
    }
}
</script>