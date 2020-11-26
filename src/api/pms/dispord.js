import request from '@/utils/request'
const api_name = '/pms/dispord'

export default {
  // ## 调用后端 带条件的分页查询 - 调度指令库
  findPageDispOrd(dispOrdQuery,pageNum,pageSize){
    return request({
      url:`${api_name}/${pageNum}/${pageSize}`,
      method:'post',
      data:dispOrdQuery
    })
  },
  // ## 创建调度指令库
  save(dispOrd) {
    return request({
      url: `${api_name}/createDispOrd`,
      method: 'post',
      data: dispOrd
    })
  },
  // ## 回显
  getById(dispOrdId){
    return request({
      url:`${api_name}/${dispOrdId}`,
      method:'get'
    })
  },
// ## 修改调度指令库
  update(dispOrd) {
    return request({
      url: `${api_name}`,
      method: 'put',
      data: dispOrd
    })
  },
  // ## 删除
  deleteDispOrd(dispOrdId){
    return request({
      url:`${api_name}/${dispOrdId}`,
      method:'delete'
    })
  }
}

