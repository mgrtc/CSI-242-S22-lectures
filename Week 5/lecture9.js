////**********************************************************************************************
////*********************************************************************************************
//// Lecture  9: More Scope, Closures, and maybe Iterator functions
////**********************************************************************************************
////**********************************************************************************************



////************
// Review Basics
////************

// //For each of these console.log's what will happen when they are called?
// x = 0;
// y = 0;
// z = 0;
// a = ()=>{
//     // console.log(x,y,z)
//     var x = "a: wrong number who dis"
//     y = "a: hewwo"
//     b = ()=>{
//         // console.log(x,y,z)
//         let x = "b: wassup man"
//         y = "b: hello"
//         var z = "b: howdy"
//         c = ()=>{
//             x = "c: wassup"
//             // console.log(x,y,z)
//             var y = "c: hey"
//             d = ()=>{
//                 x = "d: sup"
//                 console.log(x,y,z)
//             }
//             d()
//         }
//         c()
//         // console.log(x)
//     }
//     b()
// }
// a()
// b()

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


////*********
//// Closures
////*********
// {
//     let x = "hello" //show what happens when you change to let
//     var sayHello = function(){
//         console.log(x)
//     }
// }

// sayHello()
// console.log(x)

var count = function(){
    var counter = 0
    count = function(){
        return counter += 1
    }
    return counter
}
console.log(count())
console.log(count())
console.log(count())
console.log(count())


count = function(){
    console.log(counter)
}


{
    let counter = 0
    var count = ()=>{
        counter +=1
        return counter
    }
}

////***************************
//// Map, Reduce, Filter, Every
////***************************
// const numbers = [10, 5, 2, 1];
// function myMapper(num) {
//     return num * 10;
// }
// console.log(numbers.map(myMapper))

// function myReducer(total, num) {
//     // console.log("t,n:",total, num)
//     return total - num;
// }

// console.log(numbers.reduce(myReducer))

// function myFilter(num){
//     return num >= 3;
// }

// console.log(numbers.filter(myFilter))

// console.log(numbers.every(myFilter))

// function myEvery(num){
//     return num >= 0;
// }

// console.log(numbers.every(myEvery))