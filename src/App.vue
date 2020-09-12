<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <base-demo :index="1">标题</base-demo>
    <base-demo :index="2">标题</base-demo>
    <base-demo :index="3">标题</base-demo>
    <base-demo :index="4">标题</base-demo>
    <base-demo :index="5">标题</base-demo>
    <base-demo :index="6">标题</base-demo> -->
    <!-- <base-demo></base-demo> -->
    <!-- <ExerciseJSX></ExerciseJSX> -->
    <!-- <BaseLevel :level="123" :data-level="123123"/> -->
    <!-- <div class="back" @click="handleClick">返回首页</div> -->
    <div class="nav">
      <!-- <router-link to="/home">首页</router-link>
      <router-link to="/page1">页面 1</router-link>
      <router-link to="/page2">页面 2</router-link>
      <router-link to="/page3">页面 3</router-link>
      <router-link to="/page4">页面 4</router-link>
      <router-link to="/echarts">echarts</router-link> -->
      <router-link to="/wjdemo1">部队编制体制,数量规模</router-link>
      <router-link to="/wjdemo2">物资水平战略物资储备</router-link>
      <router-link to="/wjdemo8">工作用房设施</router-link>
      <router-link to="/wjdemo9">武器装备数据</router-link>
      <router-link to="/wjdemo3">部队编成</router-link>
      <router-link to="/wjdemo4">文化活动用房设施</router-link>
      <router-link to="/wjdemo5">专业用房设施</router-link>
      <router-link to="/wjdemo6">武装力量数据</router-link>
      <!-- <router-link to="/wjdemo7">生活用房设施</router-link> -->
      <router-link to="/Map">地图</router-link>
      <router-link to="/TreeLegend">组织树</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- <FooterMod></FooterMod> -->
  </div>
</template>

<script>
// import FooterMod from './components/Footer'
// import BaseDemo from './components/BaseDemo.vue'
// import ExerciseJSX from './components/ExerciseJSX.vue';
// import BaseLevel from './components/BaseLevel.vue'

export default {
  name: 'App',
  data: function() {
    return {
      
    }
  },
  components: {
    // HelloWorld
    // BaseDemo,
    // ExerciseJSX
    // BaseLevel
    // FooterMod
  },
  methods: {
    handleClick: function(){
      // console.log(this.$router.options.routes[0])
      this.$router.push({
        path: "/",
        redirect: "/home"
      })
    }
  }
}
</script>

<style scoped>
@import url("./assets/css/reset.css");
a {
  color: #000;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a.router-link-active {
  color: red;
  font-weight: bold;
}

.nav {
  height: 80px;
  line-height: 80px;
  /* display: flex; */
  font-size: 20px;
}
.nav a {
  width: 20%;
  margin: 0 10px;
}
</style>
