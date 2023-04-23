<template>
  <header>
    <h1></h1>
  </header>
  <section>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default{
  // props:[
  //   'name',
  //   'phoneNumber', //phone-number (automatically transfer)
  //   'emailAddress'
  // ]    
  props:{
    name:{
      type:String,
      required:true,
    },
    phoneNumber:{
      type:String,
      required:true,
    },
    emailAddress:{
      type:String,
      required:true,
    },
    isFavorite:{
      type:String,
      required:true,
      default:'0',
      validator:function(value){
        return value === '1' || value === '0';
      }
    }
  }
}
</script>

<style>

</style>