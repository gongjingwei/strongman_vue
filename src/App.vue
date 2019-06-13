<template>
  <div id="app">

    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'App',

    mounted () {

      //this.send()

    },
    data () {

      return {}
    },

    methods: {

      send () {

        this.$http.post('/user/list', {a: 1, b: 2}).then(res => {

          console.info('成功了......', res)

        }, err => {

          console.info(err)

        })

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
