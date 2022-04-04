////**********************************************************************************************
////**********************************************************************************************
//// Lecture  7: JS Basics: Variables, Intro to Scope, Primitives and Reference Types, & Iterables
////**********************************************************************************************
////**********************************************************************************************


console.log(Math.sqrt(9))
////*****************************
//// Basic Variable decelerations
////*****************************
// let i = 5
// const j = 7
// // j = 6
// var k = 10
// console.log(i,j,k)

////*******************
//// Really Basic Scope
////*******************
// {
//     let i = 5
// }
// console.log(i)
//
// {
//     const j = 5
// }
// console.log(j)

// {
//     var k = 5
// }
// console.log(k)

// function example(){
//     var k = 5
// }
// example()
// console.log(k)

// This here is spooky, we'll talk a lot more during scope lecture
// function example(){
//     k = 5
// }
// example()
// console.log(k)




////*************************************************************
//// Primitives: null, undefined, Boolean, Number, String, Symbol
////*************************************************************
// console.log("are the values equal?", 5 == "5")
// console.log("are the values and types equal?", 5 === "5")

//********************Questions************************
//* Are null and undefined ==? if so are they ===?    *
//* What about false and null/undefined?              *
//* What about false == 0 and true == 1, do they ===? *
//*****************************************************

////********************************************
////Reference Types: Object, Array, function etc
////********************************************
// console.log("are two identical arrays the same object? ===", [1,2,3] === [1,2,3])
// console.log("are two identical arrays the same object? ==", [1,2,3] == [1,2,3])
// let a = [1,2,3]
// let b = a
// console.log("are they pointing at the same object?", a === b)
// console.log("are they converted to same string?", JSON.stringify([1,2,3]) === JSON.stringify([1,2,3]))
// a = {hi: "hi", hello: "hello"}
// b = {hi: "hi", hello: "hello"}
// c = {hello: "hello", hi: "hi"}
// console.log("are they pointing at the same object?", a === b)
// console.log("if initialized in same order are they converted to same string?", JSON.stringify(a) === JSON.stringify(b))
// console.log("if initialized in different orders are they converted to same string?", JSON.stringify(a) === JSON.stringify(b))

//****************************Challenge*****************************
//* find some way to take 2 objects and compare them for equality  *
//* (they are equal if the contain the same set of key-value pairs *
//* even if they aren't declared in the same order)                *
//******************************************************************

////************************
//// Reference Types & const
////************************
// const d = {hi: "hi", hello: "hello"}
// d.hi = "sup"
// d.hewwo = "mr. obama"
// console.log(d)
// d = {}



////**********
//// Iterables
////**********
// var arr = [3, 5, 7];
// for (var i in arr) {
//     console.log(i); // indexes
// }
// for (var i of arr) {
//     console.log(i); // values
// }

// var str = "hello friends";
// for (var i in str) {
//     console.log("i:",i); // indexes
// }
// for (var v of str) {
//     console.log("v:", v); // values
// }

// var obj = {hi: "hi", hello: "hello"}
// for (var i in obj) {
//     console.log(i); // keys
// }
// for (var i of obj) { // doesn't work cause javascript is weird and dumb...
//                      // okay it's because objects key's order isn't consistently 
//                      // defined so they aren't iterators, so you can't for...of them
//     console.log(i);
// }
// for (var i in obj){
//      console.log(obj[i])   
//}


// All the other major loops
// for (index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// while (index < arr.length) {
//     console.log(arr[index]);
//     index++;
// }

// arr.forEach(myFunction);
// function myFunction(item, index)
// {
//     console.log(item);
// }

////***************************
//// Map, Reduce, Filter, Every
////***************************
const numbers = [9, 5, 2, 3, 1];
// function myMapper(num) {
//     return num * 10;
// }
// console.log(numbers.map(myMapper))

// function myReducer(total, num) {
//     console.log("t,n:",total, num)
//     return total - num;
// }


// console.log(numbers.reduce(myReducer))

function myFilter(num){
    return num >= 3;
}

// console.log(numbers.filter(myFilter))

// console.log(numbers.every(myFilter))

function myEvery(num){
    return num >= 0;
}

function existsPositives(arr){
    return !arr.every(num => num <= 0)
}

console.log(existsPositives([-1,-2,4     ]))
// console.log(numbers.every(myEvery))