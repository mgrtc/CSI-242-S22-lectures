////*********************************************
////*********************************************
//// Lecture 5: Software/Application Architecture
////*********************************************
////*********************************************

//Application Architecture

//Initialize State & Display
//Listen for Inputs 
//Have Inputs -> change the State
//When the State is changed -> update display

// //***********
// //Dice Roller
// //***********
// window.addEventListener("load", function(event){
//     //Initialize State
//     var DieState = Math.floor(Math.random() * (6) + 1);
//     //Initialize Display
//     var DieDiv = document.getElementById("die");
//     DieDiv.innerText = DieState;
//     //Listen for Inputs 
//     var button = document.getElementById("re-roll");
//     button.addEventListener("click", function(event){
//         //Have Inputs -> change the State
//         DieState = Math.floor(Math.random() * (6) + 1);
//         //When the State is changed -> update display
//         DieDiv.innerText = DieState;
//     })
// })
// //*****
// //Adder
// //*****
// window.addEventListener("load", function(event){
//     //Initialize State
//     var num1=null;
//     var num2=null;
//     //Initialize Display
//     var num1Input = document.getElementById("num1");
//     var num2Input = document.getElementById("num2");
//     var resultSpan = document.getElementById("result");
//     //Listen for Inputs 
//     var button = document.getElementById("calculate");
//     button.addEventListener("click", function(event){
//         //Have Inputs -> change the State
//         num1 = parseInt(num1Input.value);
//         num2 = parseInt(num2Input.value);
//         //When the State is changed -> update display
//         resultSpan.innerText = num1+num2;
//     })
// })
// //***************
// //Tiny Calculator
// //***************
// window.addEventListener("load", function(event){
//     //Initialize State
//     var currentNum="";
//     var storedNum=0;
//     //Initialize Display
//     var display = document.getElementById("display");
//     display.innerText = currentNum;
//     //Listen for Inputs 
//     document.addEventListener("keyup", function(event){
//         console.log(event.key);
//         //Have Inputs -> change the State
//         if(parseInt(event.key)){ //because NaN is falsy
//             currentNum = currentNum + event.key;
//         }else if(event.key === '+'){
//             storedNum = parseInt(currentNum)+storedNum;
//             currentNum = "";
//         }else if(event.key === '='){
//             currentNum = parseInt(currentNum) + storedNum;
//             storedNum = 0;
//         }
//         //When the State is changed -> update display
//         display.innerText = currentNum;
//     })
// })
// //*************************
// //Tiny Calculator Functions
// //*************************
// window.addEventListener("load", function(event){
//     //Initialize State
//     var currentNum="";
//     var storedNum=0;
//     //Initialize Display
//     var display = document.getElementById("display");
//     display.innerText = currentNum;
//     var button = document.getElementById("calculate");

//     //Handler functions
//     function handleEquals(){
//         currentNum = parseInt(currentNum) + storedNum;
//         storedNum = 0;
//         display.innerText = currentNum;
//     }
//     //Listen for Inputs 
//     document.addEventListener("keyup", function(event){
//         console.log(event.key);
//         //Have Inputs -> change the State
//         if(parseInt(event.key)){ //because NaN is falsy
//             currentNum = currentNum + event.key;
//         }else if(event.key === '+'){
//             storedNum = parseInt(currentNum)+storedNum;
//             currentNum = "";
//         }else if(event.key === '='){
//             handleEquals();
//         }
//         //When the State is changed -> update display
//         display.innerText = currentNum;
//     })
//     button.addEventListener("click", handleEquals);
// })



