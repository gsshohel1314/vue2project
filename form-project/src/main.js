import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('awesome',{
  bind(el, binding){
    el.innerHTML = binding.value;
    // el.style.color= "red";
    // if(binding.arg === 'redColor'){
    //   el.style.color= "red";
    // }
    // if(binding.arg === 'greenColor'){
    //   el.style.color= "green";
    // }
    if(binding.modifiers.redColor){
      el.style.color = 'red';
    }
    if(binding.modifiers.big){
      el.style.fontSize = '30px';
    }

    if(binding.modifiers.greenColor){
      el.style.color = 'green';
    }
    if(binding.modifiers.small){
      el.style.fontSize = '15px';
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
