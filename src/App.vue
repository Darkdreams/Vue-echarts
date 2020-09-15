<template>
  <div id="app">
    <Widgets />
    <FooterLayer />
  </div>
</template>

<script>
// import FooterMod from './components/Footer'
// import BaseDemo from './components/BaseDemo.vue'
// import ExerciseJSX from './components/ExerciseJSX.vue';
// import BaseLevel from './components/BaseLevel.vue'
import Widgets from './views/Widgets'
import FooterLayer from './components/FooterLayer'
import InfoLayer from './components/InfoLayer'

export default {
  name: 'App',
  data: function() {
    return {
      
    }
  },
  components: {
    Widgets,
    FooterLayer,
    InfoLayer
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
