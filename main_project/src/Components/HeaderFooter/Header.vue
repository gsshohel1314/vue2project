<template>
    <div>
        <p>This is header part</p>
        <ul>
            <li v-for="stu in myStudents" :key="stu" >
                {{ stu }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        myStudents: {
            type: Array,
        }
    },
}
</script>

<style scoped>
    div{
        color: red;
    }
</style>