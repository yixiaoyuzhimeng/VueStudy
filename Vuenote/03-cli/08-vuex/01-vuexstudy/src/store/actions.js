export default{
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
}