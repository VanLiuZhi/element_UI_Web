import base from './base'

// 当前接口统一请求路径处理
const baseApiUrl = '/api/vadmin/article_api/'

const getUrl = function(url) {
  return baseApiUrl + url
}

export function listArticle(params) {
  return base({
    url: getUrl('/listArticle'),
    method: 'post',
    data: params
  })
}

export function getArticleForGUID(params) {
  return base({
    url: getUrl('getArticleForGUID'),
    method: 'post',
    data: params
  })
}