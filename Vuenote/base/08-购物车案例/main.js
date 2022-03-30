const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        data:'2006-9',
        price:85.000,
        count:1
      },
      {
        id:2,
        name:'《代码大全》',
        data:'2006-9',
        price:85.000,
        count:1
      },
      {
        id:3,
        name:'《UNIX编程艺术》',
        data:'2006-2',
        price:59.000,
        count:1
      },
      {
        id:4,
        name:'《编程珠玑》',
        data:'2008-10',
        price:39.000,
        count:1
      },
    ]
  },
  methods:{
    getFinalPrice(price){
      return '￥'+price.toFixed(2)
    },
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
  },
  filters: {
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  },
  computed: {
    totalPrice(){
       let totalPrice=0
      // 1.使用index for(let i=0;i<this.books.length;i++){
      // for(let i=0;i<this.books.length;i++){
      //   totalPrice+=this.books[i].count*this.books[i].price
      // }
      // 2.拿取index for (let i in this.books){
      // for(let i in this.books){
      //  totalPrice+=this.books[i].count*this.books[i].price
      // }
      // 3.直接拿取item  for(let i of this.books){
      // for(let i of this.books){
      //   totalPrice+=i.count*i.price
      // }

      // 4.高阶函数reduce(二)
        // totalPrice=this.books.reduce(function(preValue,book){
        //   return preValue+book.count*book.price
        // },0)
      // 4.高阶函数reduce(一)
      totalPrice=this.books.reduce((preValue,n)=>preValue+n.count*n.price,0)
      
      return totalPrice
    }
  }

})


// 编程范式：命令式编程|声明式编程
// 面向对象编程（第一公民：对象）|函数式编程（第一公民：函数）

// const nums=[10,20,30,56,234,123,4,123]

// 需求：1.取出所有小于100的数字 2.将所有小于100的数字全部乘以2 3.将刚才的数字相加
// 
// let newNums=[]
// let newNums2=[]
// let sum=0

// 普通编程方式
// for(let i of nums){
//   if(i<100){
//     newNums.push(i)
//   }
// }
// for(let i of newNums){
//   newNums2.push(i*2)
// }
// for(let i of newNums2){
//   sum+=i
// }

// 函数式编程（一）
// filter的回调函数必须返回布尔值，当返回true时，函数内部会自动将这次的n元素加入到新的数组中
// newNums=nums.filter(function(n){
//   return n<100
// }) 
// map对数组中每个元素进行操作并加入到新的数组中
// newNums2=newNums.map(function(n){
//   return n*2
// })
// reduce对数组中所有内容进行汇总
// sum=newNums2.reduce(function(preValue,n){
//   return preValue+n
// },0)

// 函数式编程（二）：函数汇总
// sum=nums.filter(function(n){
//   return n<100
// }).map(function(n){
//   return n*2
// }).reduce(function(preValue,n){
//   return preValue+n
// },0)

// 函数式编程（三）:箭头函数
// sum=nums.filter(n=>n<100).map(n=>n*2).reduce((pre,n)=>pre+n,0);
