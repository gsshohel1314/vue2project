<template>
  <div>
    <compListHelper>
      
    </compListHelper>
  </div>
</template>

<script>
import compListHelper from './Components/listHelper'
export default {
  data(){
    return{
      list: ['html', 'css', 'javaScript'],
      loder: '',
    }
  },

  components:{
    compListHelper,
  },

  created() {
    setTimeout(()=>{
      this.loder= "other";
    }, 2000)
  },
}
</script>

<style>
  
</style>