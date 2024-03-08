import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import SecondStep from '@/pages/secondStep/indexPage.vue'
import thirdStep from '@/pages/thirdStep/indexPage.vue'
import fourthStep from '@/pages/fourthStep/indexPage.vue'
import finalStep from '@/pages/finalStep/indexPage.vue'
import userdata from '@/pages/userdata/index.vue'
import resultPage from '@/pages/result/indexPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/secondStep',
    name: 'secondStep',
    component: SecondStep
  },
  {
    path: '/thirdStep',
    name: 'thirdStep',
    component: thirdStep
  },
  {
    path: '/fourthStep',
    name: 'fourthStep',
    component: fourthStep
  },

  {
    path: '/finalStep',
    name: 'finalStep',
    component: finalStep
  },
  {
    path: '/userdata',
    name: 'userdata',
    component: userdata
  },


  {
    path: '/result',
    name: 'result',
    component: resultPage
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router