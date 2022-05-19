////**********************************************************************************************
////*********************************************************************************************
//// Lecture  9: More Scope and Closures
////**********************************************************************************************
////**********************************************************************************************



////************
// Review Basics
////************

//**********************
// Let and block scoping
//**********************

// {
//     let blockScoped = 1; //2
//     console.log(1,blockScoped);
//     {             
//         console.log(2,blockScoped);        
//         blockScoped = 2; 
//         console.log(3,blockScoped);
//         { 
//             // console.log(4,blockScoped);
//             let blockScoped = 3; //4
//             console.log(5,blockScoped);
//             { 
//                 console.log(6,blockScoped);
//                 var blockScoped = 4; 
//                 console.log(7,blockScoped);
//             } 
//             console.log(8,blockScoped); 
//         } 
//         console.log(9,blockScoped); 
//     }
//     console.log(10,blockScoped);
// }
// console.log(11,blockScoped);

//*************************
// Var and function scoping
//*************************

// var functionScoped = 1; // 4
// console.log(1, functionScoped);
// function outer(){
//     console.log(2, functionScoped);
//     var functionScoped = 2;
//     console.log(3, functionScoped);
//     function middle(){
//         console.log(4, functionScoped); //undefined instead of error
//         var functionScoped = 3; // 4
//         console.log(5, functionScoped);
//         function inner(){
//             console.log(6, functionScoped);
//             window.functionScoped = 4;
//             functionScope = 4;
//             console.log(7, functionScoped);
//         }
//         inner();
//         console.log(8, functionScoped);
//     }
//     middle();
//     console.log(9, functionScoped);
// }
// outer();
// console.log(10, functionScoped);

// //********************************************************
// // functions wrapping frame is the frame it was defined in
// //********************************************************

// // brief aside window.variableName is the global variableName



// var functionScoped = 1;
// console.log(1, functionScoped);
// function outer(){
//     console.log(2, functionScoped);
//     functionScoped = 2;
//     console.log(3, functionScoped);
//     function middle(){
//         console.log(4, functionScoped); //undefined instead of error
//         var functionScoped = 3; // 4
//         console.log(5, functionScoped);
//         function inner(){
//             console.log(6, functionScoped);
//             functionScoped = 4;
//             console.log(7, functionScoped);
//         }
//         window.inner = inner;
//         console.log(8, functionScoped);
//     }
//     window.middle = middle;
//     console.log(9, functionScoped);
// }
// outer();
// middle();
// inner();
// inner();
// console.log(10, functionScoped);

// //********************************
// // Functions called multiple times
// //********************************

var count = 0;
function increaseCount(){
    var update = count + 1;
    count = update;
}
increaseCount();
increaseCount();

// //Each increaseCount here has a frame, and that frame has an update variable.

// //*********
// // Closure
// //*********

// // the wrapping frame for an inner function is not just the wrapping function it was defined in
// // it is the specific call of that wrapping function where the specific inner function was defined

// function numberWrapper(n){
//     var num = n;
//     function logNum(){
//         console.log(num);
//     }
//     return logNum;
// }
// log1 = numberWrapper(1);
// log2 = numberWrapper(2);
// log1();
// log2();
// log2();

// // // For the visualizer
// function numberWrapper(n){
//     var num = n;
//     function logNum(){
//         console.log(num);
//     }
//     return logNum;
// }
// log1 = await numberWrapper(1);
// log2 = await numberWrapper(2);
// await log1();
// await log2();
// await log2();

// // This means we can lock away data inside a wrapping function frame that is only 
// // intractable with via the inner functions aka methods that wrapping function defines
// // i.e. we can create private variable/attributes and even private methods

function makeCounter(){
    var count = 0;
    function counter(){
        count = count + 1;
        return count;
    }
    return counter;
}
counter1 = makeCounter();
// counter2 = makeCounter();
console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// //For visualizer

// function makeCounter(){
//     var count = 0;
//     function counter(){
//         count = count + 1;
//         return count;
//     }
//     return counter;
// }
// counter1 = await makeCounter();
// counter2 = await makeCounter();
// logThis= await counter1();
// console.log(logThis);
// logThis= await counter1();
// console.log(logThis);
// logThis= await counter1();
// console.log(logThis);
// logThis= await counter2();
// console.log(logThis);
// logThis= await counter2();
// console.log(logThis);
// logThis= await counter2();
// console.log(logThis);


// Live code an object function together could be cartesian points

function makeBox(l, h){
    var length = l;
    var height = h;
    function getArea(){
        return length * height;
    }
    function changeLength(newL){
        length = newL;
    }
    return [getArea, changeLength]
}

box1 = makeBox(4,5);
console.log(box1[0]());


box2 = makeBox(3,1);
console.log(box2[0]());