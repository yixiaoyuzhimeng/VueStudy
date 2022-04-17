export default{
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
}