<template>
  <div>
    <appHeader :myStudents="students"/>
  
    <appFooter/>
  </div>
</template>

<script>
import appHeader from './Components/HeaderFooter/Header';
import appFooter from './Components/HeaderFooter/Footer';

export default {
  data() {
    return {
      students: ['luffy', 'rafee', 'jemee', 'sammy'],
    }
  },

  components: {
    appHeader,
    appFooter,
  }
}
</script>

<style>
  body{
    margin: 0% auto;
    font-family: 'Roboto', sans-serif;
  }
</style>
