import axios from 'axios'

// 考虑扩展性，导出函数


// // 1.promise方式
// 参数里传入函数
// export function request(config,success,failure){
//   // 1.创建实例
//   const instance=axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   // 发送真正的网络请求
//   instance(config)
//   .then(res=>{
//     success(res)
//   })
//   .catch(err=>{
//     failure(err)
//   })
// }

// // 2.回调函数方式
// // 2.1
// export function request(config){
//   // 1.创建实例
//   const instance=axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   // 2.发送真正的网络请求
//   instance(config.baseConfig)
//   .then(res=>{
//     config.success(res);
//   })
//   .catch(err=>{
//     config.failure(err)
//   })
// }

// // 2.2
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建实例
//     const instance = axios.create({
//       baseURL: '',
//       timeout: 5000
//     })
//     // 2.发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// //3. axios本身返回的就是一个promise
// export function request(config) {
//     // 1.创建实例
//     const instance = axios.create({
//       baseURL: '',
//       timeout: 5000
//     })
//     return instance(config)
// }


//  4.拦截器使用
export function request(config) {

  // 1.创建实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.拦截器
  // 2.1请求拦截
  // (1)config的信息不符合服务器的要求
  // (2)发送网络请求时在界面显示图标
  // (3)某些网络请求需要携带特殊信息
  instance.interceptors.request.use(config => {
    console.log(config)
    // 拦截后需要返回结果
    return config
  }, err => {
    console.log(config)
  });

  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }, err => {
    console.log(err)
  });


  // 3.发送真正的网络请求
  return instance(config)
}