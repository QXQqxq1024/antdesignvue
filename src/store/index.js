import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  //修改state中的数据只有mutations可以修改
  mutations: {
    //不要在mutations函数中，执行异步操作
    add(state) {
      //变更状态
      state.count++
    },
    addN(state, step) {
      //变更状态
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        //在actions中，不能直接修改state中的数据
        //必须通过context.commit()触发某个mutation才行
        context.commit('add')
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 2000)
    },
    subNAsync(context,step) {
      setTimeout(() => {
        context.commit('subN',step)
      }, 3000)
    }
  },
  modules: {
  },
  getters:{
     showNum(state){
       return state.count
     }
  }
})
