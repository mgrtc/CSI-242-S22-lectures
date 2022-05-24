////******************
////******************
//// Lecture  14: this
////******************
////******************

// "use strict"

// The basic idea: this refers to the object a method was called on

function logThis(){console.log("this is:", this)}

var thing1 = {tag: 1};
thing1.logThis = logThis;
thing1.logThis();

var thing2 = {tag: 2};
thing2.logThis = logThis;
thing2.logThis();

// If we are in the global frame this refers to the window object

// console.log(this);

// What if we aren't in a method or global? Plot twist everything is a method

// logThis();

// // If functions are just called they are always called on window

// thing1.wrapper = function(){
//     console.log("wrapper this is:", this);

//     logThis();

//     function nestedLogThis(){
//         console.log("nested this is:", this);
//     }
//     nestedLogThis();

//     // I'm going to be honest about this I find this bit a little objectionable
//     // because window.nestedLogThis is undefined!

//     console.log("undefined?",window.nestedLogThis);

//     // So it feels like mild nonsense for it to be set up this way.
//     // Which is why in strict mode, they decide to instead of having this be
//     // window in all these situations they just have it be undefined.

// }
// thing1.wrapper();

// The Major Exception to all that is arrow functions where this refers to 
// whatever this was in the scope the arrow function was declared in
// instead of the object the method was called on.

// thing1.logArrow = ()=>{console.log(this)};

thing1.arrowWrapper = function(){

    console.log("arrowWrapper this is:", this);
    // what is this here?

    var nestedArrow = ()=>{
        // whatever it is, it'll be that in here too
        console.log("nested arrow this is:", this);
    }
    nestedArrow();
    var thing3 = {tag: 3, nestedArrow: nestedArrow}
    thing3.nestedArrow();

}
thing1.arrowWrapper();

// So these are the 3.5 rules that will cover most cases 
// 1: if you are in a global frame or in a (non-arrow) function that wasn't called as a method
    // 1a: if you are in strict mode this is undefined
    // 1b: if you are not in strict mode this is window
// 2: if you are in a non-arrow method, this is whatever that method was called on
// 3: if you are inside an arrow function (whether or not it's called as a method), this is whatever this was when the arrow function was defined

// Except JS is a trash language and things just have to get more complicated
// We still gotta talk about classes and lost bindings

// class Cat {
//     constructor(itsName) {
//         this.itsName = itsName;
//     }
    
//     myName(){
//         console.log("cat's this is:", this);
//         console.log(`my name is ${this.itsName}`)
//         return this.itsName;
//     }
// }

// var wink = new Cat("wink");
// wink.myName();
// // winksName = wink.myName;
// // console.log(winksName());

// // var zorra = {itsName: "zorra"}
// // zorra.myName = wink.myName;
// // zorra.myName();

// // For some go forsaken reason the people who added classes to the language decided that those 3.5 rules
// // weren't quite complicated enough. In this one case JS acts like it's in strict mode all the time
// // So rule 1c: if this function was a class method then regardless of strict mode this is undefined

// // I see rule 1c as strong encouragement to only ever call class methods on objects
// // However the JS maintainers are/were the worst so some of them didn't see it that way 
// // And so some of them built some additional functions specifically to screw with this
// // I see this as a profound moral failing.

// ////*****
// //// Call
// ////*****

// class Hungry {
//     constructor(itsName){
//         this.itsName = itsName;
//     }
//     wantsToEat(food){
//         console.log("this:",food);
//         console.log(`My name is ${this.itsName} and I want to eat ${food}.`);
//         return `My name is ${this.itsName} and I want to eat ${food}.`;
//     }
// }

// let matthew = new Hungry("Matthew");
// matthew.wantsToEat("oranges");

// // let wantsToEat = matthew.wantsToEat;
// // // wantsToEat("oranges"); //errors

// // // we could just do this but this does mean that wink will forever have this function as part of him
// // wink.wantsToEat = wantsToEat;
// // wink.wantsToEat("fish");

// // // so we can do this instead

// // wantsToEat.call(wink, "fish"); // call this on wink with "fish" as a input

// // There really aren't that many use cases for call. 
// // And you should probably never use it, but in case you 
// // see other people using it this is what it does.

// //*****
// // Bind
// //*****

// // let boundEats = wantsToEat.bind(wink);
// // console.log(boundEats("fish"));  // ok -- bound so that `this` is always wink

// // The main use case for bind is to get around a problem caused by JS's love affair with callbacks

// function callMethod(method){
//     method();
// }

// // callMethod(wink.myName) // this is gonna cause an error

// // why?

// callMethod(wink.myName.bind(wink)); // I kinda hate this but it's what you have to do if you want to 
// // pass a method into a function and want the method's this's to work

// ////***************************************
// //// Bind also lets you lock in args values

// mEatsTangerines = matthew.wantsToEat.bind(matthew, "tangerines");

// mEatsTangerines();

// // And all this does have a few genuinely fun use case

// const get = document.getElementById.bind(document);

// function handleClick() {
//     console.log("Secret message is " + this.msg);
// }

// var things = [
//     {id: "a", msg: "Apple"}, 
//     {id: "b", msg: "Berry"},
//     {id: "c", msg: "Cherry"}
// ]

// window.addEventListener("load", ()=>{
//     for(thing of things){
//         get(thing.id).addEventListener("click", handleClick.bind(thing));
//     }
// });

// // But I would usually cation against using these sorts of tricks
// // There are less confusing ways to write this code even if these
// // are more efficient/fun.

// // And that's basically why I call this a moral failing. They had the option of having just
// // 2 clear rules

// // 1: If you are in a non-method call this is undefined
// // 2: If you are in a method call this is the object you were called on

// // If that was it you wouldn't see tweets like this
// // Instead they chose to make a mess with rules and sub rules and built in ways to get around those rules.

// // This was done in the interest of giving developers greater power. And that philosophy is a big part of why 
// // I love JS dearly. But it also is one of the main reasons I hate it with such a passion. 


// ////*****************
// //// Actual Takeaways
// ////*****************
// // 1) 'this' is a pain because JS is a mess
// // 2) 'this' refers to the object the method/function we're running has been called on: hello.func() inside of func this = hello
// // 3) because we will want to have functions called by methods, if those functions also use 'this'
// //    we need to be very careful about which this is being passed along
// // 4) the most common and best solution is arrow functions because they usually maintain the 'this' we want
// // 5) their 'this' behavior is the only difference between arrow functions and other anonymous functions
// // 6) bind can be cool but you probably shouldn't use it

// // Final list of rules I'm sorry
// // 1: if you are in a global frame or in a (non-arrow) function that wasn't called as a method
//     // 1a: if you are in strict mode "this" is undefined
//     // 1b: if you are not in strict mode "this" is window
//     // 1c: unless the function was originally defined as a class method then "this" is undefined
//     // 1d: unless the function was re-defined via bind, in which case "this" is whatever was bound to the function
// // 2: if you are in a non-arrow function being called as a method, "this" is whatever that method was called on
// // 3: if you are inside an arrow function (whether or not it's called as a method), "this" is whatever "this" was when the arrow function was defined
// // 4: Also call is a thing, when you func.call(forcedThis) then inside that call of func this is forcedThis