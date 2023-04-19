const app = Vue.createApp({
  data(){
    return {
      name:"Daira",
      age:21,
      imgRef:"judi.jpg",
      remind:"the above beauty is not me!"
    }
  },
  methods:{//is methods!!! not method!!!
    calculateAge(){
      return this.age+5;
    },
    randNum(){
      return Math.random();
    }
  }
});
app.mount('#app');