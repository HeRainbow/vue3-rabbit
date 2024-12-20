<template>
  <!-- 新鲜好物模块 -->
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <!-- 商品列表 -->
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink to="/">
          <!-- 使用自定义指令v-img-lazy进行图片懒加载 -->
          <img v-img-lazy="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HomePanel from './HomePanel.vue';
import { findNewAPI } from '@/apis/home';

// 定义新鲜好物数据列表
const newList = ref([])

// 获取新鲜好物数据的方法
const getNewList = async () => {
  // 调用后端接口获取数据
  const res = await findNewAPI()
  // 将获取的数据赋值给响应式数据newList
  newList.value = res.result
}

// 组件挂载完成后获取数据
onMounted(() => {
  getNewList()
})
</script>


<style scoped lang='scss'>
// 商品列表样式
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    // 添加过渡动画效果
    transition: all .5s;

    // 鼠标悬停效果
    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    // 商品信息样式
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      // 文本超出显示省略号
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    // 价格文本样式
    .price {
      color: $priceColor;
    }
  }
}
</style>
