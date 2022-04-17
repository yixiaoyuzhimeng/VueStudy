import Vue from 'vue'
import vuex from 'vuex'

import { INCREMENT } from './mutation-types'

// 1.安装插件
Vue.use(vuex)

// 2.创建对象

const moduleA={
  state:{
    name:'zhangsan'
  },
  mutations:{
    updateName(state,payload){
      state.name=payload
    }
  },
  actions:{
   aUpdateName(context){
    setTimeout(()=>{
      context.commit('updateName','wangwu')
    },1000)
   }
  },
  getters:{
    fullname(state){
      return state.name+'111'
    },
    fullname2(state,getters){
      return getters.fullname+'222'
    },
    fullname3(state,getters,rootState){
      return getters.fullname2+rootState.counter
    }
  }
}


const store = new vuex.Store({
  state: {
    counter: 10000,
    students: [
      { id: 10, name: 'why1', age: 30 },
      { id: 15, name: 'wh2', age: 5 },
      { id: 20, name: 'wh3', age: 17 },
      { id: 7, name: 'why4', age: 15 },
    ],
    info: {
      name: 'why',
      age: 18,
      height: 1.88
    }
  },
  mutations: {
    // 方法，且有一个默认参数为state
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // mutation普通提交方式
    // incrementCount(state,count){
    //   state.counter+=count
    // },
    // mutation特殊提交方式
    incrementCount(state, payload) {
      console.log(payload)
      console.log(payload.count)
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // 数据：只有已经写入state的才会发生响应式改变
      // 方法：响应式方法
      // 修改
      state.info.name = 'a'
      // 增加
      Vue.set(state.info, 'alwaysSay', 'hello')
      // 删除
      Vue.delete(state.info, 'age')
      // 不是响应式的方法,且属性名未曾存在
      // state.info['alwaysSay']='hello'
      // delete state.info.age
      // mutation异步操作问题：view改变，state未改变
      // setTimeout(()=>{
      //   state.info.name='a'
      // },1000)
    }
  },
  actions: {
    // 异步操作
    // context：上下文
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //   }, 1000)
    //   // console.log(payload)
    //   // console.log(payload.message)
    //   // payload.success()
    // }
    aUpdateInfo(context, payload) {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('lalalala')
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more14stu(state) {
      return state.students.filter(s => s.age > 14)
    },
    // 第一个参数为state，第二个参数getters
    more14stuLength(state, getters) {
      return getters.more14stu.length
    },
    moreAgeStu(state) {
      // 自定义参数时，需要返回函数
      return function (age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    // 
      a:moduleA
  }
})

// 3.导出store对象
export default store