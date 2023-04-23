// 0.1导入组件 import component 给组件命名 name the component
import { createApp } from 'vue'
import App from './App.vue'
import ActiveUser from './components/ActiveUser'
import UserData from './components/UserData'


// 0.2创建vue实例
const app = createApp(App)
// 0.4挂载vue组件,在vue实例中，给实际使用vue组件起名
app.component("active-user",ActiveUser)
app.component("user-data",UserData)
// 0.3加载vue实例
app.mount('#app')
