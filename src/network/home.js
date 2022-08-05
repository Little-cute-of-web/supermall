import { request } from "./request"
//获取banner&recommend
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
//获取tab切换数据
export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}