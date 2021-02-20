<template>
  <div>
      <slot name="listItem"></slot>
      I am a list helper
      <slot name="para"></slot>
      <slot name="other"> Loading... </slot>
  </div>
</template>

<script>
export default {
  data(){
      return{
          
      }
  }
}
</script>

<style scoped>
    ul li {
        color: red;
    }

    p{
        color: blue;
    }
</style>