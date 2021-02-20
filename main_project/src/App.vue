<template>
  <div>
    <appHeader 
      v-bind:firstName = "fName"
      v-bind:lastName = "lName"
      v-bind:age = "myAge"
      v-on:updateValue = "fName = $event"
    />
  
    <appFooter/>
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
      myAge: 25
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
