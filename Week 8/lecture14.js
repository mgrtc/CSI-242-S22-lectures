////******************
////******************
//// Lecture  14: this
////******************
////******************

////************************************
//// The Mystery of the Cat with no Name
////************************************

// let cat = function(itsName){
//     return {
//         itsName: itsName,
//         likesToEat: function(food){
//             return `Meow, I am ${this.itsName}` +
//             ` and I like to eat ${food}`;
//         }
//     }
// }

// let wink = {
//     itsName: "Wink",
//     likesToEat: function(food){
//         console.log("this is:", this);
//         return `Meow, I am ${this.itsName}` +
//         ` and I like to eat ${food}`;
//     }};

// console.log(wink.likesToEat("Everything!"));
// console.log(wink.likesToEat("Everything!"));

// let wEats = wink.likesToEat;
// console.log(wEats("fish")); // why did we forget Wink's name??



////********************************************
//// Solving the Mystery: JavaScript "Functions"
////********************************************
// JS doesn't really have functions, everything is kinda a method

// function whatIsThis() {
//     console.log("this is:", this);
// }

// whatIsThis() // get "this" = window aka the global object


// let o = { osWhatIsThis: whatIsThis };
// o.osWhatIsThis();  // get "this = o"

// Note: this will ALWAYS default to the window object for any function called on nothing. (1 exception with classes because JS is trash)

// So what happened in the mystery is we called the likesToEat method on nothing,
// Which called likesToEat on the window object which means doesn't have an itsName property

// silly use case: can drop the window in window.addEvenListener

// addEventListener("load",()=>{console.log("loaded")});

//terrible use case: can use "this" inside of functions to access global variables. Please don't :(
// z = {x:12}
// x = 10
// function a(){
//     var x = 5
//     function b(){
//         function c(){
//             console.log(this.x)
//         }
//         z.c = c;
//         z.c();
//     }
//     b()
// }
// a()

////******************
//// Classes are weird
////******************

// class Cat {
//     constructor(itsName) {
//         this.itsName = itsName;
//     }
    
//     likesToEat(food) {
//         console.log(this)
//         console.log(`Meow, I am ${this.itsName}` +
//         ` and I like to eat ${food}`)
//         return `Meow, I am ${this.itsName}` +
//         ` and I like to eat ${food}`;
//     }
// }
// let wink = new Cat("Wink");

// console.log(wink.itsName);                    // "Wink"
// console.log(wink.likesToEat("everything"));  // works!


// var wEats = wink.likesToEat;
// console.log(wEats("fish"));                  //error? name of undefined? this means that "this" was undefined WHAT????


// normally that would call it on the window object but even that doesn't happen here.
// This is because JS is a terrible language and should be abolished.
// What happened here is that we "lost out binding". 
// When a function that comes from inside a class is called on nothing,
// instead of being called on window it's called on undefined.

// There are a few different solutions to this "this" problem
// The obvious one is to only every call methods on objects
// but because JS is the worst there are other ways too

////***********************
//// Call & Bind
////***********************

// class Human {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.itsName = firstName + " " + lastName;
//     }
//     intro(){
//         return `The name is ${this.lastName}, ${this.itsName}`
//     }
// }

// let james = new Human("James", "Bond")

// let wEats = wink.likesToEat;
// console.log(wEats.call(james, "Martinis")); // call on james, passing "Martinis" as arg
// whatIsThis.call(james); 

// // There really aren't that many use cases for call. 

// console.log(wEats("fish"));       // error -- this isn't the cat



// let betterEats = wEats.bind(wink);
// console.log(betterEats("fish"));  // ok -- bound so that `this` is Wink always

////***************************************
//// Bind for functions allows binding args 

// function applySalesTax(taxRate, price) {
//     console.log(this, taxRate, price);
//     return price + (price * taxRate);
// }
// applySalesTax(0.09, 50)

// const applyWASalesTax = applySalesTax.bind(null, 0.065);
// console.log(applyWASalesTax(50));  //53.25

// console.log(applyWASalesTax(1, 50)) // 0.065 cause the is hard

// // Note: this is only allowed in order.

// // Note 2: we bound to null here cause we weren't using "this" inside the function
// // We could have bound to anything we wanted since it doesn't matter. 
// // Meaning that null is the most expressive option here.


////********************
//// Using Bind/this IRL
////********************
// window.addEventListener('load', (event) => {
//     myBtn = document.querySelector('#main-button');
//     myBtn.addEventListener("click", wink.likesToEat);
//     myBtn.addEventListener("click", wink.likesToEat.bind(wink));
// })



// function popUp(msg) {
//     console.log("Secret message is " + msg);
// }
  
// function handleClick(evt) {
//     let id = evt.target.id;
  
//     if (id === "a") popUp("Apple");
//     else if (id === "b") popUp("Berry");
//     else if (id === "c") popUp("Cherry");
// }
  
// const get = document.getElementById.bind(document);
  
// window.addEventListener("load", ()=>{
//     get('a').addEventListener("click", handleClick);
//     get('b').addEventListener("click", handleClick);
//     get('c').addEventListener("click", handleClick);
// })

////******************
////Or, even more fun: 


// function popUp(msg) {
//     console.log("Secret message is " + msg);
// }
  
// const get = document.getElementById.bind(document);

// window.addEventListener("load", ()=>{
//     get('a').addEventListener("click", popUp.bind(null, "Apple"));
//     get('b').addEventListener("click", popUp.bind(null, "Berry"));
//     get('c').addEventListener("click", popUp.bind(null, "Cherry"));
// });

////****************
//// Arrow Functions
////****************
// Arrow functions have a totally separate "this" default
// Normal functions default to having their "this" be window if not called on an object
// Arrow functions default to having their "this" be whatever "this" was where they were defined
// This behavior is more similar to the scoping rules where our parent frame is the frame we were defined in


class Cat {
    constructor(itsName) {
        this.itsName = itsName;
    }
    
    likesToEat(food) {
        var a = ()=>{console.log("a:",this)};
        var b = function(){console.log("b:", this)};
        a();
        b();
        // console.log(this)
        // console.log(`Meow, I am ${this.itsName}` +
        // ` and I like to eat ${food}`)
        // return `Meow, I am ${this.itsName}` +
        // ` and I like to eat ${food}`;
    }
}
let wink = new Cat("Wink");
wink.likesToEat()


let cat = function(itsName){
    return {
        itsName: itsName,
        likesToCry: function likesToEat(food){
            var a = ()=>{console.log("a:",this)};
            var b = function(){console.log("b:", this)};
            a();
            b();
        }
    }
}

zorra = cat("zorra")
zorra.likesToCry()
// class Greeter {
//     constructor(name) {
//         this.name = name;
//     }
  
//     superGreet() {
//         console.log(`#1: I am ${this.name}, welcome`);   // works, obvs
    
//         setTimeout(function () {
//             console.log(`#2 I am ${this.name}, welcome`);  // ut oh
//             // console.log(this === window)
//             // it's because when the function is called it's being called on nothing aka window
//         }, 500);
    
//         setTimeout(() => {
//             console.log(`#3 I am ${this.name}, welcome`);  // yay!
//             // arrow functions carry the "this" with them from whatever space they were defined in
//         }, 1000);
//     }
// }

// let jake = new Greeter("Jake");
// // jake.superGreet();


// let windowArrow = ()=>{console.log("windowArrow's this:", this)}; //define an arrow function that shows it's this
// windowArrow()

// function hey(){
//     console.log("hey's this:",this);
//     nestedArrow = ()=>{console.log("nestedArrow's this:", this)};
//     nestedArrow();
//     windowArrow();
// };
// hey.call({"hi":"hi"});

// // //Stressing here again arrow functions have this as the this in the environnement they were defined
// //basically these are the same:
// ()=>{}
// function(){}.bind(this)


////**************
//// Takeaways
////**************
// 1) 'this' is a pain
// 2) 'this' refers to the object the method/function we're running has been called on: hello.func() inside of func this = hello
// 3) because we will want to have functions called by methods, if those functions also use 'this'
//    we need to be very careful about which this is being passed along
// 4) the most common and best solution is arrow functions because they usually maintain the 'this' we want
// 5) their 'this' behavior is the only difference between arrow functions and other anonymous functions
// 6) bind can be pretty cool 