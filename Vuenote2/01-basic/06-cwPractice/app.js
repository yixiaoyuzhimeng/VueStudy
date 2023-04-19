const app=Vue.createApp({
  data(){
    return {
      counter:0
    }
  },
  computed: {
    result(){
      if(this.counter<37){
        return 'not there yet';
      }else if(this.counter===37){
        return this.counter;
      }else{
        return 'too much';
      }
    }
  },
  watch:{
    result(){
      console.log('watcher executing……');
      const that=this;
      setTimeout(function(){
        that.counter=0;
      },5000);
    }
  },
  methods:{
    addNumber(num){
      this.counter+=num;
      console.log(this.counter);
    }
  }
});
app.mount('#assignment')