<template>
    <div>
        <p> {{ text }} </p>

        <p>Car List:</p>
        <ul>
            <li v-for="car in cars" :key="car">
                {{ car }}
            </li>
        </ul>

        <p>Fruit List:</p>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
        <hr>
    </div>
</template>

<script>
import {carMixin, fruitMixin} from './mixin'
export default {
    data(){
        return{
            text: "Hello Clint"
        }
    },
    mixins: [carMixin, fruitMixin],
}
</script>