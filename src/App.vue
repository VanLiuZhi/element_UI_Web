<template>
  <div id="app" style="height: 100vh; width: 100vw">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Microsoft YaHei, sans-serif;
    text-align: center;
  }
  body {
    margin: 0;
    background-color: #f4f4f4;
  }
</style>
