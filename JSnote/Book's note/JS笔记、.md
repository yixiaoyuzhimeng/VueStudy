# JS红宝书笔记



## 一、

#### 1.  JS：ECMAScript+DOM+BOM

DOM是一个API，用于在HTML中使用扩展到XML

BOM是一个API，用于支持访问和操作浏览器的窗口，操控浏览器显示页面之外的部分

### 二、html中的js

### 2.  \<script> 标签

从上到下执行，其中的代码被计算完成之前，页面的其余内容不会加载也不会显示

行内JS的代码中不能出现</script>,因为浏览器解析时一旦看到，就会将其当作结束标签，可以加上转义字符<\ /script>

外部文件<script src="URL"></script> 可以包含来自外部域的JS文件

将所有js引用放在<body>元素中页面内容的后面

##### 动态加载脚本

<link rel="preload" href="gibberish.js">

在文档头部显式声明动态请求的文件存在

向dom中动态添加script元素：

let script =document.createElement('script');

script.src="gibberish.js";

document.head.appedChild(script);

默认为异步加载，若需同步则要设置

script。async=false；

##### 推荐使用外部文件



### 三、语言基础

#### 1.ECMAScript语法

- 区分大小写 
- 标识符：字母 数字 _ $
- 注释同C语言：//单行 /* 多行 */
- 严格模式 use strict
- 即使语句末尾的分号不是必须的，也应该加上

##### 2、关键字：

break

do 

in

typeof

case

else

instanceof

var

catch

export

new

void

class

extends

return

while

const

finally

super

with

cpmtonue

for

switch

yield

debugger

fuction this

default

if

throw

default

if

throw

delete

import

try

- 保留字

  始终保留

  enum

  严格模式保留

  implements

  package

  public

  interface

  protected

  static

  let

  private

  模块代码中保留

  await

##### 3、变量

- var

  可改变值的类型

  未初始化会保存特殊值undefined

  - 在**函数**中var声明的变量是**局部**的，调用函数后就被销毁。省略var声明的变量是全局的，可是不好维护，不建议。
  - 变量声明提升：把所有变量的声明都拉到函数作用域的顶部。
  - 允许冗余声明
  - 声明范围：函数作用域
  - 在退出循环时，迭代变量（自增）保存的是导致循环退出的值。
  - 在全局作用域下声明的变量会成为window对象的属性

- const

  - 声明时必须**同时初始化**
  - 声明范围：块作用域
  - 不能能改变，但可需改对象内部的属性
  - const不能声明迭代变量

- let

  - 无声明提升

  - 不允许冗余声明

  - 声明范围：块作用域

  - 每次迭代声明一个独立变量实例，可用于for循环

  - 不会成为window对象的属性

  - let不能进行条件声明【？】![image-20211118145612280](C:\Users\yixi\AppData\Roaming\Typora\typora-user-images\image-20211118145612280.png)

    ![image-20211118145732795](C:\Users\yixi\AppData\Roaming\Typora\typora-user-images\image-20211118145732795.png)

  - const>let>var



#####  4、数据类型

- 简单：

  Undefined

  Null

  Boolean

  Number

  String

  Symbol

- 复杂

  Object

- typeof 操作符

  funtion 函数

  symbol 符号

  undifined 值未定义

  typeof null  为object

- Undefined

  只有undefined一个值，

  表示已声明且未定义的变量。

  使用未声明的变量会报错，

  但是用typeof获得的类型仍然是undefined。

- Null

  只有null一个值

  若变量要保存对象，可用null填充对象

  undefined派生自null

- Boolean

  有true|false两个字面值，不同于数值1|0，区分大小写

  True|False时有效标识符，但不是布尔值

  Boolean()

  false:NaN|0|……

- Number

  - 整数：十进制、八进制、十六进制，

    在所有数学操作中都视为十进制，

    存在+0|-0

  - 浮点数：

    科学技术法3.12e5=312000

    精确度最高17位小数，算术计算中不如整数精确

  - 无穷Infinity

    5/0

  - 不是数值NaN

    0/0

    任何涉及到NaN的操作始终返回NaN

    isNaN(不可转换为数值的)==true

    isNaN(true)==false

    isNaN("10")==false

    isNaN(NaN)==true

    NaN==NaN  为false，因为NaN不包括NaN在内的任何值【？】

  - 数值转换

    1. Number()

       undefined -- NaN

       ""|false|null -- 0

       00000011 -- 11

       符号数值、浮点数、十六进制数的字符串 -- 十进制数

       其余字符串 -- NaN

       对象，先用valueof()转换为数值，若为NaN,再用toStirng()【？】

    2. parseInt()

       常用于字符串，专注于字符串是否包含数值。

       从第一个非空格字符开始转换，若不是数字|+|-，则返回NaN;

       否则就往后按序转换数值，直到与大盘非数值字符或字符串末尾。

       parseInt("0xAF",16) -- 175 可以指定转换为什么类型

       parseInt("AF",16) -- 175 可以指定转换为什么类型，可省略

    3. parseFloat()

       始终忽略字符串开头的0

       若字符串表示整数，就返回整数

- String

- Symbol

- Object

##### 5、操作符

##### 6、语句

##### 7、函数

### 四、变量|作用域|内存




1.	==判断值相等，有隐式转换；===必须数据类型和值都相等。
2.	undefined==null ===可以用来测试某个值是否是未定义的
3.	不能直接判断两个浮点数相等
4.	undefined有两种情况：变量只声明未赋值，以及并不存在的对象的属性
5.	关于自增自减运算符以及表达式的一个案例： f=e++ + ++e;
6.	在逻辑与短路运算上，如果表达式1为真（注意上次提到了0,"",null,undefined,NaN都为假），则返回表达式2；若为假，返回表达式1。逻辑或运算上，则相反，如果表达式1为真，返回表达式1；若为假，返回表达式2。
7.	boolean值、数字、字符串的原始值都是伪对象，具有属性和方法

1.	命名规范：函数标识符一般用动词，操作符两旁最好有空格
2.	时刻记住js是弱类型，宽松的审查环境意味着出现莫名其妙的错误
3.	数组——
1.	数组里的元素可以是不同类型
2.	数组不用事先确定长度；可以直接添加数组元素，js会自动更新length长度；可以通过修改length长度新增数组元素
3.	不要直接给数组名赋值，否则不会报错且数组会变成单个变量
4.	未赋值的元素均显示为undefined,所以无论是超过数组长度的（c、java会直接报错），还是在数组长度之内的（c、java会直接赋值为0），输出时都显示为undefined
4.	函数
1.	形参可以不用声明类型。若实参数<形参数，多余实参不管；若形参数<实参数，多余的形参定义为undefined，在数值计算中会得出NaN的结果。所以最好实参个数和形参的匹配。
2.	return只能返回一个值，是第一个return语句里的最后一个逗号后面的值。如果想要实现返回多个值，可以使用数组。如果没有设置返回值，则自动返回undefined.
3.	不确定有多少个参数传递时，可以用argumens来获取(所有函数的内置对象，以伪数组的方式存储了传递的所有实参，具有数组的length属性，按照索引的方式存储，但没有真正数组的一些方法如pop()push()等
4.	函数间的调用不用像C语言那样事先声明函数，这是因为js有函数预解析
5.	函数有两种声明方式，一种是 function 变量名（）{}；一种是函数表达式 var 变量名=function(){} 又称匿名函数，声明方式和变量差不多，不过此处声明的是函数，这里的函数没有名字，只能用变量名调用。
5.	作用域、变量
1.	全局作用域是在整个script标签、或者一个单独的js文件中
2.	局部作用域又称函数作用域
3.	全局变量是在函数外声明，以及在函数内没有声明直接赋值的变量
4.	局部变量是在函数内声明的，以及函数的形参；更节省资源
5.	作用域链：内部函数访问外部函数的变量，采取的是链式查找（从内向外，就近原则）的方式觉得取哪个值。
6.	js引擎运行，
是先预解析（把js里面所有的var和fuction声明提升到当前作用域的最前面），
后执行代码（按照代码书写顺序从上向下执行）
1.	变量预解析：直接把所有的变量声明var提升到当前作用域的最前面，不提升赋值操作
2.	函数预解析：把所有函数声明function提升到前面，不提升定义操作
7.	var a=b=c=9相当于var a=9;b=9;c=9 此处bc没有声明而直接赋值，所以作为全局变量；
区分集体声明（var a=9,b=9,c=9)

## W3C

1.	在 HTML 文档完全加载后使用 document.write() 将删除所有已有的 HTML ：
2.	两种类型的值：混合值（字面量）和变量值
3.	如果再次声明某个 JavaScript 变量，将不会丢它的值
4.	相同变量可用作不同类型
5.	在 JavaScript 中，没有值的变量，其值是 undefined。typeof 也返回 undefined。
6.	typeof 运算符对数组返回 "object"，因为在 JavaScript 中数组属于对象。
7.	不幸的是，在 JavaScript 中，null 的数据类型是对象。您可以通过设置值为 null 清空对象，您也可以通过设置值为 undefined 清空对象。Undefined 与 null 的值相等，但类型不相等：
8.	原始数据值是一种没有额外属性和方法的单一简单数据值。原始类型有string,number,Boolean,undefined
9.	typeof 运算符把对象、数组或 null 返回 object，在 JavaScript 中数组即对象。
typeof 运算符不会把函数返回 object,而是function
10.	toCelsius 引用的是函数对象，而 toCelsius() 引用的是函数结果，如果您不使用 () 访问 fullName 方法，则将返回函数定义：
11.	请不要把字符串、数值和布尔值声明为对象
12.	HTML 事件是发生在 HTML 元素上的“事情”。
13.	最佳换行位置是某个运算符之后，您也可以在字符串中换行，通过一个反斜杠即可：对长字符串换行的最安全做法（但是有点慢）是使用字符串加法
14.	=== 运算符需要类型和值同时相等
15.	JavaScript 对象无法进行对比，将始终返回 false
16.	在执行方法和属性时 JavaScript 将原始值视为对象
17.	search() 方法无法设置第二个开始位置参数。
18.	indexOf() 方法无法设置更强大的搜索值（正则表达式）
19.	slice() 提取字符串的某个部分并在新字符串中返回被提取的部分。如果某个参数为负，则从字符串的结尾开始计数。
20.	substring() 无法接受负的索引。
21.	substr()第二个参数规定被提取部分的长度。
22.	replace() 方法不会改变调用它的字符串。它返回的是新字符串。用另一个值替换在字符串中指定的值，只替换首个匹配：
23.	默认地，replace() 对大小写敏感，如需执行大小写不敏感的替换，请使用正则表达式 /i（大小写不敏感）
24.	String.trim()删除字符串两端的空白符：
25.	如果您希望按照数组的方式处理字符串，可以先把它转换为数组。split() 将字符串转换为数组：
26.	在所有数字运算中，JavaScript 会尝试将字符串转换为数字，但是会用 + 运算符对字符串进行了级联。
27.	js会把前缀为 0x 的数值常量解释为十六进制, 但是您能够使用 toString() 方法把数输出为十六进制、八进制或二进制,
28.	数字方法以字符串返回数值。
29.	所有 JavaScript 数据类型都有 valueOf() 和 toString() 方。使用 valueOf() 方法可将 Number 对象转换为原始值
30.	全局 JavaScript 方法Number()、 方法parseInt() 方法、parseFloat() 方法可用于将变量转换为数字：
31.	Number() 方法可以把日期转换为数字，返回 1970 年 1 月 1 日至今的毫秒数
32.	parseInt() 解析一段字符串并返回数值，只返回首个数字，如果无法转换为数值，则返回 NaN
33.	数字属性属于名为 number 的 JavaScript 数字对象包装器。
这些属性只能作为 Number.MAX_VALUE 访问。
34.	使用数组文本是创建 JavaScript 数组最简单的方法，声明可横跨多行，请不要最后一个元素之后写逗号
35.	数组是一种特殊类型的对象。在 JavaScript 中对数组使用 typeof 运算符会返回 "object"。但是，数组使用数字（在 JavaScript 中，数组只能使用数字索引）来访问其“元素”。 对象使用名称（对象使用命名索引）来访问其“成员”。
36.	JavaScript 变量可以是对象。数组是特殊类型的对象。
正因如此，您可以在相同数组中存放不同类型的变量。
您可以在数组保存对象。您可以在数组中保存函数。你甚至可以在数组中保存数组：
37.	向数组添加新元素的最佳方法是使用 push() 方法，可以使用 length 属性向数组添加新元素：
38.	识别数组：
（1）	Array.isArray()：
（2）	function isArray(x) {
    		return x.constructor.toString().indexOf("Array") > -1;
}
（3）	 instanceof 运算符
39.	把数组转换为字符串（1）toString()（2）join()还可以规定分隔符
如果需要原始值，则 JavaScript 会自动把数组转换为字符串
40.	因为javaScript 数组属于对象，其中的元素就可以使用 JavaScript delete 运算符来删除，原来的位置变为undefined，会在数组留下未定义的空洞
41.	我们通过一个比值函数来修正sort() 方法在对数值排序时会产生不正确的结果，points.sort(function(a, b){return a - b});
42.	map() 方法不会对没有值的数组元素执行函数。
map() 方法不会更改原始数组
43.	日期对象是静态的。
44.	在 HTML 中显示日期对象时，会使用 toString() 方法自动转换为字符串。
45.	当获取日期时，如果不规定时区，则结果会被转换为浏览器时区。
46.	==值相等
47.	===值和类型都相等
48.	!==值或者类型不相等
49.	Switch case 使用严格比较（===）。
50.	for/in - 遍历对象属性
51.	如果有标签引用，则 break 语句可用于跳出任意代码块
52.	如需标记 JavaScript 语句，请将标签名和冒号置于语句之前：
53.	一元的 + 运算符可用于把变量转换为数字：如果无法转换变量，则仍会成为数字，但是值为 NaN
54.	
