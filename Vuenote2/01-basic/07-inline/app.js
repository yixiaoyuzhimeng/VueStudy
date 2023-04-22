const app=Vue.createApp({
  data(){
    return {
      boxASelected:false,
      boxBSelected:false,
      boxCSelected:false,
      boxDSelected:false,
    }
  },
  methods: {
    boxSelected(box){
      if(box==='A'){
        this.boxASelected = !this.boxASelected;
        console.log('a ');
      }else if(box==='B'){
        this.boxBSelected = !this.boxBSelected;
        console.log('b ');
      }else if(box==='C'){
        this.boxCSelected = !this.boxCSelected;
        console.log('c ');
      }else if(box==='D'){
        this.boxDSelected = !this.boxDSelected;
        console.log('d ');
      }
    }
  },
  computed: {
    boxCClasses(){
      return {active: this.boxCSelected};
    },
  }
});
app.mount('#styling');