import base from './base'

// 当前接口统一请求路径处理
let baseApiUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseApiUrl = '/api/vadmin/article_api/'
} else {
  baseApiUrl = '/vadmin/article_api/'
}

const getUrl = function(url) {
  return baseApiUrl + url
}

export function listArticle(params) {
  return base({
    url: getUrl('listArticle'),
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

export function getTopLevelArticleClassify(params) {
  return base({
    url: getUrl('getTopLevelArticleClassify'),
    method: 'post',
    data: params
  })
}

export function getArticleClassifyForGUID(params) {
  return base({
    url: getUrl('getArticleClassifyForGUID'),
    method: 'post',
    data: params
  })
}

export function getCommonClassifyTag(params) {
  return base({
    url: getUrl('getCommonClassifyTag'),
    method: 'post',
    data: params
  })
}

export function getTreeArticleClassify(params) {
  return base({
    url: getUrl('getTreeArticleClassify'),
    method: 'post',
    data: params
  })
}
