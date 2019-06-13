// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入资源请求插件
import VueResource from 'vue-resource'

import store from './store/store.js'

//使用VueResource插件
Vue.use(VueResource)

// 配置URL全局拦截器
Vue.http.interceptors.push(function (request, next) {

  console.info('拦截到请求了', request)

  request.url = '/api' + request.url

  next(function (response) {

    console.info('响应的数据', response)

    switch (response.status) {

      case 400:
        alert('无效的URL,请检查URL地址或者参数是否正确')
        break

      case 403:
        alert('权限拒绝')
        break

      case 404:
        alert('无法找到资源')
        break

      case 500:
        alert('服务器出错啦')
        break

      default:
        console.info('响应成功!')
        break
    }

    return response

  })
})

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
