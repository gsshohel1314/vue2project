import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('removeText',(value)=>{ //globally filter use
  return value.slice(1);
})

new Vue({
  render: h => h(App),
}).$mount('#app')
