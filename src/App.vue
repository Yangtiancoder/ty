<template>
  <div id="app">
   <router-view style="z-index: 1; position: relative"></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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

  position: relative;
  padding: 60px 0;
  background: url(assets/bg.jpg);
  height: 820px;
}

#app::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  /* z-index: 1; */
}

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
