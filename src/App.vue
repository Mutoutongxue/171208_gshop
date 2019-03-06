<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
   <router-view></router-view>
   <!-- v-show指令用来，判断footerGuide组件是否显示 -->
   <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
//引入FooterGuide组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: {
  FooterGuide
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app
  width :100%
  height :100%
  background :#f5f5f5
</style>
