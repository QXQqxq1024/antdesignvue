<template>
    <div>
      <h3>当前最新的count值为：{{count}}</h3>
      <button @click="sub()">-1</button>
      <button @click="subN(2)">-N</button>
      <button @click="subAsync()">延时-1</button>
      <button @click="subNAsync(3)">延时-N</button>
    </div>
</template>

<style lang="less" scoped>

</style>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{};
    },
    computed:{
        ...mapState(['count'])
    },
    methods:{
        ...mapMutations(['sub','subN']),

        ...mapActions(['subAsync','subNAsync']),
    }
}
</script>