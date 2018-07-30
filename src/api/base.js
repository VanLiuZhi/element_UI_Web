import axios from 'axios'

// 创建代理请求axios的实例, 更进一步的需求请配置参数
const service = axios.create({
  timeout: 3000
})

export default service
