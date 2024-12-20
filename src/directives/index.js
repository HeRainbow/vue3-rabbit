//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    //懒加载指令逻辑
    app.directive('img-lazy', {
      mounted(el, binding) {
        //el：指令绑定到的DOM元素。这可以用于直接操作 。
        //binding：一个对象
        const {stop} = useIntersectionObserver(
          el,
          ([entry]) => {
            if (entry.isIntersecting) {
              el.src = binding.value
              stop();
            }

          },
        )
      }
    })
  }
}
