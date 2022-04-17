import Vue from 'vue'
import vuex from 'vuex'



import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(vuex)

// 2.创建对象
const state={
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
}
const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:moduleA
  }
})

// 3.导出store对象
export default store