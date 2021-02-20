<template>
  <div>
    <compListHelper>
      <ul slot="listItem">
        <li v-for="li in list" :key="li">
          {{ li }}
        </li>
      </ul>
      <p slot="para">user also knows php</p>
      <p :slot="loder">See you again</p>
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