import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ConfigCode from '@/components/page/gencode/ConfigCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',

      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gencode',

      name: 'gencode',
      component: ConfigCode
    }

  ]
})
