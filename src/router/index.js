import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }

    {
      path: '/',
      redirect: '/msite'
      },
      {
      path: '/msite',
      component: Msite,
      //用来在APP.vue组件里的v-show指令,确认是否显示下面导航栏的
      meta: {
        showFooter: true
        }

      },
      {
      path: '/search',
      component: Search,

      meta: {
        showFooter: true
        }
      },
      {
      path: '/order',
      component: Order,

      meta: {
        showFooter: true
        }
      },
      {
      path: '/profile',
      component: Profile,

      meta: {
        showFooter: true
        }
      },
      {
      path: '/login',
      component: Login,
      }
  ]
})
