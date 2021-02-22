<template>
    <div class="container">
        <button @click="compToRender='compHome'">Home</button>
        <button @click="compToRender='compAbout'">About</button>
        <button @click="compToRender='compContact'">Contact</button>

        <keep-alive>
            <component :is="compToRender"></component>
        </keep-alive>
    </div>
</template>

<script>
import compHome from './Components/Home'
import compAbout from './Components/About'
import compContact from './Components/Contact'
export default {
    data(){
        return{
            compToRender: "compContact",
        }
    },
    components:{
        compHome,
        compAbout,
        compContact
    }
}
</script>

<style>

</style>