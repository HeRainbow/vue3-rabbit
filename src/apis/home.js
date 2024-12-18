import httpInstance from '@/utils/http.js'
/*可创建不同的接口
export function getXXXAPI(){
  return httpInstance({
    url:'XXX'
  })
}
*/


//设置轮播图banner的API接口
export function getBannerAPI(){
  return httpInstance({
    url:'/home/banner'
  })
}
