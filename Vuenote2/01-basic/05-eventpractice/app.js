const app=Vue.createApp({
  data(){
    return {
      value:'',
      confirmedValue :'',
      value2:''

    }
  },
  methods:{
    showAlert(){
      alert("whatever")
    },
    setValue(event){
      this.value=event.target.value;
    },
    setConfirmedValue(){
      this.confirmedValue=event.target.value;      
    }
  }
});
app.mount('#assignment')