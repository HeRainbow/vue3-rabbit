import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
// 创建路由实例
const router = createRouter({
  // 配置路由模式 - history模式
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置路由规则
  routes: [{
    path:'/',  // 一级路由
    component: Layout,  // 一级路由组件
    redirect:'/home',  // 路由重定向
    children:[  // 子路由配置
      {
        path:'home',  // 首页路由
        component:Home  // 首页组件
      },
      {
        path:'category/:id',  // 分类路由，:id为动态路由参数
        component:Category  // 分类组件
      },
      {
        path:'category/sub/:id',  // 分类路由，:id为动态路由参数
        component:SubCategory  // 分类组件
      }
    ]
  },{
    path:'/login',  // 登录路由
    component: Login  // 登录组件
  }
  ],

})

export default router
