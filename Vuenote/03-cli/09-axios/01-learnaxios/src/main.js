import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})



// 1.axios的基本使用
// axios({
//   // url:'httpbin.org'
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res)
// })
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   // 专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })


// 2.axios发送【并发】请求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata',
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })])

// 方法一
// .then(results=>{
//   console.log(results)
//   console.log(results[0])
//   console.log(results[1])
// })
// 方法二
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))



// 3.全局配置axios
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000
// axios.all([axios({
//   url:'/home/multidata'
// }),
// axios({
//   url:'home/data',
//   params:{
//     type:'sell',
//     page:5
//   }
// })])
// .then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2)
// }))

// 4.创建对应axios的实例，为应对不再同一个服务器的多个请求
// 创建实例一
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// // 针对实例一发送网络请求1
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })
// // 针对实例一发送网络请求2
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// }).then(res => {
//   console.log(res)
// })
// const instance2=axios.create({
//   baseURL:'',
//   timeout:10000,
// })


// 5.封装request模块

import { request } from './network/request'

//  //1. export function request(config,success,failure)
// request({
//   url:'/home/multidata'
// },res=>{
//    console.log(res)
// },
// err=>{
//   console.log(err)
// })

//  //2.1 export function request(config)
// request({
//   baseConfig:{
//   },
//   success:function(res){
//   },
//   failure:function(err){
//   }
// })


// //3 export function request(config)
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)
}).catch(err => {
 console.log(err)})