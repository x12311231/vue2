<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SchoolL name="社会大学" msg="school components"/>
    <student-l name="章三" msg="student components"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SchoolL from './components/SchoolL.vue'
import StudentL from './components/StudentL.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SchoolL
    ,StudentL
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
