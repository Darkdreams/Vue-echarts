<template>
  <div id="app">
    <div class="nav">
      <router-link to="/wjdemo1">部队编制体制, 数量规模</router-link>
      <router-link to="/wjdemo2">物资水平战略物资储备</router-link>
      <router-link to="/wjdemo9">武器装备数据</router-link>
      <router-link to="/wjdemo3">部队编成</router-link>
      <router-link to="/wjdemo4">文化活动用房设施</router-link>
      <router-link to="/wjdemo8">工作用房设施</router-link>
      <router-link to="/wjdemo6">武装力量数据</router-link>
      <router-link to="/TreeLegend">组织树</router-link>
      <router-link to="/Map1">全国兵力地图</router-link>
      <router-link to="/Map">公交交通地图</router-link>
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
