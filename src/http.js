import axios from "axios"

// 默认地址
axios.defaults.baseURL = "http://localhost:8080"

axios.interceptors.request.use(request => {
    // 在发送请求之前做些什么
    request.url += ".json"
    return request;
})

axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    if (response.status === 200) {
        return response.data
    }
    return response;
})

export default axios