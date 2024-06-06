import axios from 'axios'


const unauthorizedCode = [401, 403]

const service = axios.create({
  baseURL: 'https://accesslabbeta.stagingserverhub.com/api/b2b',
  timeout: 60000,
})

// Config
const TOKEN_PAYLOAD_KEY = 'authorization'

// API Request interceptor
service.interceptors.request.use(
  async (config:any) => {

    const token = await localStorage.getItem('token')

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {

    // Remove token and redirect
    if (unauthorizedCode.includes(error.response.status)) {

    }
    return Promise.reject(error)
  }
)

export default service
