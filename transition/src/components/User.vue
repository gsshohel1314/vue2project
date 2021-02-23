<template>
    <div>
        <p> {{ text }} </p>

        <p>Car List:</p>
        <ul>
            <li v-for="car in cars" :key="car">
                {{ car }}
            </li>
        </ul>

        <p>Person List:</p>
        <ul>
            <li v-for="person in persons" :key="person">
                {{ person }}
            </li>
        </ul>
    </div>
</template>

<script>
import {carMixin, personMixin} from './mixin'
export default {
    data(){
        return{
            text: "Hello User"
        }
    },
    mixins: [carMixin, personMixin],
}
</script>