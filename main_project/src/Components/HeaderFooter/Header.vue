<template>
    <div>
        <p>This is header part</p>
        <p>First Name: {{ firstName }}</p>
        <p>Last Name: {{ lastName }}</p>
        <p>Age: {{ age }}</p>
        <button v-on:click="updateName">Click Me</button>
    </div>
</template>

<script>
export default {
    props: {
        firstName: String,
        lastName: String,
        age: Number
    },
    methods: {
        updateName(){
            this.$emit('updateValue', 'luffy');
        }
    },
}
</script>

<style scoped>
    div{
        color: red;
    }
</style>