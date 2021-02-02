new Vue({
     el: "#app",

     data: {
         title: "Vue 2 Project",
         isItTrue: true,
         cars: ['Toyota', 'BMW', 'Alion', 'Audi'],
         MyName:{
            name:"Shohel",
         },
         MyFunk: ()=>{
            return "Hello World";
         },
     }
});