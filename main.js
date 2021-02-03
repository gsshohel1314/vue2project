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