// 导入 request.js
import request from '@/utils/request.js'

// 向外共享 initArticleList， 返回一个 promise 对象
export const getArticleList = function a (_page = 1, _limit = 5) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
