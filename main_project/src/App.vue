<template>
  <div>
    <appHeader 
      v-bind:firstName = "fName"
    />
  
    <appFooter
      v-bind:lastName = "lName"
    />
  </div>
</template>

<script>
import appHeader from './Components/HeaderFooter/Header';
import appFooter from './Components/HeaderFooter/Footer';

export default {
  data() {
    return {
      fName: "Jon",
      lName: "Doe",
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
