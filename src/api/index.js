import axios from 'axios'
import { getCookie, Token } from "@/utils/cookie";


// 创建axios实例
const service = axios.create({
    baseURL: 'http://wisdomorg.oicp.net:8081/', // 开发环境的地址
    timeout: 30000 // 请求超时时间
})

// 拦截请求
service.interceptors.request.use(
    config => {
        if (!config.isJson) {
            config.transformRequest = [
                function (data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    ret = ret.substring(0, ret.length - 1)
                    return ret
                }
            ]
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        } else {
            config.headers['Content-Type'] = 'application/json'
        }
        // 请求头统一配置
        config.headers['Accept'] = 'application/json;charset=UTF-8'
        if (getCookie(Token)) {
            config.headers['Authorization'] = getCookie(Token) // 请求头携带Authorization为Token值
        }
        return config
    },
    error => {
        // loadinginstace.close()
        Promise.reject(error)
    }
)

// 拦截响应
service.interceptors.response.use(response => {
    return response.data
}, err => {
    return Promise.reject(err)
})

export default service