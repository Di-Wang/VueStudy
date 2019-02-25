<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Styles />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Events from './components/Event'
  import Formdata from './components/Formdata'
  import Styles from './components/style'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Events,
      Formdata,
      Styles
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

  img {
    width: 100px;
  }
</style>