import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/page/Login'
import Regisit from '@/components/page/Regisit'
import UserCenter from '@/components/page/UserCenter'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
    /*  redirect:"/login",*/
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',

      component: Login
    },
    {
      path: '/b',

      component: Regisit
    },
    {
      path: '/c',

      component: UserCenter
    }
  ]
})
