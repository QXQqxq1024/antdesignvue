<template>
  <div id="app">
    <div>
      <router-view />
      <div>Hello World</div>
    </div>
    <div>
      <my-addition></my-addition>
      <p>-----------------</p>
      <my-subtraction></my-subtraction>
    </div>
  </div>
</template>

<style lang="less">
</style>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'
export default {
  data() {
    return {}
  },
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction,
  },
}
</script>
