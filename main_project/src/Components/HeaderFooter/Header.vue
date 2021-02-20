<template>
    <div>
        <p>This is header part</p>
        <p>First Name: {{ firstName }}</p>

        <button v-on:click="updateName">Click Me</button>
        <hr>
    </div>
</template>

<script>
import {bus} from '../../main'
export default {
    props: {
        firstName: String,
    },
    methods: {
        updateName(){
            // this.firstName = "jack";
            bus.$emit('changeName', this.firstName = "jack");
        }
    },
}
</script>

<style scoped>
    div{
        color: red;
    }
</style>