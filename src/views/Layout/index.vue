<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>我是首页
    <!-- 二级路由出口 -->
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key属性，确保组件重新渲染 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />
    <LayoutFooter />

  </div>
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';

//触发获取导航列表的Action
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categoryStore = useCategoryStore();

onMounted(()=>{
  categoryStore.getCategory()
})
</script>
