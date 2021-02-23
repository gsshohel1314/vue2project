<template>
  <div class="container">
    <p>{{ text | upperCase | removeText}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      text: "Hello World",
    }
  },
  filters: {
    upperCase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>
  
</style>