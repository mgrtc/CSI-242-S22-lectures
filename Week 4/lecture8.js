////**********************************************************************************************
////*********************************************************************************************
//// Lecture  8: Scope, Closures, More Scope
////**********************************************************************************************
////**********************************************************************************************

////*****************************
//// Basic Scope Review: decelerations
////*****************************


////*****************************
//// let: Block Scoped, dynamic
////*****************************
// {
//     let i = 5
//     {
//     console.log(i)
//     }
//     i = 6
// }
// console.log(i) // fails


////*****************************
//// const: Block Scoped, static
////*****************************
// {
//     const j = 5
//     console.log(j)
//     // j = 6 // fails
// }
// console.log(j) // fails

////*******************************
//// var: function scoped, dynamic
////*******************************
// {
//     var k = 5
// }
// console.log(k) // succeeds 

// function example(){
//     var k = 5
// }
// example()
// console.log(k) // fails

//Quick note: all function inputs are basically vars

////**********************************
//// blank : global(?) scoped, dynamic
////**********************************

////**********************************************************************************************
////*********************************************************************************************
//// Reminder: give them the passcode: Hint Thales
////**********************************************************************************************
////**********************************************************************************************

var k = 7
{
    function getLength(myName){
        var cart = input.cart
        myName = "Matty"
        console.log(myName)
        // a = 5
    }
}
cart = {ipod: {price: 5}}
myName = "Matthew"
getLength(myName)
console.log(myName)

// This here is spooky we do not like this.

// let x = 5
// let y = 5
// function example1(){
//     let x = 6
//     function example2(){
//         x = 7
//         y = 7
//     }
//     console.log(x,y)
//     return example2
// }
// example2 = example1()
// example2()
// console.log(x,y)

////***************************************************************
//// blank : "function definitions frame hierarchy" scoped, dynamic
////***************************************************************

// What the heck does that mean????
// We're gonna have to white board this one folks.
// (Whiteboard about example1 & example2 code above)

// The short version is that when you leave the kind of deceleration 
// blank it goes looking for a variable of that same name to pull in.
// It will first check the place where the function was defined to see
// if a variable of the same name is there, if not it will look at the 
// place that function was defined, and on and on until it hits the 
// global frame. If it gets to the global frame and still doesn't find
// a variable of that name it will create a global variable of that name.

// This is also exactly the same path references take when looking to 
// resolve. Though with references if no reference exists they give up
// and error out instead of creating a global variable.


////*********************************************
//// window. : global scoped (basically), dynamic
////*********************************************

// let x = 5
// let y = 5
// function example1(){
//     var x = 6
//     function example2(){
//         console.log(x)
//         window.x = 7
//         y = 7
//     }
//     console.log(x,y)
//     example2()
// }
// example1()
// console.log(x,y)

// Okay but here's the total nonsense: the code above doesn't act this way if it's let instead of var. WHAT?
// The reason for this is that global let and const, while still global don't get put in window object, 
// just in the "declarative environment record", instead of also in the "object environment record". 
// According to this stackoverflow post anyway. Trying to dig deeper on this one lead me to official ECMA specs
// And going farther down that path leads only to madness.
// https://stackoverflow.com/questions/39414692/a-javascript-let-global-variable-is-not-a-property-of-window-unlike-a-global




// //********************Challenge************************
//What gets console.log'd out here and why.
// var a = 1
// function example1(){
//     {
//         let a = 2
//         function example2(){
//             console.log(a);
//             a = 3
//         }
//         function example3(){
//             console.log(a)
//         }
//     }
//     function example4(){
//         var a = 4
//         example2()
//         example3()
//         console.log(a)
//     }
//     a = 5
//     example4()
// }

// console.log(a)
// example1()
// console.log(a)
// //*****************************************************



////***************
// Review if needed
////***************

// //For each of these console.log's what will happen when they are called?
// a = ()=>{
//     var x = "wrong number who dis"
//     var y = "hewwo"
//     // console.log(x,y,z)
//     b = ()=>{
//         var x = "wassup man"
//         var y = "hello"
//         var z = "howdy"
//         console.log(x,y,z)
//         c = ()=>{
//             var x = "wassup"
//             var y = "hey"
//             // console.log(x,y,z)
//             d = ()=>{
//                 var x = "sup"
//                 // console.log(x,y,z)
//             }
//             d()
//         }
//         c()
//     }
//     b()
// }
// a()


////*********
//// Closures
////*********
// {
//     x = "hello" //show what happens when you change to let
//     var sayHello = function(){
//         console.log(x)
//     }
// }

// sayHello()
// console.log(x)

// count = function(){
//     counter = 0
//     count = function(){
//         return counter += 1
//     }
//     return counter
// }
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())


// {
//     let counter = 0
//     var count = ()=>{
//         counter +=1
//         return counter
//     }
// }

