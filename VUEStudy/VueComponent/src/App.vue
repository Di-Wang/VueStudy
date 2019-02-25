<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Hello />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import MyComponent from './components/myComponent'
  import Parent from './components/sonparent/parent'
  import Parents from './components/slots/parent'
  import Big from './components/comkeep/big'
  import Anim from './components/anim/anim'
  import Hello from './components/hello'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      MyComponent,
      Parent,
      Parents,
      Big,
      Anim,
      Hello
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