<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /*.el-menu-item:focus, .el-menu-item:hover{*/
    /*border-bottom: 2px solid #409eff;*/
  /*}*/
  
  #app {
    font-family: Microsoft YaHei, sans-serif;
    /* text-align: center; */
    height: 100vh;
    /*width: 100vw*/
  }

  body {
    margin: 0;
    background-color: #f4f4f4;
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  /* ::-webkit-scrollbar
  {
    width: 6px;
    height: 4px;
    background-color: #FFF;
  } */

  /*定义滚动条轨道 内阴影+圆角*/
  /* ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    /*border-radius: 10px;*/
    /* background-color: #FFF;
  } */

  /*定义滑块 内阴影+圆角*/
  /* ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: hsla(220,4%,58%,.3);
  } */
</style>
