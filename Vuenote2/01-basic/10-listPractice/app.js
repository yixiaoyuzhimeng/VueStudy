const app=Vue.createApp({
  data(){
    return{
      isvisible:false,
      tasks:[],
      value:''
    }
  },
  methods:{
    changevisible(){
      this.isvisible=!this.isvisible;
    },
    addTask(){
      this.tasks.push(this.value);
      this.value='';
    }
  },
  computed:{
    buttonCaption(){
      return this.isvisible?'Hide List':'Show List';
    }
  }
}).mount("#assignment");