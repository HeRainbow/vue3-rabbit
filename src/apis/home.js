import httpInstance from '@/utils/http.js'
/*可创建不同的接口
export function getXXXAPI(){
  return httpInstance({
    url:'XXX'
  })
}
*/


//设置轮播图banner的API接口
export function getBannerAPI(params = {}){
  //默认为1 商品为2
  const {distributionSite = '1'}= params
  return httpInstance({
    url:'/home/banner',
    params:{
      distributionSite
    }
  })
}

export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}
export const getHotAPI = () => {
  return  httpInstance({
    url:'/home/hot'
  })
}


export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
