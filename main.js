new Vue({
    el: "#app",

    data: {
        title: "vue js 2 project",
        isItTrue: true,
        cars: ['Toyota', 'BMW', 'Audi'],
        MyObject: {
            name: "Shohel",
        },
        MyFunk: ()=>{
            return "Hello World"
        },
    },

    methods: {
        MyMethod(){
            return "Hello Shohel";
        },

        MyMethod2(){
            return this.title;
        },

        returnArray(){
            return this.cars[2];
        }
    },
});