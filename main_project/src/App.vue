<template>
  <div>
    <appHeader/>
    <p> Name is : {{ name }} </p>
    <p> Age is : {{ age }} </p>
    <appFooter/>
  </div>
</template>

<script>
import appHeader from './Components/HeaderFooter/Header';
import appFooter from './Components/HeaderFooter/Footer';

export default {
  data() {
    return {
      name: "Shohel",
      age: 25,
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
