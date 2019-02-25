<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Parent/>
    <Outer/>
  </div>
</template>

<script>
import Parent from './components/child/parent'
import Outer from './components/Outter'

export default {
  name: 'App',
  components: {
    Parent,
    Outer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
