import axios from 'axios'
import storage from '../../utils/storage'

// 默认超时时间
const TIME_OUT = 30000

// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: TIME_OUT,
})

// TODO 不需要权限验证拦截的白名单请求
const whiteList = ['/']

// request 请求发送之前 拦截器
service.interceptors.request.use(
  async (config) => {
    // 发送请求之前
    const url = config.url || ''

    // TODO 验证是否在白名单
    const inWhite = whiteList.filter((item) => url.indexOf(item) > -1)

    // 不在白名单时
    if (!(inWhite && inWhite.length > 0)) {
      const token = await storage.load('token')
      if (token) {
        config.headers.token = token // 让每个请求携带 token
      } else {
        // TODO 既不在白名单，又没有token
      }
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

export default service
