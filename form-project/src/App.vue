<template>
    <div class="container">
        <div v-awesome.redColor.big="'Hello Shohel'"></div>
        <div v-awesome.greenColor.small="'Hello Shohel'"></div>
        <hr>
        <div v-user="userValue"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userValue: "Luffy",
        }
    },
    directives:{
        'user': {
            bind(el, binding){
                el.innerHTML = binding.value;
            }
        }
    }
}
</script>