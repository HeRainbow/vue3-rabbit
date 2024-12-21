//封装分类相关的业务代码
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()

  //如果onBeforeRouteUpdate传了id，则使用传入的id，否则使用route.params.id
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => {
    getCategory()
  })
  //目标：当路由发生变化时，重新获取数据
  onBeforeRouteUpdate((to) => {
    //console.log(to)
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}


