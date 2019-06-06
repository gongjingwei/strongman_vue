<template>

  <div class="hello">


   <!-- <router-view ></router-view>-->

    <!-- 这里带参数调用函数 不同参数就匹配不同的路由 -->
    <button @click='chooseMe(1)'>111</button>
    <button @click='chooseMe(2)'>222</button>
    <button @click='chooseMe(3)'>333</button>

  </div>
</template>


<script>

  import router from "../router/";//引入管理router的js文件

  export default {
    name: 'HelloWorld',
    components: {},
    data () {
      return {}
    },
    filters: {},
    mounted () {

    },
    methods: {
      // 根据选择的按钮进行页面跳转 或者 按钮颜色变换
      chooseMe: function (i) {

        switch (i) {//判断选择哪一个路由
          case 1:
            router.push('/a')
            break
          case 2:
            router.push('/b')
            break
          case 3:
            router.push('/c')
            break
        }
      }

    },
    computed: {}
  }
</script>

