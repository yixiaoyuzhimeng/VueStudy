import { INCREMENT } from './mutation-types'
export default{
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
}