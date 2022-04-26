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


//Initialize the application
//State of your application, Display of your application You need these to match

//Listen for Inputs / interactions (listen for external events)

//When inputs happen, we want to change the state of the application in the way that the user wants given that interaction

//When the State changes, change the display so that it still matches the State.

// //***********
// //Dice Roller
// //***********
// window.addEventListener("load", function(event){
// //     //Initialize State
//     var DieState = Math.floor(Math.random() * (6)) + 1;
// //     //Initialize Display to match the State
//     var DieDiv = document.getElementById("die");
//     DieDiv.innerText = DieState;
// //     //Listen for Inputs 
//     var button = document.getElementById("re-roll");
//     button.addEventListener("click", function(event){
// //         //Have Inputs -> change the State
//         DieState = Math.floor(Math.random() * (6) + 1);
// //         //When the State is changed -> update display
//         DieDiv.innerText = DieState;
//     });
// })
// //*****
// //Adder
// //*****
// window.addEventListener("load", function(event){

// //Initialize the State
//     var num1 = null;
//     var num2 = null;
//     var result = null;

// //Initialize the Display to match State
//     var num1Input = document.getElementById("num1");
//     var num2Input = document.getElementById("num2");
//     var resultSpan = document.getElementById("result");

// //Listen for inputs
//     var button = document.getElementById("calculate");
//     button.addEventListener("click", function(event){
//         //Have Inputs -> change the State
//         num1 = num1Input.value;
//         num2 = num2Input.value;
//         result = parseInt(num1)+parseInt(num2);
//         console.log(result);
//         //When the State is changed -> update display
//         resultSpan.innerText = result;
        
//     });

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
// });

// //***************
// //Tiny Calculator
// //***************

window.addEventListener("load", function(event){
    //[This code was taken from lecture4.js begin]
    // function addGlobalEventListener(type, selector, func){
    //     document.addEventListener(type, (event) => {
    //         if (event.target.matches(selector)){
    //             func(event)
    //         }
    //     })
    // }
    //[This code was taken from lecture4.js end]

//     //Initialize State
    var currentNum="";
    var storedNum=0;
//     //Initialize Display
    var display = document.getElementById("display");
    display.innerText = currentNum;
//     //Listen for Inputs 
    document.addEventListener("keyup", function(event){
        // console.log(event.key);
//         //Have Inputs -> change the State
        if(parseInt(event.key) || event.key === '0'){ //because NaN is falsy
           handleNumber(event.key);
        }
//         else if(event.key === '+'){
//             storedNum = parseInt(currentNum);
//             currentNum = "";
//         }
//         else if(event.key === '='){
//             currentNum = parseInt(currentNum) + storedNum +'';
//             console.log(currentNum);
//         }
// //         //When the State is changed -> update display
//         display.innerText = currentNum;
    });
    
});
// //*************************
// //Tiny Calculator Functions
// //*************************
// window.addEventListener("load", function(event){
//     //Initialize State
//     var currentNum="";
//     var storedNum=0;
// //     //Initialize Display
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



