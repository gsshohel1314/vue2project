new Vue({
    el: "#app",

    data: {
        title: "Vue 2 Project",
        isItTrue: true,
        cars:["Toyota", "BMW", "Audi"],
        MyObject:{
            name: "Shohel",
        },
        MyFunk: ()=>{
            return "Hello World";
        },
    },
});