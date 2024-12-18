//引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
//定义全局指令
app.directive('img-lazy',{
  mounted(el,binding){
    //el：指令绑定到的DOM元素。这可以用于直接操作 。
    //binding：一个对象
    console.log(el,binding.value)
    useIntersectionObserver(
      el,
      ([entry]) => {
        console.log(entry.isIntersecting)
        if(entry.isIntersecting){
          el.src = binding.value
        }

  },
)
}})
