<template>
  <div class="hello">
    <Head></Head>
    <Carousel></Carousel>
    <h1>{{ msg }}</h1>
    <p>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">你好世界</a>
    </p>
    <a-button type="primary" @click="tiaozhuan">你好</a-button>
    
  </div>
</template>

<script>
import Head from './Head.vue';
import Carousel from './Carousel.vue';

export default {
  components: { Head,Carousel},
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    tiaozhuan:function(){
      this.$router.push({path:"/arr"});
    }
  }
}
</script>

<style scoped lang="less">
</style>
