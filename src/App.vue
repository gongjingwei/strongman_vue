<template>
  <div id="app" style="background-color: yellow">
    <img src="./assets/logo.png">
    <el-button>
      AAA
    </el-button>
    <el-input v-model="aaa"></el-input>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){

      return{
        aaa:"Element-UI 文本框"

      }
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
