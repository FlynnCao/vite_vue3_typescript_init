import { def } from "@vue/shared";
import Axios from "axios";
import installer, { ElMessage } from "element-plus";

const BASE_URL = 'http://127.0.0.1:8000/'; //请求接口url 如果不配置 则默认访问链接地址
const TIME_OUT = 10000; // 接口超时时间
const instance = Axios.create({
	baseURL: BASE_URL,
	timeout: TIME_OUT
})

// 可以添加一个axios的全局配置
instance.defaults.headers.post = {
	'Content-Type': 'application/x-www-form-urlencoded'
}

// 添加请求拦截器
instance.interceptors.request.use((config) => {
	return config
}, error => {
	return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
	return response
}, (error) => {
	return Promise.reject(error)
});

export default instance