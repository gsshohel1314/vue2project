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
        myMethod(){
            return "Hii! I am shohel";
        },
        returnValue(){
            return this.title;
        },
        returnArray(){
            return this.cars[0];
        }
    }
});

new Vue({
    el: "#directive",

    data: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "This is a dog",
        link: "http://google.com",
        myName: "Shohel Rana",
        myHtml: "<strong>I am a programmer</strong>",
    },
});

new Vue({
    el: "#conditionalRendering",
    
    data:{
        userName: "shohel",
        userAge: 16,
        allowedAge:18,
    },

    methods:{
        changeUser(){
            return this.userName === "shohel" ? true: false;
        }
    },
});

new Vue({
    el: "#vshow",
    data: {
        userName: "rafi",
    }
});

new Vue({
    el: "#vfor",
    data: {
        cars: ['BMW', 'Ford', 'Toyota'],
        user: {
            name: "Luffy",
            age: 25,
            country: "Japan",
        },
    },
});