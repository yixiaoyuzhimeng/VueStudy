const app = Vue.createApp({
  data(){
    return {
      counter:0,
      name:'',
      confirmName:'',
      // fullname:''
    }
  },
  methods:{
    AddCounter(){
      this.counter++;
    },
    RemoveCounter(num){
      this.counter-=num;
    },
    setName(event,secondName){
      this.name = event.target.value+''+secondName;
    },
    submitForm(){
      alert('Submitted!');
    },
    confirmInput(){
      this.confirmName=this.name;
    },
    resetInput(){
      this.name='';
    }
  },
  computed:{
    fullname(){
      console.log("running again");
      if(this.name===''){
        return '';
      }else{
        return this.name+''+'daria';
      }
    }
  },
  watch:{
    //when 'name' changed, not a good idea to cope with the logical things 
    // name(value){
    //   if(value==''){
    //     this.fullname= value;
    //   }else{
    //     this.fullname= value+''+'daria';
    //   }
    // },
    // lastname(value){
         
    // }
    counter(value){
      if(value>5){
        this.counter=0;
      }
    }

  }
});
app.mount('#app');