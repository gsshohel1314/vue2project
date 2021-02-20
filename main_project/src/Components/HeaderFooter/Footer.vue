<template>
    <div>
        This is footer part
        <p>Last Name: {{ lastName }}</p>
    </div>
</template>

<script>
import {bus} from '../../main'
export default {
    props:{
        lastName: String,
    },
    created() {
        bus.$on('changeName', (data)=>{
            this.lastName= data;
        });
    },
}
</script>

<style scoped>
    div{
        color: blue;
    }
</style>