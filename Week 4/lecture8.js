////**********************************************************************************************
////*********************************************************************************************
//// Lecture  8: Scope, Closures, More Scope
////**********************************************************************************************
////**********************************************************************************************
//// JS is what is called a "lexically" scoped language


////*****************************
//// Basic Scope Review: decelerations
////*****************************


////*****************************
//// let: Block Scoped, editable
////*****************************

// block scoped variables are findable and assignable 
// inside the block in which they are declared
// And inside any blocks nested inside that block

// {
//     let i = 1;
//     {
//         console.log(i);
//         i = 2;
//         console.log(i);
//     }
// }

// // // But they cannot be found outside their block
// console.log(i); // error

// // i = 2 here is an assignment. We talked a bit yesterday and said
// // that an untagged declaration of a variable is global. That is still
// // true, but only when no variables of that name exist between the 
// // assignment/declaration and the global frame.

// {
//     let local = 1;
//     let global;
//     {
//         local = 2;
//         global = 2;
//     }
// }
// // console.log(local); // error
// console.log(global); // succeeds


// When a variable is referenced or assigned the variable that 
// is changed is the "closest" variable with the given name.
// We first check the code block we are in for a local variable, 
// then check the code block that wraps the code block we are in.
// Then we check the code block that wraps that block and so on.

// {
//     let i = 0;
//     {
//         let i = 1;
//         {
//             let i = 0;
//             console.log("1",i);
//             i = 2;
//             global = 3;
//         }
//         console.log("2",i);
//     }
//     console.log("3",i);
// }
// console.log(global);

// If we make it all the way to global without finding anything
// then we create a new global variable.

////*****************************
//// const: Block Scoped, fixed
////*****************************

// const works the same way as let except you cannot change it's value.

// {
//     const j = 5;
//     // console.log(j);
//     {
//         const j = 3;
//         {
//             let j = 0;
//             j = 2;
//             console.log(j);
//         }
//         j = 3;
//     }
//     // j = 6; // fails
// }
// console.log(j); // fails


////*******************************
//// var: function scoped, editable
////*******************************
// This is where we will spend the majority of today's class and will be 
// done in large part using the visualizer.

// vars are not limited to their code block, instead they are limited to their function
// and to any functions that are defined in their function.

// {
//     var global = 0;
// }
// console.log(k); // succeeds 

// // var k here is not limited to it's block and because it's block is in global var k is global.

// var global = 0;
// function example(){
//     var inner = 1;
//     var global = 2;
//     console.log(global);
// }
// example();
// console.log(global);
// console.log(inner); // fails


// Here var inner is restricted to example and cannot be accessed outside
// however var global is reference-able from inside of example because
// example was defined in the default/window/global frame, where var global 
// was also defined. 

//Not only is it reference-able it's also editable

// var global = 0;
// function example(){
//     global = 1;
// }
// example();
// console.log(global);

// The rules for which variable is referenced / edited work a lot like the 
// the rules for let with blocks. First we start in the local function, then 
// we go looking in the function where our inner function was defined, then 
// in the function where that function was defined and so on.

// var i = 0;
// function outer(){
//     i = 1;
//     function inner(){
//         i = 2;
//     }
//     console.log("1",i);
//     inner();
//     console.log("2",i);
// }
// outer();
// console.log("3",i);

// Where this gets a bit confusing and quite spicy is that functions aren't always called from
// the scope they are defined. When looking at blocks it's always immediately visually clear 
// what your path to global is, when looking through function frames it's often much less clear.

// function definer(input){
//     var print = input;
//     function defined(){
//         console.log(print);
//     }
//     return defined;
// }
// print3 = definer(3);
// print3();

//Error in Sandbox

// // What makes this even worse is that your parent frame is the specific function call you were defined in

function definer(input){
    var printS = input;
    function printer(){
        console.log(printS);
    }
    return printer;
}
print3 = definer(3);
print5 = definer(5);
// console.log(printS); //error
print3();
print5();

////**********************************************************************************************
////*********************************************************************************************
//// Reminder: give them the passcode: Strife
////**********************************************************************************************
////**********************************************************************************************

////**********
//// Closures!
////**********

// We've actually already done a closure. 
// What a closure is is locking away a variable 
// in such a way that you can only interact with it 
// through specifically defined functions.
// In the previous example we locked away print, and 
// now it can't be messed with only console.log-ed.

// function closure(initial){
//     var hiddenState = initial;
//     function addToA(num){
//         hiddenState += num;
//         return hiddenState;
//     }
//     return addToA;
// }
// addToVal = closure(0);
// console.log(addToVal(1));
// console.log(addToVal(1));


////*********************************************
//// window. : global scoped (basically), dynamic
////*********************************************

// var x = 5
// var y = 5
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

