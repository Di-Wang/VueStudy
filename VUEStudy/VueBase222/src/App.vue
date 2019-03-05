<template>
  <div id="app">
    <Table />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Events from './components/Event'
  import Formdata from './components/Formdata'
  import Styles from './components/style'
  import Table from './components/table'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Events,
      Formdata,
      Styles,
      Table
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