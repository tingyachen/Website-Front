import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁 | もも'
    }
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import(/* webpackChunkName: "read" */ '../views/Read.vue'),
    meta: {
      title: '閱讀 | もも'
    }
  },
  {
    path: '/reading',
    name: 'Reading',
    component: () => import(/* webpackChunkName: "reading" */ '../views/Reading.vue'),
    meta: {
      title: '閱讀 | もも'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入＆註冊 | もも'
    }
  },
  {
    path: '/word',
    name: 'Word',
    component: () => import(/* webpackChunkName: "word" */ '../views/Word.vue'),
    meta: {
      title: '單字卡 | もも'
    }
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import(/* webpackChunkName: "learn" */ '../views/Learn.vue'),
    meta: {
      title: '學習 | もも'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue'),
    meta: {
      title: '測驗 | もも'
    }
  },
  {
    path: '/www',
    name: 'Www',
    component: () => import(/* webpackChunkName: "www" */ '../views/Www.vue'),
    meta: {
      title: 'www | もも'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: '管理 | 購物網'
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminProducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: '商品管理 | 購物網'
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '訂單管理 | 購物網'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
