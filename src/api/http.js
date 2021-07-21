import axios from 'axios';
import store from '@/store/index';
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

axios.defaults.baseURL = 'http://localhost:8080';     //vue请求后段地址
axios.defaults.timeout = 10000;                        //多久超时
axios.defaults.withCredentials = true;                 // 跨域访问需要发送cookie时，一定要拿axios defaults.withCredentials = true ;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//设置post请求的请求头


// 第二步： 对请求拦截器，和响应拦截器进行封装
axios.interceptors.request.use(    
    config => {        
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        const token = store.state.token;        
        token && (config.headers.Authorization = token);        
        return config;    
    },    
    error => {        
        return Promise.error(error);    
})


//响应拦截
//所有的网络请求返回数据之后都会先执行此方法
axios.interceptors.response.use(
    function(response){
        console.group('全局响应拦截');
        console.log(response);
        console.groupEnd();
        return response;
    },
    function(err){
        return Promise.reject(err);
    }
)

// 第三步：使用上面的axios对象，对get请求和post请求进行封装
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
 export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}


/* export default axios; //一定要导出 */


