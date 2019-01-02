import Vue from 'vue'
import Router from 'vue-router'
import {
  HelloWorld
} from './helloWorld'
import {
  base
} from '@/config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base,
  routes: [{
    path: '/HelloWorld',
    name: 'HelloWorld',
    meta: {
      title: '你好世界！'
    },
    component: HelloWorld
  }]
})