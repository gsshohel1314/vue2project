<template>
  <div class="container">
    <transition name="appear"
    enter-active-class="animate__animated animate__backInLeft animate__slow"
    leave-active-class="animate__animated animate__backOutRight">
      <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
    </transition>
    <button @click="display=!display" class="btn btn-primary">Toggle</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      display: false,
    }
  }
}
</script>

<style>
  
</style>