// commonjs导入数据
const {add,mul}=require('./mathUtils.js')

console.log(add(20,30))
console.log(mul(10,2))

// ES6的导入数据
import {name,age} from './info'
console.log(name)
console.log(age)