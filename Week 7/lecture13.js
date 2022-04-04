////*************************************************************************
////*************************************************************************
//// Lecture  13: Asynchronous Javascript. Callbacks, Promises, Async, & Await
////*************************************************************************
////*************************************************************************


////**********
//// Callbacks
////**********
// window.addEventListener('load', (event) => {

//     // //// *********************
//     // //// Synchronous Callbacks
//     // //// *********************
//     function callbacker(callback){
//         callback()
//     }
    
    // callbacker(()=>{
    //     console.log("called back")
    // })

//     // //// **************************
//     // //// User Interaction Callbacks
//     // //// **************************
//     const body = document.querySelector("body")
//     body.addEventListener("click", function(event){
//         console.log('this happens after I click body');
//     });

//     // //// *****************
//     // //// Timeout Callbacks
//     // //// *****************

//     setTimeout(function(){
//         console.log('This happens after 1 second')
//     }, 1000)

//     // //// *****************
//     // //// Network Callbacks
//     // //// *****************

//     $.get("coffee64.txt", function(data){
//         document.querySelector(".result").setAttribute("src", "data:image/png;base64, "+data);
//     });


//     // //// ***************
//     // //// Combo Callbacks
//     // //// ***************

//     const button = document.querySelector("button");
//     button.addEventListener("click", function(event){
//         setTimeout(function(){
//             $.get("coffee64.txt", function(data){
//                 const img = document.createElement("img");
//                 img.setAttribute("src","data:image/png;base64, "+data);
//                 document.body.appendChild(img);
//             });
//         }, 1000)
//     });

// });




////*********
//// Promises
////*********
// window.addEventListener('load', (event) => {

//     //// ****************
//     //// Timeout Promises
//     //// ****************

//     let oneSecondWait = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("sup")
//             reject('waited!');
//         }, 1000);
//     });

//     oneSecondWait
//     .then((resolution)=>{
//         console.log("success:",resolution);
//     })
//     .catch((error)=>{
//         console.log("error:", error);
//     })

//     //A promise like oneSecondWait here is an object
//     //It's a "promise" of a future value
//     //It can be in one of three states
//     //Pending: it doesn't have that value yet
//     // console.log("osw:", oneSecondWait)
//     //Resolved: it has gotten that value
//     //Rejected: it failed to get it's value
//     //If you take a pending promise and call .then 
//     //JS puts an event listener out that is watching
//     //for the promise to resolve. Once it resolves it
//     //calls the callback passed to the .then on the
//     //value the promise resolved to.

//     // oneSecondWait
//     // .then((resolution)=> {
//     //     console.log(resolution);
//     // });

//     //If a .then's callback returns another Promise,
//     //we can chain another .then onto the end of it
//     //and it's callback will get called as soon as 
//     //this second Promise is resolved

//     // oneSecondWait
//     // .then((resolution)=> {
//     //     console.log(resolution);
//     //     return oneSecondWait
//     // })
//     // .then((resolution)=> {
//     //     console.log(resolution)
//     // });

//     //This's slightly annoying though.
//     //What happened here is that oneSecondWait is a
//     //Promise object, and by the time we get into the 
//     //first .then OSW is resolved, when you stick
//     //a .then onto that resolved promise, the callback
//     //get's called instantly on the resolved value
//     //notice how "sup" only get's logged out once


//     //Okay so if we want to do this we need to be able
//     //to generate promises on demand

//     // function oneSecondWaits(){ 
//     //     return new Promise((resolve, reject) => {
//     //         setTimeout(() => {
//     //             console.log("sup");
//     //             resolve('waited on demand!'); 
//     //         }, 1000);
//     //     });
//     // }

//     // oneSecondWaits()
//     // .then((resolution)=> {
//     //     console.log(resolution);
//     //     return oneSecondWaits()
//     // })
//     // .then((resolution)=> {
//     //     console.log(resolution)
//     // });

//     // **********************
//     // Network Event Promises
//     // **********************


//     // fetch('coffee.jpg')
//     // .then((response) => {
//     //     return response.blob(); //note this right here is a promise
//     // })
//     // .then((myBlob) => {
//     //     let objectURL = URL.createObjectURL(myBlob);
//     //     image = document.createElement('img');
//     //     image.src = objectURL;
//     //     document.body.appendChild(image);
//     // })

//     // ***********************
//     // Final Notes on Promises
//     // ***********************


//     // I mislead you earlier, sorry
//     // If a promise returns something besides
//     // a promise you can chain .then's anyway
//     // the callback just get's called immediately
//     // interesting note, have this and the earlier OSW uncommented at the same time

//     // oneSecondWait
//     // .then((resolution)=> {
//     //     console.log("a:", resolution);
//     //     return "heeeeeey"
//     // })
//     // .then((resolution)=> {
//     //     console.log(resolution)
//     // });

//     //.catch & .finally

//     fetch("https://www.garbage-doesn't-exist")
//     //fetch("./garbage-doesn't-exist")
//     .then((resolution)=>{
//         console.log("garbage found", resolution)
//     })
//     .catch((error) => {
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//     })
//     .finally(()=>{
//          console.log("this always runs")
//     });

// });


//****************
// Async and Await
//****************
window.addEventListener('load', (event) => {
    //Asynchronous functions are basically promises with some bells and whistles

    async function hello() { return "Hello" };
    hello().then(value => console.log(value));


    //the main bell is await, which lets you wait for an promise to resolve before moving on

    //// ***********************
    //// Timeout Async functions
    //// ***********************

    async function timeTest1() {
        await timeoutPromise(1000);
        await timeoutPromise(100);
        await timeoutPromise(10);
        console.log("hi")
    }
    
    function timeoutPromise(interval) {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve("done");
            }, interval);
        });
    };

    let startTime = Date.now();
    timeTest1()
    .then(() => {
        let finishTime = Date.now();
        let timeTaken = finishTime - startTime;
        console.log("sequential time: " + timeTaken+"ms");
    })

    async function timeTest2() {
        const timeoutPromise1 = timeoutPromise(1000);
        const timeoutPromise2 = timeoutPromise(100);
        const timeoutPromise3 = timeoutPromise(10);
        
        await timeoutPromise1;
        await timeoutPromise2;
        await timeoutPromise3;
    }

    startTime = Date.now();
    timeTest2()
    .then(() => {
        let finishTime = Date.now();
        let timeTaken = finishTime - startTime;
        console.log("paralel time: " + timeTaken+"ms");
    })

    //// ***********************
    //// Network Async functions
    // ***********************

    async function myFetch() {
        // put loading screen
        let response = await fetch('coffee.jpg');
        // let response = await fetch('https://www.garbage..jpg');
      
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        let myBlob = await response.blob();
        //end loading screen
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
        console.log("myFetch success")
    }
      
    myFetch()
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });
});

//********************Challenge************************
// function printAll() {
//     await printString("A")  
//     await printString("B") 
//     await printString("C") 
// }
// printAll()
//
// // Write an async printString function such 
// // that "A", "B", and "C" are printed out in that 
// // order with a 1 second gap between each printing. 
//*****************************************************