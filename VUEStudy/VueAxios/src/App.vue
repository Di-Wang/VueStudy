<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Posts/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Posts from './components/posts'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Posts
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
