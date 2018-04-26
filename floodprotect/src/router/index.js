import Vue from 'vue'
import Router from 'vue-router'

import top from "@/components/header/top.vue"
import MeteorologicaWarning from "@/components/MeteorologicaWarning.vue"
import floodProjectSubscriber from '@/pages/floodProjectSubscriber.vue'
import floodProjectWethForecast from '@/pages/floodProjectWethForecast.vue'
import contingencyPlan from '@/pages/contingencyPlan.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/MeteorologicaWarning',
      name: 'floodProjectSubscriber',
      redirect: '/floodProjectSubscriber'
    },
    {
      path: '/weatherForecast',
      name: 'weatherForecast',
      redirect: '/weatherForecast'
    },
    {
      path: '/contingencyPlan',
      name: 'contingencyPlan',
      redirect: '/contingencyPlan'
    },
  ]
})
