import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'
import floodProjectSubscriber from '@/pages/floodProjectSubscriber.vue'
import floodProjectBack from '@/pages/floodProjectBack.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
  	// 	path: '/',
    //   name: 'index',
    //   redirect: '/one'
    // },
    // {
    // 	path:"/one",
    // 	name:"one",
    // 	component:one
    // },
    {
  	  path: '/',
      name: 'index',
      redirect: '/floodProjectSubscriber'
    },
    {
      path: '/floodProjectSubscriber',
      name: 'floodProjectSubscriber',
      component: floodProjectSubscriber
    },
    {
      path: 'floodProjectBack',
      name: 'floodProjectBack',
      component: floodProjectBack
    }
  ]
})
