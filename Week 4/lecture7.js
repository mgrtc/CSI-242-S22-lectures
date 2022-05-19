////**********************************************************************************************
////**********************************************************************************************
//// Lecture  7: JS Basics: Variables, Intro to Scope, Primitives and Reference Types, & Iterables
////**********************************************************************************************
////**********************************************************************************************

////*****************************
//// Basic Variable decelerations
////*****************************
//// 4 variable decelerations
//// let is editable and "block scoped"
// let i = 5; 
// //// const is uneditable and "block scoped"
// const j = 7;
// j = 7; //error
// //// var is  editable and "function scoped"
// var k = 10;
// //// untagged is editable and "lexically scoped" (subject of next lecture)
// f = 6;
// console.log(i,j,k);

////*******************
//// Really Basic Scope
////*******************

//// let and const are "block scoped"
// if(true){
//     let i = 5;
//     console.log(i);
// }
// console.log(i); //error

// if(true){
//     const j = 5;
//     console.log(j);
// }
// console.log(j); //error

////var is "function scoped"
// {
//     var k = 5;
// }
// console.log(k);

// function example(){
//     if(true){
//         var l = 5;
//     }
//     console.log(l);
// }
// example();
// console.log(l);

// Untagged decelerations are "lexically scoped", i.e. follow up the frames where the functions were declared
// This is spooky, and we'll talk a lot more during the scope lecture on Thursday
// function example(){
//     o = 5;
//     console.log(o);
// }
// example();
// console.log(o);




////*************************************************************
//// Primitives: null, undefined, Boolean, Number, String, Symbol
////*************************************************************
// console.log("are the values equal?", 5 == "5");
// console.log("are the values and types equal?", 5 === "5");

//********************Questions************************
//* Are null and undefined ==? if so are they ===?    *
//* What about false and null/undefined?              *
//* What about false == 0 and true == 1, do they ===? *
//*****************************************************

////********************************************
////Reference Types: Object, Array, function etc
////********************************************
// console.log("are two identical arrays the same object? ===", [1,2,3] === [1,2,3]);
// console.log("are two identical arrays the same object? ==", [1,2,3] == [1,2,3]);
// let a = [1,2,3];
// let b = a;
// console.log("are they pointing at the same object?", a === b);
// console.log("are they converted to same string?", JSON.stringify([1,2,3]) === JSON.stringify([1,2,3]));
// a = {hi: "hi", hello: "hello"};
// b = {hi: "hi", hello: "hello"};
// c = {hello: "hello", hi: "hi"};
// console.log("are they pointing at the same object?", a === b);
// console.log("if initialized in same order are they converted to same string?", JSON.stringify(a) === JSON.stringify(b));
// console.log("if initialized in different orders are they converted to same string?", JSON.stringify(a) === JSON.stringify(c));

//****************************Challenge*****************************
//* find some way to take 2 objects and compare them for equality  *
//* (they are equal if the contain the same set of key-value pairs *
//* even if they aren't declared in the same order)                *
//******************************************************************

////************************
//// Reference Types & const
////************************
// const d = {val: "initial"};
// d.val = "new value";
// d.new = "another value";
// console.log(d);
// This is allowed because arrays and objects are "mutable" that is you can change what's inside of them without changing which array / object they are.
// It's still the same object it just contains different stuff.
// d = {};



////**********
//// Iterables
////**********
// var arr = [3, 5, 7];
// for (var i in arr) {
//     console.log(i); // indexes
// }
// for (var val of arr) {
//     console.log(val); // values
// }

// var str = "hello friends";
// for (var i in str) {
//     console.log("i:",i); // indexes
// }
// for (var v of str) {
//     console.log("v:", v); // values
// }

// var obj = { val2: "hello", val1: "hi"};
// for (var i in obj) {
//     console.log(i); // keys
// }
// for (var v of obj) { // doesn't work cause javascript is weird and dumb
//     console.log(v);
// }
// for (var i in obj){ // you have to do this instead 
//      console.log(obj[i]);   //values
// }


// All the other major loops
// var arr = [3, 5, 7];
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// var index = 0;
// while (index < arr.length) {
//     console.log(arr[index]);
//     index++;
// }
// for (let index = 0; index < arr.length; index++) {
//     myFunction(arr[i], i);
// }
// arr.forEach(myFunction);

// function myFunction(value, index)
// {
//     console.log(value);
// }

////***************************
//// Map, Reduce, Filter, Every
////***************************


// [4,0,-3,-2,-4]
//**************************************************************
// Map                                                         *
// array1.map(func) => array2 where array2[i] = func(array1[i])*


// function myMapper(num) {
//     return num * num;
// }
// var mapped = numbers.map(myMapper);
// console.log(mapped);
// console.log(numbers,mapped, numbers === mapped);

//********************************************************************************************************
// Reduce                                                                                                *
// array1.reduce(func) => func(...func(func(func(array[0],array[1]), array[2]), array[3]),..., array[n]);*

// function myReducer(total, num) {
//     console.log("t,n:",total, num)
//     return total - num;
// }

// function myReducer(total, val) {
//     console.log("t,n:",total, val)
//     return val - total;
// }


// console.log(numbers.reduce(myReducer))

//************************************************************************************************************
// Filter                                                                                                    *
//array1.filter(func) => array2 where array2 contains all the elements of array 1 where func(element) == true*

// function myFilter(num){
//     return num >= 3;
// }

// console.log(numbers.filter(myFilter));
// console.log([0,1,2,false,true,undefined, null, "0","1", "2",[]].filter((elem)=>{return elem}));


//**********************************************************************************************
// Every                                                                                       *
// array.every(func) => func(array[0]) && func(array[1]) && func(array[2]) ... & func(array[n])*
const numbers = [1,0,-1];

function isPositive(num){
    return num >= 0;
}
function isNegative(num){
    return num < 0;
}
function isNumber(num){
    return !isNaN(num)
}
console.log(!numbers.every(isNegative) && numbers.every(isNumber)); // == exists a positive


//****************************Challenge******************************
//*      Figure out and explain how this last function works        *
//*******************************************************************

// function existsPositives(arr){
//     return !arr.every(num => num <= 0);
// }

// console.log(existsPositives([-1,-2,4]));
