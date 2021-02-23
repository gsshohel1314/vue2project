<template>
  <div class="container">
    <compClint/>
    <compUser/>
  </div>
</template>

<script>
import compClint from './components/Client'
import compUser from './components/User'
export default {
  data(){
    return{
      
    }
  },
  components:{
    compClint,
    compUser,
  }
}
</script>

<style>
  
</style>