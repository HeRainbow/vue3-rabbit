<script setup>

// vueUse
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/category';
const { y } = useScroll(window)

//使用pinia中的数据
const categoryStore = useCategoryStore();

</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
        <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
      </li>
      <!-- 导航区域 -->
      <div class="right">

        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.active {
  color: $xtxColor;
  border-bottom: 1px solid $xtxColor;
}

.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  li::marker {
    content: '';
  }

  a {
    font-size: 16px;
    line-height: 32px;
    height: 32px;
    width: 32px;
    display: inline-block;
    list-style-type: none;
    margin-left: 25px;
    margin-right: 25px;

    &:hover {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }

  .container {
    display: flex;
    align-items: center;
    padding-right: 100px;
  }

  .logo {
    width: 100%;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 900px;
    display: flex;
    text-align: center;

    border-left: 2px solid $xtxColor;

    li {
      display: inline-block;
      width: 38px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
        list-style-type: none;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }

      // .active {
      //   color: $xtxColor;
      //   border-bottom: 1px solid $xtxColor;
      // }
    }


  }
}
</style>
