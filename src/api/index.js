import base from './base'

// 当前接口统一请求路径处理
let baseApiUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseApiUrl = '/api/api/'
} else {
  baseApiUrl = '/api/'
}

const getUrl = function(url) {
  return baseApiUrl + url
}

export function getPostList(params) {
  return base({
    url: getUrl('post/getPostList'),
    method: 'post',
    data: params
  })
}

export function searchPost(params) {
  return base({
    url: getUrl('post/searchPost'),
    method: 'post',
    data: params
  })
}

export function getTag(params) {
  return base({
    url: getUrl('post/getTag'),
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
