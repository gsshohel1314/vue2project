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

new Vue({
    el: "#vonce",
    data: {
        name: "Shohel",
    },
    methods: {
        update(){
            setTimeout(()=>{
                this.name= "Rana";
            },2000);
        },
    },
});

new Vue({
    el: "#event1",
    data: {
        name: "Luffy",
        x: 0,
        y: 0,
    },
    methods: {
        updateName(){
            this.name = "Raffe";
        },
        getCoord(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
    },
});

new Vue({
    el: "#argandmodi",
    data: {
        name: "Luffy",
    },
    methods: {
        updateName(newName, event){
            this.name = newName;
            console.log(event);
        },
        handleForm(){
            console.log('Form Submit');
        },
    },
});

new Vue({
    el: "#vmodel",
    data: {
        formData:{
            firstName: "",
            lastName: "",
        },
    },
    methods: {
        formHandle(){
            console.log(this.formData);
        },
    },
});

new Vue({
    el: "#computed",
    data: {
        a: 0,
        b: 0,
        salary: 10,
    },
    computed: {
        addToA(){
            console.log("add a");
            return this.a + this.salary;
        },
        addToB(){
            console.log("add b");
            return this.b + this.salary;
        },
    },
});

new Vue({
    el: "#shorthand",
    data: {
        a: 0,
        link: "https://www.google.com/",
        name: "",
    },
});
 
const app11 = new Vue({
    el: "#app1",
    data: {
        value: "1st",
    },
    methods: {
        changeValue(){
            app12.value="Changed";
        },
    },
});

const app12 = new Vue({
    el: "#app2",
    data: {
        value: "2nd",
    },
});

const temp = `<h3>My name is {{ name }}</h3>`;
const app1 = new Vue({
    
    data: {
        name: "Luffy",
    },
    template: temp,
});

setTimeout(()=>{
    app1.$mount(mountandtemp);
}, 2000);

Vue.component('comp1',{
    data(){
        return {
            name: "Luffy",
        }
    },
    template: `<h1>{{ name }}</h1>`,
});
new Vue({
    el: "#compo",
});

new Vue({
    el: "#lifecycle",
    data: {
        name: "Luffy",
    },
    methods: {
        updateName(){
            this.name= "Shohel";
        },
        destroy(){
            this.$destroy();
        },
    },

    beforeCreate() {
        console.log("Running before create");
    },
    created() {
        console.log("Running created");
    },
    beforeMount() {
        console.log("Running before mount");
    },
    mounted() {
        console.log("Running mounted");
    },
    beforeUpdate() {
        console.log("Before update");
    },
    updated() {
        console.log("Updated");
    },
    beforeDestroy() {
        console.log('Before destroy');
    },
    destroyed() {
        console.log('Destroyed');
    },
});