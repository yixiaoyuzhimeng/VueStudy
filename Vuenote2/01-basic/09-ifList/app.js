const app=Vue.createApp({
  data () {
    return {
      goals:[],
      enteredGoalValue:'',
      people:[
        {name:'yu',age:20},
        {name:'daria',age:22},
      ],
      somebody:{
        name:'daria',age:22
      },
    }
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValue);
      console.log(this.goals);
      this.enteredGoalValue='';
    },
    removeGoal(idx){
      this.goals.splice(idx,1);
    }
  }
}).mount('#user-goals');