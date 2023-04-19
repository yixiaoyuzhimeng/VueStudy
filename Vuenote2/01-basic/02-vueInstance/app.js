const app = Vue.createApp({
  data(){
    return {
      courseGoal:'Finish the course and Learn Vue!',
      courseGoalA:'Finish the course and Learn Vue!',
      courseGoalB:'Mater Vue and build amazing apps!',
      vueLink:'http://vuejs.org/',
      htmlex:'<h2>2333</h2>'
    };
  },
  methods:{
    outputGoal(){
      const randomNumber = Math.random();
      if(randomNumber < 0.5){
        return this.courseGoalA;
      }else{
        return this.courseGoalB ;
      }
    },
  }
});

app.mount('#user-goal');

