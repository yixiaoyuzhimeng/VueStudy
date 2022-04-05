# 基础语法
## day1 了解vue
#### 安装方式
- CDN
- 下载 
- NPM node.js webpack CLI
#### Vue特点
##### 渐进式开发:
把Vue作为应用的一部分嵌入
##### 响应式：
数据改，界面改
##### MVVM：
VM 数据绑定与事件监听
##### 生命周期
## day2 基础语法（1）
##### 插值操作
绑定内容
- {{}}双大括号语法，放在div内
- v-once  用在显示对应数据的标签上，标签内是双大括号语句
- v-html="" 用在显示对应数据的标签上
- v-text="" 用在显示对应数据的标签上，会覆盖标签内的数据
- v-cloak  用在div标签上
##### v-bind
绑定属性
- 基本:作为属性的值动态嵌入 v-on:href='' 
- class
-- 对象：:class="{类名(直接使用):布尔值}"
-- 数组：:class="[ 类名(变量调用),'类名'(直接使用)]"
- style
-- 对象：:style="{属性名(直接使用):属性值(变量调用),属性名(直接使用):'属性值(变量调用)'}"
-- 数组：:style="[ {属性名(直接使用):属性值(变量调用)},{属性名(直接使用),'属性值'(变量调用)}]"
##### 计算属性
- 调用时不用加()，直接作为属性调用
- 只有数据第一次更改|调用时才会重新执行，更高效
- 本来作为一个对象有get和set方法，但set一般不用，所以直接写作方法形式
##### ES6基础语法
- let针对for()/if()块级闭包
- es6字面量增强写法，对象的属性(直接写变量[若在外已定义]名)和方法(省略function)
## day3:基础语法（2）
##### v-on
- 基础使用 @事件="方法名"
- 参数问题：
（1）方法本身不需要传参：<br>
调用方法时()可加可不加<br>
（2）方法本身需要传参：<br>
正常调用方法：<br>
参数为传进的参数；<br>
没有传参：<br>
若方法有(),参数为undefined；<br>
若方法无(),参数为浏览器产生的event事件<br>
（3）方法需要传递正常参数，也需要传入event对象：<br>
调用方法时传入实际参数$event,就可正常使用；<br>
若传入实参event，vue会把它看作变量名在data的属性里找，找不到就会报错<br>
- v-on修饰符:跟在事件后面
（1）.stop  避免事件冒泡<br>
（2）.prevent 避免表单自动提交<br>
（3）.enter 避免每按一个键就触发一次<br>
（4）.once  只触发一次<br>
##### v-if v-show
- 基础使用 v-if=" " v-show=" "
- v-if v-else v-else-if 复杂逻辑最好放在计算属性中，注意复用问题
- fasle时消失的方式：
v-if是把DOM元素删除；<br>
v-show是设置行内样式disply=none，当显示隐藏切换频率高时使用；<br>
##### v-for
- 数组 v-for='(item,index) in shuzu'
- 对象 v-for='(value,key,index) in duixiang'
- 最好绑定一个key值，使用数组的item和对象的key,保证每一条目的特质
##### 过滤器filter
- 使用时只需在{{变量(或者有返回值的方法)|过滤器名}}
##### 高阶函数 
- filter 
- map
- reduce
##### v-model
- 用于表单，实现双向数据绑定
- 原理:v-on(将表单数据保存到data里)和v-bind(将data数据反应在表单)
- 应用:
(1)input v-model="变量"<br>
(2)radio v-model="变量" 选择后，变量改变<br>
(3)checkbox v-model="变量" 选中后，变量可同时存在多个选项值<br>
(4)select v-model="变量" 选中option的值会存放在变量中<br>
- 修饰符
(1)lazy 类似于v-on的enter修饰符<br>
(2)number 确保数字形式存入data数据<br>
(3)trim 讲输入框中的多个空格转为一个空格<br>
## day4 组件化开发(1)
##### 思想：细化问题
##### 步骤：
（1）创建组件构造器 const 构造器名=Vue.extend({template:`组件`})<br>
（2）注册组件 Vue.component('组件标签名',构造器名)<br>
（3）使用组件 在vue的实例范围内使用<br>
##### 范围
- 全局组件  Vue.component('组件标签名',构造器名)
- 局部组件  components:{标签名:构造器名}
- 组件内部定义的数据要放在data()函数return的对象{}中
##### 简化
- 语法糖 直接在注册的同时进行构造 
(1)Vue.component('组件标签名',{template: `组件`})<br>
(2)components:{标签名:{template:`组件`}}<br>
- 组件模板的分离写法(要有一个div)
(1)script type='text/x-template' id='cpn'<br>
(2)template id='cpn'<br>
使用时把`组件`替换为id名'#cpn'<br>
##### 层级关系
- child
- parent 
在parent组件构造器里，使用局部方式注册child组件，并在template中使用           child组件，这里注册好以后就作一个整体引用。
- parent->child Pass props
child的props中声明使用的变量1<br>
child的组件中使用变量1<br>
parent的data里保存着要传入的变量2<br>
在vue的实例范围内使用parent组件时，动态加入属性:变量1='变量2'<br>
变量1可使用驼峰标识，变量2不可使用，只能用小写或者-<br>
## day5 组件化开发(2)
- child->parent \$edit Events
在child组件中监听事件,进入child方法<br>
在child方法中发射自定义事件,$emit('名称',附带的参数变量）<br>
在parent组件中监听自定义事件,进入parent方法，并传入事件参数\$event<br>
在parent方法中接受参数，并使用<br>
表示子组件中的活动和对应的变量都传入父组件<br>
方法都可用驼峰标识，但自定义事件不可用，自定义事件在脚手架cli中可用<br>
- parent-child
v-model双向绑定 结合 parent-child<br>
还可用watch()<br>
- pvc children-refs \$children \$refs
通过parent组件直接使用child组件的数据、方法等<br>
(1)在parent组件方法里使用\$children获取各个child组件，并使用序号来使用单个组件<br>
(2)在parent组件使用时加上属性ref="引用名"，在parent组件方法里使用\$refs获得各个加了属性的子组件，并通过引用名来使用单个组件 <br>
- cvp parent-root \$parent
(1)在child组件方法里使用\$parent获取parent组件并使用<br>
(2)在child组件方法里使用\$root获取root组件并使用<br>
(3)不建议这样使用，不适合代码复用<br>
- slot
(1)在child组件中放入slot,表示这里有一段空间可被替换。使用时只需在parent组件中放入想要替换的就行。<br>
(2)slot里也可以放入默认的东西，当parent组件中没有放东西时就显示，当parent组件中有东西时就被替代。<br>
(3)多个slot可以被同时替代。<br>
(4)给slot加一个name,这个slot就不会轻易被替代。只有parent组件使用时加上slot='名称'，才会替代这一个具名插槽<br>
(5)编译作用域：parent使用parent的作用域里的数据，child使用child作用域里的数据<br>
(6)作用域插槽：parent组件更改展示方式，child组件提供数据<br>
在child组件里给slot加一个:引用名='child组件变量名'<br>
在parent组件里给加一个template,属性为slot-scope="slot",通过slot.引用名来使用<br>